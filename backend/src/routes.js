const { Router } = require('express');

const incidentValidator = require('./validators/incidentValidator');
const ongValidator = require('./validators/ongValidator');
const profileValidator = require('./validators/profileValidator');
const sessionValidator = require('./validators/sessionValidator');

const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

const routes = Router();

routes.post('/sessions', sessionValidator.store(), SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', ongValidator.store(), OngController.store);

routes.get('/profile', profileValidator.index(), ProfileController.index);

routes.get('/incidents', incidentValidator.index(), IncidentController.index);
routes.post('/incidents', incidentValidator.store(), IncidentController.store);
routes.delete(
  '/incidents/:id',
  incidentValidator.destroy(),
  IncidentController.destroy
);

module.exports = routes;
