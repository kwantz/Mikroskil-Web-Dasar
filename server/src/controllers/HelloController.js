const global = require('./GlobalController');

module.exports = {
    getHelloWorld (req, res) {
        let objRes = {};
        objRes.title = "Hello World !";

        global.returnJsonResponse(res, objRes);
    }
}
