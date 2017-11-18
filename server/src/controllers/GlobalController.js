module.exports = {
    returnJsonResponse (res, obj) {
        res.contentType('application/json');
        res.send(JSON.stringify(obj));
    }
}
