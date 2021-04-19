import CreateInventoryPage from '../../page/create-inventory-page'
const createInv = new CreateInventoryPage()

/**
 * This should creste a car based on provided options
 * 
 * @typedef CreateCarParams
 * @property {String} vinId
 * @property {String} listingMileageId
 * 
 * @param {CreateCarParams} parm0
 */
module.exports = ({
    vinId,
    listingMileageId,
    fuelTypeId,
    cityFuelEcoId,
    engineDisplacementId,
    cylindersId,
    highwayFuelEcoId,
    bodyTypeId,
    passengersId,
    combinedFuelEcoId,
    sourceSpanType,
    vendorId,
    purchasePriceInputType,
    purchasePrice,
    purchaseMileageId,
    purchaseInvoiceId,
    purchaseCommentsId,
    listingPriceInput,
}) => {
    createInv.vinId().type(vinId).type('{enter}')
    createInv.decodeBtn().click()
    createInv.listingMileageId().type(listingMileageId)
    createInv.listingPriceInput().type(listingPriceInput)
    createInv.exteriorColorDiv().click()
    createInv.interiorColorColorDiv().click()
    for(var i=0; i<=5;i++){
        createInv.featuresDiv(i).click()
    }
    //
    createInv.fourWdDiv().click()
    createInv.fuelTypeId().type(fuelTypeId).type('{enter}')
    createInv.cityFuelEcoId().type(cityFuelEcoId)
    createInv.engineDisplacementId().type(engineDisplacementId)
    //
    createInv.automaticDiv().click()
    createInv.cylindersId().type(cylindersId).type('{enter}')
    createInv.highwayFuelEcoId().type(highwayFuelEcoId)
    createInv.bodyTypeId().type(bodyTypeId).type('{enter}')
    //
    createInv.numberOfDoors2Div().click()
    createInv.passengersId().type(passengersId)
    createInv.combinedFuelEcoId().type(combinedFuelEcoId).type('{enter}')
    //
    createInv.nextBtn().click()
    createInv.sourceSpan().click({force: true})
    createInv.sourceSpan().type(sourceSpanType).type('{enter}')
    createInv.vendorId().type(vendorId).type('{enter}')
    createInv.purchasePriceInput().click({force: true})
    createInv.purchasePriceInput().type(purchasePriceInputType)
    createInv.purchaseMileageId().type(purchaseMileageId)
    createInv.purchaseInvoiceId().type(purchaseInvoiceId)
    createInv.purchaseCommentsId().type(purchaseCommentsId)
    var purchaseTax = purchasePrice * 0.13;
    purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    createInv.purchaseTaxInput().should('have.value', purchaseTax)
}