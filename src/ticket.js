class Ticket {
  constructor({ titre, description, categorie }) {
    // Validation
    if (!titre || titre.trim().length < 5) {
      throw new Error('Le titre doit contenir au moins 5 caractères');
    }
    
    if (!description || description.trim().length < 20) {
      throw new Error('La description doit contenir au moins 20 caractères');
    }
    
    const categories = ['Matériel', 'Logiciel', 'Réseau', 'Accès', 'Autre'];
    if (!categories.includes(categorie)) {
      throw new Error('Catégorie invalide');
    }
    
    // Données
    this.id = `HELP-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
    this.titre = titre.trim();
    this.description = description.trim();
    this.categorie = categorie;
    this.statut = 'NOUVEAU';
    this.createdAt = new Date();
  }
}

module.exports = Ticket;
