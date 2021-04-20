import CreateInventoryPage from "../../../page/create-inventory-page"

const createInv = new CreateInventoryPage()

module.exports = ({
    inventoryType,
    fuelType,
}) => {

    createInv.selectInventoryType(inventoryType)

    createInv.fuelTypeId().type(fuelType).type('{enter}')
    
}