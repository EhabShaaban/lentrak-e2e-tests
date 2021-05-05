import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import {gql, request} from 'graphql-request'

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