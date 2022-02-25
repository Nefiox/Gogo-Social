const store = require("../../../store/remote-mysql");
const ctrl = require("./controller");

module.exports = ctrl(store);
