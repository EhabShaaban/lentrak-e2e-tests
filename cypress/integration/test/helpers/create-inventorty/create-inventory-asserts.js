import InventoryPage from "../../../page/inventory-page"

const inventortyPage = new InventoryPage()

/**
 * This should assert on newly created
 * inventory based on provided options
 * 
 * @typedef InventoryAssertsParams
 * @property {8} 
 *
 * @param {8}
 */

module.exports = ({
    //vin,
    //InventoryStatus,
    //bodyType,
    listingMileage,
    listingPrice,
    purchasePrice,
    totalExpenses,
    totalCost,
    profit,
    source,
    tax,
    invoiceNumber,
    purchaseMileage
}) => {
    
    inventortyPage.vinDiv()
    inventortyPage.InventoryStatusDiv()
    inventortyPage.bodyTypeDiv()
    inventortyPage.listingMileageDiv()
    inventortyPage.listingPriceDiv()
    inventortyPage.purchasePriceDiv()
    inventortyPage.totalExpensesDiv()
    inventortyPage.totalCostDiv()
    inventortyPage.profitDiv()
    inventortyPage.sourceDiv()
    inventortyPage.taxDiv()
    inventortyPage.invoiceNumberDiv()
    inventortyPage.purchaseMileageDiv()
    
}