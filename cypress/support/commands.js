import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import {gql, request, GraphQLClient} from 'graphql-request'
import "cypress-localstorage-commands"
import faker from 'faker'

let accessToken = "";
let purchasePirce = faker.datatype.number(15000)
let vehicleFeatureArray = [
  "air_conditioning",
  "alarm",
  "alloy_wheels",
  "bluetooth",
  "dual_climate_control",
  "entertainment_package",
  "fog_lights",
  "heated_mirror",
  "heated_seats",
  "keyless_entry",
  "memory_seat",
  "navigation_system",
  "power_locks",
  "power_mirrors",
  "power_seats",
  "power_windows",
  "stability_control",
  "sunroof",
  "tow_package",
  "xeon_headlights"
]
let vehicleBodyTypeArray = [
  "sedan",
  "coupe",
  "hatchback",
  "suv",
  "crossover",
  "minivan",
  "van",
  "pickup_truck",
  "wagon",
  "convertible",
]
let vehicleInteriorColorsArray = [
  "beige",
  "black",
  "blue",
  "brown",
  "grey",
  "red",
  "white"
]
let vehicleExteriorColorsArray = [
  "beige",
  "black",
  "blue",
  "brown",
  "copper",
  "gold",
  "green",
  "grey",
  "light_blue",
  "maroon",
  "orange",
  "purple",
  "red",
  "silver",
  "white",
  "yellow",
]
let vehicleDrivetrainArray = [
  "four_wd",
  "awd",
  "fwd",
  "rwd"
]
let vehicleTransmissionArray = [
  "automatic",
  "manual"
]
let vehicleDoorArray = [
  "door_2",
  "door_3",
  "door_4",
  "door_5",
  "other"
]
let vehicleFuelTypeArray = [
  "gasoline",
  "diesel",
  "flex",
  "hybrid",
  "electric",
  "alternate",
  "other"
]
let vehicleCylindersArray = [
  "cylinders_3",
  "cylinders_4",
  "cylinders_5",
  "cylinders_6",
  "cylinders_8",
  "cylinders_10",
  "cylinders_12"
]

function getSevenFeatures(){
  return vehicleFeatureArray.sort(() => Math.random() - Math.random()).slice(0, 7).toString().replace(/"/g, "")
}
function getVehicleData(arr){
  return arr.sort(() => Math.random() - Math.random()).slice(0, 1)
}

// this will be query for whole-sale only, different trade-in query should be implemented
function createWholeSaleInventory() {
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
          make:"test"
          model:"car"
          body:${getVehicleData(vehicleBodyTypeArray)}
          interior_color:${getVehicleData(vehicleInteriorColorsArray)}
          exterior_color:${getVehicleData(vehicleExteriorColorsArray)}
          passengers: 2
          engine_displacement:"3.3"
          drivetrain: ${getVehicleData(vehicleDrivetrainArray)}
          transmission: ${getVehicleData(vehicleTransmissionArray)}
          doors: ${getVehicleData(vehicleDoorArray)}
          fuel_type:${getVehicleData(vehicleFuelTypeArray)}
          cylinders: ${getVehicleData(vehicleCylindersArray)}
          city_fuel_economy: {
            amount:${faker.datatype.number(200)}
            unit: lp100km 
          }
          highway_fuel_economy: {
            amount: ${faker.datatype.number(200)}
            unit: lp100km
          }
          combined_fuel_economy: {
            amount: ${faker.datatype.number(200)}
            unit: lp100km
          }
          features: [${getSevenFeatures()}]
        }
        price: ${faker.datatype.number({
          'min': 16000,
          'max': 25000
      })}
        mileage: {
          distance:${faker.datatype.number(10000)}
          unit: km	
        }
        source: {
          wholesale: {
            price: ${purchasePirce}
            tax: ${purchasePirce*0.13}
            date: "2017-11-25T23:45:35.116Z"
            mileage: {
              distance: ${faker.datatype.number(150)}
              unit: km
            }
            comments: "this is a test comment"
            invoice_number: "8768KHA2334"
          }
        }
      }) {
        id
        stock_number
        status
      }
    }`
    graphQLClient.request(query).then((data) =>{
      cy.setSessionStorage('stock', data.createInventory.stock_number)
    })
}

addMatchImageSnapshotCommand({
    failureThreshold: 0.00,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.0 },
    capture: 'viewport',
});

// cypress commands
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

Cypress.Commands.add("createWholeSaleInventory", createWholeSaleInventory)

Cypress.Commands.add('getSessionStorage', (key) => {
  cy.window().then((window) => window.sessionStorage.getItem(key))
})

Cypress.Commands.add('setSessionStorage', (key, value) => {
  cy.window().then((window) => {
    window.sessionStorage.setItem(key, value)
  })
})