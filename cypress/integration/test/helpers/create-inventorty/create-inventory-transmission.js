import CreateInventoryPage from "../../../page/create-inventory-page"

const createInv = new CreateInventoryPage()

module.exports = ({
    gearType,
    cylinders,
    bodyType,
}) => {

    createInv.selectGear(gearType)

    createInv.cylindersId().type(cylinders).type('{enter}')

    createInv.bodyTypeId().type(bodyType).type('{enter}')
    
}