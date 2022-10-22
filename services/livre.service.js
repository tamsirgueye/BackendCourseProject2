const db = require("./../models");

const Auteur = db.auteurs;
const Livre = db.livres;
module.exports = {
    createLivre(req, res) {
        Livre.create(req.body)
            .then(livre => {
                res.status(201).json(livre);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },
    async updateLivre(req, res) {
        const idLivre = req.params.id;
        const LivreUpdated = await Livre.update(req.body, { where: { id: idLivre } });
        res.status(201).json(LivreUpdated);
    },
    async getAllLivre(req, res) {
        res.status(200).json(await Livre.findAll());
        // Livre.findAll()
        // .then(function(livres){res.status(200).json(livres)})
        // .catch(function(error){res.status(500).json(error)});
    },
    async getLivreByID(req, res) {
        //const idLivre = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await Livre.findByPK(req.params.id));
    },
    async getAllLivreByAuteur(req, res) {
        const query = {
            where: { id: req.params.id },
            include: [
                { model: db.livres, as: 'livres' }
            ]
        };
        //const auteur = await Auteur.findOne(query);
        //res.status(200).json(auteur.livres);
        Auteur.findOne(query)
            .then(auteur => {
                console.log(auteur)
                res.status(200).json(auteur.livres);
            })
            .catch(err => { res.status(404).json(err) });
    },
    deleteLivre(req, res) {
        const idLivre = req.params.id;
        Livre.destroy({ where: { id: idLivre } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Livre bien supprimé' })
                    .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) })
            });
    },
    async updateOneParam(req, res) {
        res.status(201).json(await Livre.update({ where: { id: req.params.id } }, req.body))
    },
}


