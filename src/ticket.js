const TicketValidator = require('./ticketValidator');

let ticketCounter = 1;

class Ticket {
  constructor({ titre, description, categorie }) {
    // Validation
    TicketValidator.validate({ titre, description, categorie });
    
    // Génération ID unique
    this.id = `HELP-${String(ticketCounter++).padStart(4, '0')}`;
    
    // Nettoyage données
    this.titre = titre.trim();
    this.description = description.trim();
    this.categorie = categorie;
    
    // Métadonnées
    this.statut = 'NOUVEAU';
    this.createdAt = new Date();
    
    // Auto-assignation équipe
    this.equipeAssignee = this._getEquipeByCategorie(categorie);
    
    // Simulation notifications
    this.emailSent = true;
    this.notificationEquipe = true;
  }

  _getEquipeByCategorie(categorie) {
    const mapping = {
      'Matériel': 'Support Matériel',
      'Logiciel': 'Support Logiciel',
      'Réseau': 'Support Réseau',
      'Accès': 'Support IT',
      'Autre': 'Support Général'
    };
    return mapping[categorie];
  }

  toJSON() {
    return {
      id: this.id,
      titre: this.titre,
      description: this.description,
      categorie: this.categorie,
      statut: this.statut,
      equipeAssignee: this.equipeAssignee,
      createdAt: this.createdAt
    };
  }
}

module.exports = Ticket;
