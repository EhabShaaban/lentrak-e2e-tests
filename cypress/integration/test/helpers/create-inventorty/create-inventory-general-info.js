import CreateInventoryPage from '../../../page/create-inventory-page'

const createInv = new CreateInventoryPage()

module.exports = ({
    listingMileage,
    cityFuelEco,
    highwayFuelEco,
    passengers,
    combinedFuelEco,
    engineDisplacement,
}) => {

    createInv.listingMileageId().type(listingMileage)

    createInv.exteriorColorDiv().click()

    createInv.interiorColorColorDiv().click()

    for(var i=0; i<=5;i++){
        createInv.featuresDiv(i).click()
    }

    createInv.cityFuelEcoId().type(cityFuelEco)

    createInv.highwayFuelEcoId().type(highwayFuelEco)

    createInv.passengersId().type(passengers)

    createInv.combinedFuelEcoId().type(combinedFuelEco)

    createInv.engineDisplacementId().type(engineDisplacement)
    
}