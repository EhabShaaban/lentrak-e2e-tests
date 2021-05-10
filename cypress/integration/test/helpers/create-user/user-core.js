import UserPage from '../../../page/user-page'

/**
 * This should create system user based on provided options
 * 
 * impacted page user-page.js
 * 
 * @typedef CreateUserCoreParams
 * @property {String} userEmail
 * 
 * @param {CreateUserCore} userEmail    - user's email
 */
module.exports = ({
    userEmail
}) => {

    const userPage = new UserPage()
    userPage.clickAddUserBtn()
    userPage.typeFirstName()
    userPage.typeLastName()
    userPage.typeEmail(userEmail)
    userPage.typeContact()
    userPage.typeSaleNo()
    userPage.typeTitle()

}