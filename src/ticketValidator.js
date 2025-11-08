class TicketValidator {
  static validate({ titre, description, categorie }) {
    const categories = ['Matériel', 'Logiciel', 'Réseau', 'Accès', 'Autre'];
    
    // Validation titre
    if (!titre || titre.trim().length < 5) {
      throw new Error('Le titre doit contenir au moins 5 caractères');
    }
    
    // Validation description
    if (!description || description.trim().length < 20) {
      throw new Error('La description doit contenir au moins 20 caractères');
    }
    
    // Validation catégorie
    if (!categories.includes(categorie)) {
      throw new Error(`Catégorie invalide. Catégories acceptées: ${categories.join(', ')}`);
    }
    
    return true;
  }
}

module.exports = TicketValidator;
