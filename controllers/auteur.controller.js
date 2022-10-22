const express = require('express');

const routes = express.Router();

const AuteurService = require('./../services/auteur.service');

routes.get('/', AuteurService.getAllAuteur);

routes.get('/:id', AuteurService.getAuteurByID);
routes.post('/', AuteurService.createAuteur);
routes.delete('/:id', AuteurService.deleteAuteur);
routes.put('/:id', AuteurService.updateAuteur);

module.exports=routes;