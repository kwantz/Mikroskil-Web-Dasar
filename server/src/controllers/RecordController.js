const { record } = require('../models');
const { returnJsonResponse } = require('./GlobalController');

module.exports = {
    async getRecord (req, res) {
        const objRes = await record.findAll();
        returnJsonResponse(res, objRes);
    },

    async getRecordByAccount (req, res) {
        const { id_account } = req.params;
        const objRes = await record.findAll({ where: { id_account } });

        returnJsonResponse(res, objRes);
    },

    async getRecordByIdAndAccount (req, res) {
        const { id, id_account } = req.params;
        const objRes = await record.findOne({ where: { id, id_account } });

        returnJsonResponse(res, objRes);
    },

    async postRecordByAccount (req, res) {
        let objData;
        objData = req.body;
        objData["is_deleted"] = false;
        objData["id_account"] = req.params.id_account;

        const objRes = await record.create(objData);
        returnJsonResponse(res, objRes);
    },

    async putRecordByIdAndAccount (req, res) {
        const { id, id_account } = req.params;

        await record.update(req.body, { where: { id, id_account } })
        const objRes = await record.findOne({ where: { id, id_account } });

        returnJsonResponse(res, objRes);
    },

    async deleteRecordByIdAndAccount (req, res) {
        const { id, id_account } = req.params;

        await record.update({ is_deleted: true }, { where: { id, id_account } })
        const objRes = await record.findOne({ where: { id, id_account } });

        returnJsonResponse(res, objRes);
    }
}
