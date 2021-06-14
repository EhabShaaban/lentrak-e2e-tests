import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import {gql, request, GraphQLClient} from 'graphql-request'
import "cypress-localstorage-commands"
import faker from 'faker'
import vinGenerator from 'vin-generator'

let accessToken = "";
let inventory = {}

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
let inventoryTypeArray = [
  "four_wd",
  "awd",
  "fwd",
  "rwd"
]
let inventoryGearTypeArray = [
  "automatic",
  "manual"
]
let vehicleDoorArray = [
  "door_2",
  "door_3",
  "door_4",
  "door_5",
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

function getFeatures(){
  return vehicleFeatureArray.sort(() => Math.random() - Math.random()).slice(0, 7).toString().replace(/"/g, "")
}
function getVehicleData(arr){
  return arr.sort(() => Math.random() - Math.random()).slice(0, 1)
}

// export function getLien() {
//   return lien;  
// }

function createWholeSaleInventory() {
  return new Cypress.Promise((resolve, reject) => {
    
    let cityFuelEco = faker.datatype.number(200)
    let combinedFuelEco = faker.datatype.number(200)
    let highwayFuelEco = faker.datatype.number(200)
    let listingMileage = faker.datatype.number(10000)
    let listingPrice = faker.datatype.number({
      'min': 16000,
      'max': 25000
    })
    let bodyType = getVehicleData(vehicleBodyTypeArray).toString()
    let cylinders = getVehicleData(vehicleCylindersArray).toString()
    let numberOfDoors = getVehicleData(vehicleDoorArray).toString()
    let inventoryType = getVehicleData(inventoryTypeArray).toString()
    let exteriorColor = getVehicleData(vehicleExteriorColorsArray).toString()
    let fuelType = getVehicleData(vehicleFuelTypeArray).toString()
    let interiorColor = getVehicleData(vehicleInteriorColorsArray).toString()
    let features = getFeatures()
    let gearType = getVehicleData(inventoryGearTypeArray).toString()
    let inventoryCore = {
      bodyType:bodyType,
      cylinders:cylinders.substr(cylinders.indexOf("_"+1),-1),
      numberOfDoors:numberOfDoors.substr(numberOfDoors.indexOf("_"+1),-1),
      inventoryType:inventoryType,
      exteriorColor:exteriorColor,
      fuelType:fuelType,
      interiorColor:interiorColor,
      features:features,
      gearType:gearType
    }
    inventory.inventoryCore = inventoryCore
    
    let purchaseMileage = faker.datatype.number(150)
    let purchasePrice = faker.datatype.number(15000)
    let purchaseInfo = {
      purchaseMileage:purchaseMileage,
      purchasePrice:purchasePrice
    }
    inventory.purchaseInfo = purchaseInfo    

    let vin = vinGenerator.generateVin()
    let generalInfo = {
      vin:vin,
      cityFuelEco:cityFuelEco,
      combinedFuelEco:combinedFuelEco,
      highwayFuelEco:highwayFuelEco,
      listingMileage:listingMileage,
      listingPrice:listingPrice
    }
    inventory.generalInfo = generalInfo

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
            drivetrain: ${inventoryType}
            transmission: ${gearType}
            doors: ${numberOfDoors}
            fuel_type:${fuelType}
            cylinders: ${cylinders}
            city_fuel_economy: {
              amount:${cityFuelEco}
              unit: lp100km 
            }
            highway_fuel_economy: {
              amount: ${highwayFuelEco}
              unit: lp100km
            }
            combined_fuel_economy: {
              amount: ${combinedFuelEco}
              unit: lp100km
            }
            features: [${features}]
          }
          price: ${listingPrice}
          mileage: {
            distance:${listingMileage}
            unit: km	
          }
          source: {
            wholesale: {
              price: ${purchasePrice}
              tax: ${purchasePrice*0.13}
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
        resolve(data.createInventory.stock_number)
      })
  })
}

function createTradeInInventory() {
  return new Cypress.Promise((resolve, reject) => {

    let cityFuelEco = faker.datatype.number(200)
    let combinedFuelEco = faker.datatype.number(200)
    let highwayFuelEco = faker.datatype.number(200)
    let listingMileage = faker.datatype.number(10000)
    let listingPrice = faker.datatype.number({
      'min': 16000,
      'max': 25000
    })
    let bodyType = getVehicleData(vehicleBodyTypeArray).toString()
    let cylinders = getVehicleData(vehicleCylindersArray).toString()
    let numberOfDoors = getVehicleData(vehicleDoorArray).toString()
    let inventoryType = getVehicleData(inventoryTypeArray).toString()
    let exteriorColor = getVehicleData(vehicleExteriorColorsArray).toString()
    let fuelType = getVehicleData(vehicleFuelTypeArray).toString()
    let interiorColor = getVehicleData(vehicleInteriorColorsArray).toString()
    let features = getFeatures()
    let gearType = getVehicleData(inventoryGearTypeArray).toString()
    let inventoryCore = {
      bodyType:bodyType,
      cylinders:cylinders.substr(cylinders.indexOf("_"+1),-1),
      numberOfDoors:numberOfDoors.substr(numberOfDoors.indexOf("_"+1),-1),
      inventoryType:inventoryType,
      exteriorColor:exteriorColor,
      fuelType:fuelType,
      interiorColor:interiorColor,
      features:features,
      gearType:gearType
    }
    inventory.inventoryCore = inventoryCore
    
    let purchaseMileage = faker.datatype.number(150)
    let purchasePrice = faker.datatype.number(15000)
    let purchaseInfo = {
      purchaseMileage:purchaseMileage,
      purchasePrice:purchasePrice
    }
    inventory.purchaseInfo = purchaseInfo    

    let vin = vinGenerator.generateVin()
    let lien = faker.datatype.number({
      'min': 1000,
      'max': 2000
    })
    let generalInfo = {
      vin:vin,
      lien:lien,
      cityFuelEco:cityFuelEco,
      combinedFuelEco:combinedFuelEco,
      highwayFuelEco:highwayFuelEco,
      listingMileage:listingMileage,
      listingPrice:listingPrice
    }
    inventory.generalInfo = generalInfo


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
            drivetrain: ${inventoryType}
            transmission: ${gearType}
            doors: ${numberOfDoors}
            fuel_type:${fuelType}
            cylinders: ${cylinders}
            city_fuel_economy: {
              amount:${cityFuelEco}
              unit: lp100km 
            }
            highway_fuel_economy: {
              amount: ${highwayFuelEco}
              unit: lp100km
            }
            combined_fuel_economy: {
              amount: ${combinedFuelEco}
              unit: lp100km
            }
            features: [${features}]
          }
          price: ${listingPrice}
          mileage: {
            distance:${listingMileage}
            unit: km	
          }
          source: {
            tradein: {
              price: ${purchasePrice}
              tax: ${purchasePrice*0.13}
              date: "2017-11-25T23:45:35.116Z"
              mileage: {
                distance: ${purchaseMileage}
                unit: km
              }
              comments: "this is a test comment"
              tradein_hst_registration_number:"7865756KHJ34009"
              lien: {
                lien_holder:"Test Lien Holder"
                lien_amount: ${lien}
                }
              }
            }
        }) {
          id
          stock_number
          status
        }
      }`
      graphQLClient.request(query).then((data) =>{
        resolve(data.createInventory.stock_number)
      })
  })
}

addMatchImageSnapshotCommand({
    failureThreshold: 0.00,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.0 },
    capture: 'viewport',
});

export function getInventory() {
  return inventory;
}

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
Cypress.Commands.add("createTradeInInventory", createTradeInInventory)