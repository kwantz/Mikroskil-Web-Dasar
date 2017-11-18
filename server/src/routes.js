const HelloController = require('./controllers/HelloController');
const RecordController = require('./controllers/RecordController');
const AccountController = require('./controllers/AccountController');

module.exports = (app) => {
    app.get('/', HelloController.getHelloWorld);
    app.get('/record', RecordController.getRecord)
    app.get('/account', AccountController.getAccount);
    app.get('/account/:id', AccountController.getAccountById);
    app.get('/account/:id_account/record', RecordController.getRecordByAccount);
    app.get('/account/:id_account/record/:id', RecordController.getRecordByIdAndAccount);

    app.post('/account', AccountController.postAccount);
    app.post('/account/:id_account/record', RecordController.postRecordByAccount);

    app.put('/account/:id', AccountController.putAccountById);
    app.put('/account/:id_account/record/:id', RecordController.putRecordByIdAndAccount);

    app.delete('/account/:id', AccountController.deleteAccountById);
    app.delete('/account/:id_account/record/:id', RecordController.deleteRecordByIdAndAccount);
}
