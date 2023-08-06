/* A library to help you hash passwords. */
const bcrypt = require("bcrypt"); // npm i bcrypt

const saltRounds = 12;
const myPassword = "Stoffel";

const storePassword = async () => {
  const hashedPW = await bcrypt.hash(myPassword, saltRounds);
  return hashedPW;
};

const checkPassword = async (plain, hash) => {
  const result = await bcrypt.compare(plain, hash);
  return result;
};

storePassword().then((hashedPW) => {
  console.log(hashedPW);
  checkPassword(myPassword, hashedPW).then((result) => {
    console.log(result);
  });
});
