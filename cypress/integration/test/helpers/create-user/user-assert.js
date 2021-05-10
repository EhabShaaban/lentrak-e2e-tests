import UserPage from '../../../page/user-page'

/**
 * This should assert on the newly created system user data
 * 
 * impacted page user-page.js
 * 
 * @typedef AssertUserParams
 * @property {String} firstName
 * @property {String} lastName
 * @property {String} userEmail
 * @property {String} contact
 * @property {String} salesNumber
 * @property {String} title
 * 
 * @param {CreateUserCore} firstName    - user's first name
 * @param {CreateUserCore} lastName     - user's last name
 * @param {CreateUserCore} userEmail    - user's email
 * @param {CreateUserCore} contact      - user's contact number
 * @param {CreateUserCore} salesNumber  - user's sales number
 * @param {CreateUserCore} title        - user's title
 */
module.exports = ({
    usrInfo     
}) => {

    console.log(usrInfo.firstName)
    console.log(usrInfo.lastName)
    console.log(usrInfo.email)
    console.log(usrInfo.contactNumber)
    console.log(usrInfo.salesNumber)
    console.log(usrInfo.title)
    
}