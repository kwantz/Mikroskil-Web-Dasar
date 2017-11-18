const { account } = require('../models');
const { returnJsonResponse } = require('./GlobalController');

module.exports = {
    async getAccount (req, res) {
        const objRes = await account.findAll();
        returnJsonResponse(res, objRes);
    },

    async getAccountById (req, res) {
        const { id } = req.params;
        const objRes = await account.findOne({ where: { id } });
        returnJsonResponse(res, objRes);
    },

    async postAccount (req, res) {
        let objData, objRes;

        objData = req.body;
        objData["is_deleted"] = false;
        objRes = await account.create(objData);

        returnJsonResponse(res, objRes);
    },

    async putAccountById (req, res) {
        const { id } = req.params;

        await account.update(req.body, { where: { id } });
        const objRes = await account.findOne({ where: { id } });

        returnJsonResponse(res, objRes);
    },

    async deleteAccountById (req, res) {
        const { id } = req.params;

        await account.update({ is_deleted: true }, { where: { id } });
        const objRes = await account.findOne({ where: { id } });

        returnJsonResponse(res, objRes);
    }
}
