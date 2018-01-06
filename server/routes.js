const express = require('express');
const app = module.exports = express.Router();
const path = require('path');
const jsonParser = require('body-parser').json();


const Wizard = require(`${__dirname}/models/wizard.js`);

app.use(express.static(__dirname + '/../bundle/'));

app.post('/wizard', jsonParser, (req, res, next) => {

   const newWizard = new Wizard(req.body);
   newWizard.save().then(message => res.send(message)).catch(err => res.send(err.message));
});

app.get('/wizard/:id', (req, res, next) => {
    Wizard.findOne({_id: req.params.id}).then(wizard => res.send(wizard)).catch(err => res.send(err.message));
}); 

app.get('/wizard', (req, res, next) => {
    Wizard.find(req.query || {}).then(wizards => res.send(wizards)).catch(err => res.send(err.message));
});

app.put('/wizards/:id',jsonParser,  (req, res, next) => {
    if (typeof req.body['_id'] !== 'undefined') delete req.body._id;
    Wizard.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(data => res.send(data))
      .catch(err => res.send(err.message));
});