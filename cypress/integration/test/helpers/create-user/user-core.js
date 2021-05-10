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
    usrInfo
}) => {

    const userPage = new UserPage()
    userPage.clickAddUserBtn()
    userPage.typeFirstName(usrInfo.firstName)
    userPage.typeLastName(usrInfo.lastName)
    userPage.typeEmail(usrInfo.email)
    userPage.typeContact(usrInfo.contactNumber)
    userPage.typeSaleNo(usrInfo.salesNumber)
    userPage.typeTitle(usrInfo.title)

}