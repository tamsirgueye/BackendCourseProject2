const db = require("./../models");

const Auteur = db.auteurs;
//const Livre = db.livres;
module.exports = {
    createAuteur(req, res) {
        Auteur.create(req.body)
        .then(auteur => {
            res.status(201).json(auteur);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateAuteur(req, res) {
        const idAuteur = req.params.id;
        const AuteurUpdated =  await Livre.update(req.body, {where: {id: idAuteur}});
        res.status(201).json(AuteurUpdated);
    },
    getAllAuteur(req, res) {
        //res.status(200).json(await Livre.findAll());
        Auteur.findAll()
        .then(function(auteurs){res.status(200).json(auteurs)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getAuteurByID(req, res){
        //const idLivre = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await Auteur.findByPK(req.params.id));
    },
    deleteAuteur(req, res) {
        const idAuteur = req.params.id;
        Auteur.destroy({where: {id: idAuteur}})
        .then(() => {res.status(200).json({status: 'success', message: 'Auteur bien supprimé'})
        .catch(err =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})})});
    },
}


