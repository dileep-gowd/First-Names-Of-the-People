const func = require("../utilities/utils/index");
const reqObj = require("../country/state/city/index");

const getPeopleInCity = (reqObj) => func(reqObj);
module.exports = getPeopleInCity;
