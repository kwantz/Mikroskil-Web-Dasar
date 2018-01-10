const { account, record } = require('../models');
const { returnJsonResponse, getArrayChart, getArrayDougnat } = require('./GlobalController');

module.exports = {
    async getRecord (req, res) {
        let query = { order: [['date', 'DESC']] };

        if (req.query.page)
            query['limit'] = Number(req.query.page);

        const objRes = await record.findAll();
        returnJsonResponse(res, objRes);
    },

    async getRecordByAccount (req, res) {
        const { id_account } = req.params;

        let query = {
            where: { id_account },
            order: [['date', 'DESC']]
        };

        if (req.query.page)
            query['limit'] = Number(req.query.page);

        const objRes = await record.findAll(query);
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
        objData['is_deleted'] = false;
        objData['id_account'] = req.params.id_account;

        const query = { where: { id: req.params.id_account } };
        const accountData = await account.findOne(query);

        accountData.balance = (objData['type'] === '+')
            ? accountData.balance += Number(objData['amount'])
            : accountData.balance -= Number(objData['amount']);
        await account.update(accountData.dataValues, query);

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
    },

    async getChartByDay (req, res) {
        const { id_account } = req.params;
        const day = req.query.day;

        const dataRecord = await record.findAll({ where: { id_account }, order: [['date', 'ASC']] });
        const arrayRecord = getArrayChart(dataRecord);

        returnJsonResponse(res, arrayRecord);
    },


    async getChartByCategory (req, res) {
        const { id_account } = req.params;
        const day = req.query.day;

        const dataRecord = await record.findAll({ where: { id_account }, order: [['date', 'ASC']] });
        const arrayRecord = getArrayDougnat(dataRecord);

        returnJsonResponse(res, arrayRecord);
    }
}
