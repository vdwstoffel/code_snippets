/*****************
 ***** dotenv *****
 ******************/
/*  module that loads environment variables
 *   Create a .env file in the root of your project
 *   S3_BUCKET="YOURS3BUCKET"
 *   console.log(process.env)
 */
require("dotenv").config({ path: "../../.env" });   // npm i dotenv
console.log(process.env["FIREBASE"]);
