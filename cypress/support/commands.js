import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import {gql, request, GraphQLClient} from 'graphql-request'
import "cypress-localstorage-commands"
import faker from 'faker'
// import bosInventory from '../integration/test/helpers/create-bos/create-bos'

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

let accessToken = "";

let inventory = {}
const vinGenerator = require('vin-generator');
let vin = vinGenerator.generateVin()
inventory.vin = vin
let bodyType = getVehicleData(vehicleBodyTypeArray).toString()
inventory.bodyType = bodyType
let purchasePirce = faker.datatype.number(15000)
inventory.purchasePirce = purchasePirce
let interiorColor = getVehicleData(vehicleInteriorColorsArray).toString()
inventory.interiorColor = interiorColor
let exteriorColor = getVehicleData(vehicleExteriorColorsArray).toString()
inventory.exteriorColor = exteriorColor
let drivetrain = getVehicleData(vehicleDrivetrainArray).toString()
inventory.drivetrain = drivetrain
let transmission = getVehicleData(vehicleTransmissionArray).toString()
inventory.transmission = transmission
let doors = getVehicleData(vehicleDoorArray).toString()
inventory.doors = doors
let fuelType = getVehicleData(vehicleFuelTypeArray).toString()
inventory.fuelType = fuelType
let cylinders = getVehicleData(vehicleCylindersArray).toString()
inventory.cylinders = cylinders
let cityFuelEconomy = faker.datatype.number(200)
inventory.cityFuelEconomy = cityFuelEconomy
let highwayFuelEconomy = faker.datatype.number(200)
inventory.highwayFuelEconomy = highwayFuelEconomy
let combinedFuelEconomy = faker.datatype.number(200)
inventory.combinedFuelEconomy = combinedFuelEconomy
let sevenFeatures = getSevenFeatures()
inventory.sevenFeatures = sevenFeatures
let listingPrice = faker.datatype.number({
  'min': 16000,
  'max': 25000
})
inventory.listingPrice = listingPrice
let listingMileage = faker.datatype.number(10000)
inventory.listingMileage = listingMileage
let purchaseMileage = faker.datatype.number(150)
inventory.purchaseMileage = purchaseMileage
// bosInventory({inventory:inventory})

function getSevenFeatures(){
  return vehicleFeatureArray.sort(() => Math.random() - Math.random()).slice(0, 7).toString().replace(/"/g, "")
}
function getVehicleData(arr){
  return arr.sort(() => Math.random() - Math.random()).slice(0, 1)
}

// this will be query for whole-sale only, different trade-in query should be implemented
function createWholeSaleInventory() {
  const graphQLClient = new GraphQLClient(Cypress.config("gatewayUrl"), {
      headers: {
        authorization: 'Bearer '+accessToken,
      },
    })
    const query = gql`mutation {
      createInventory(input: {
        stock_number:"xwd_123"
        vehicle: {
          vin:"${vin}"
          year:2021
          make:"test"
          model:"car"
          body:${bodyType}
          interior_color:${interiorColor}
          exterior_color:${exteriorColor}
          passengers: 2
          engine_displacement:"3.3"
          drivetrain: ${drivetrain}
          transmission: ${transmission}
          doors: ${doors}
          fuel_type:${fuelType}
          cylinders: ${cylinders}
          city_fuel_economy: {
            amount:${cityFuelEconomy}
            unit: lp100km 
          }
          highway_fuel_economy: {
            amount: ${highwayFuelEconomy}
            unit: lp100km
          }
          combined_fuel_economy: {
            amount: ${combinedFuelEconomy}
            unit: lp100km
          }
          features: [${sevenFeatures}]
        }
        price: ${listingPrice}
        mileage: {
          distance:${listingMileage}
          unit: km	
        }
        source: {
          wholesale: {
            price: ${purchasePirce}
            tax: ${purchasePirce*0.13}
            date: "2017-11-25T23:45:35.116Z"
            mileage: {
              distance: ${purchaseMileage}
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