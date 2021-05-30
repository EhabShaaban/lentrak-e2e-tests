import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import {gql, request, GraphQLClient} from 'graphql-request'

let accessToken = "";

addMatchImageSnapshotCommand({
    failureThreshold: 0.00,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.0 },
    capture: 'viewport',
});

Cypress.Commands.add("setResolution", (size) => {
if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
    } else {
    cy.viewport(size);
    }
})

Cypress.Commands.add("graphql", (url, query) => {
    return request(url, query)
})

Cypress.Commands.add("login", (username, password) => {
    cy.graphql(Cypress.config("gatewayUrl"), gql`mutation {
        login(input: {
            username: "${username}"
            password: "${password}"
        }) {
            access_token
            refresh_token
            expires_in
            token_type
            user {
                id
                first_name
                last_name
                email
                department
                salesperson_registration_number
                roles
                verified
                title
                __typename
                phone_numbers {
                    number
                    type
                    extension
                    __typename
                }
            }
        }
    }`).then((data) => {
        accessToken = data.login.access_token;
        return cy.wrap({
            auth: {
                isLogin: true,
                accessToken: data.login.access_token,
                loader: false,
                first_name: data.login.user.first_name,
                last_name: data.login.user.last_name,
                roles: data.login.user.roles,
                id: data.login.user.id,
                email: data.login.user.email,
                department: data.login.user.department,
                salesperson_registration_number: data.login.user.salesperson_registration_number,
                verified: data.login.user.verified,
                title: data.login.user.title,
                blocked: data.login.user.blocked,
                "__typename": data.login.user["__typename"],
                phone_numbers: data.login.user.phone_numbers
            },
            _persist: { version: -1, rehydrated: true }
        })
    })
})

// need to return stockNumber to test files & update query
function createInventory() {
    const vinGenerator = require('vin-generator');
    const graphQLClient = new GraphQLClient(Cypress.config("gatewayUrl"), {
        headers: {
          authorization: 'Bearer '+accessToken,
        },
      })
      const query = gql`mutation {
        createInventory(input: {
          stock_number:"xwd_123"
          vehicle: {
            vin:"${vinGenerator.generateVin()}"
            year:2021
            make:"car"
            model:"carModel"
            features: [alarm, alloy_wheels, bluetooth]
          }
          medias: [
            {
              id:"id_string"
              content_type:"string"
              file_name:"string"
              media_type:image
            }
          ]
        }) {
          id
          stock_number
          status
        }
      }`
      const data = graphQLClient.request(query).then((data) =>{
        let stockNumber = data.createInventory.stock_number
        console.log(stockNumber)
        return cy.wrap(stockNumber)
      })
}
Cypress.Commands.add("createInventory", createInventory)