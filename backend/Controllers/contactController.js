const ContactModel = require('../Models/Contact');
//fonction ajouter contact

exports.ajouterContact=async (req, res) => {
    console.log(req.body);
    const contactObj = {
      nom: req.body.nom,
      numero: req.body.numero,
    };
  
    const contact = new ContactModel(contactObj);
  
    try {
      const createdContact = await contact.save();
      res.status(200).json({ createdContact });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  //fonction modifier contact
  //meme fonction ajout juste on ajoute id pour modifier
  exports.modifierContact=async (req, res) => {
    try {
      const param = req.params.idcontact;
      const modifiedObj = {
        nom: req.body.nom,
        numero: req.body.numero,
      };
  
      const modifiedContact = await ContactModel.findByIdAndUpdate(param, modifiedObj).exec();
      res.status(200).json({ "message": "Contact modifié avec succès", "modifiedContact": modifiedContact });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ "error": "Erreur lors de la modification du contact" });
    }
  }
  //fonction supprimer contact
  exports.supprimerContact=async (req, res) => {
    try {
      // Traitement pour supprimer un contact
      const param = req.params.idcontact;
      const deletedContact = await ContactModel.findByIdAndDelete(param).exec();
  
      
  
       res.status(200).json({ "message": "Contact supprimé avec succès" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ "error": "Erreur lors de la suppression du contact" });
    }
  }
  //fonction lister contact
  exports.listerContact= async (req, res) => {
    try {
      const contactList = await ContactModel.find({}).exec();
  
      if (contactList) {
        return res.status(200).json({ contactList });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }