import UserPage from '../../../page/user-page'

const userPage = new UserPage()

module.exports = function createUserCore(){

    userPage.clickAddUserBtn()
    userPage.typeFirstName()
    userPage.typeLastName()
    userPage.typeEmail()
    userPage.typeContact()
    userPage.typeSaleNo()
    userPage.typeTitle()
    
}