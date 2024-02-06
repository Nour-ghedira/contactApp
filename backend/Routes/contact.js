const express=require('express');
const router =express.Router();
const contactController=require('../Controllers/contactController')
router.post('/ajouter',contactController.ajouterContact)
router.post('/:idcontact/modifier',contactController.modifierContact)
router.get('/:idcontact/supprimer',contactController.supprimerContact)
router.get('/lister',contactController.listerContact)
module.exports=router;




