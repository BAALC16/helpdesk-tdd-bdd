/**
 * TESTS TDD - Cycle Red → Green → Refactor
 * Commit 1: RED - Tests qui échouent
 * Commit 2: GREEN - Implémentation minimale
 * Commit 3: REFACTOR - Code propre
 */

const Ticket = require('../src/ticket');
const TicketValidator = require('../src/ticketValidator');

describe('TDD - Ticket Creation', () => {
  
  // ============================================
  // COMMIT 1: RED - Test qui échoue
  // ============================================
  describe('RED Phase - Test échoue initialement', () => {
    test('devrait créer un ticket avec un ID unique', () => {
      // Arrange
      const ticketData = {
        titre: 'Bug connexion',
        description: 'Impossible de se connecter',
        categorie: 'Logiciel'
      };
      
      // Act
      const ticket = new Ticket(ticketData);
      
      // Assert
      expect(ticket.id).toBeDefined();
      expect(ticket.id).toMatch(/^HELP-\d{4}$/);
    });
  });

  // ============================================
  // COMMIT 2: GREEN - Implémentation minimale
  // ============================================
  describe('GREEN Phase - Tests passent', () => {
    let ticket;

    beforeEach(() => {
      ticket = new Ticket({
        titre: 'Problème réseau',
        description: 'Pas de connexion internet dans le bureau 301',
        categorie: 'Réseau'
      });
    });

    test('devrait avoir un statut NOUVEAU par défaut', () => {
      expect(ticket.statut).toBe('NOUVEAU');
    });

    test('devrait avoir une date de création', () => {
      expect(ticket.createdAt).toBeInstanceOf(Date);
    });

    test('devrait stocker les données du ticket', () => {
      expect(ticket.titre).toBe('Problème réseau');
      expect(ticket.description).toContain('bureau 301');
      expect(ticket.categorie).toBe('Réseau');
    });
  });

  // ============================================
  // COMMIT 3: REFACTOR - Validation robuste
  // ============================================
  describe('REFACTOR Phase - Validation métier', () => {
    test('devrait rejeter un titre trop court', () => {
      expect(() => {
        new Ticket({
          titre: 'Bug',
          description: 'Description valide avec au moins 20 caractères',
          categorie: 'Logiciel'
        });
      }).toThrow('Le titre doit contenir au moins 5 caractères');
    });

    test('devrait rejeter une description trop courte', () => {
      expect(() => {
        new Ticket({
          titre: 'Titre valide',
          description: 'Court',
          categorie: 'Logiciel'
        });
      }).toThrow('La description doit contenir au moins 20 caractères');
    });

    test('devrait rejeter une catégorie invalide', () => {
      expect(() => {
        new Ticket({
          titre: 'Titre valide',
          description: 'Description valide avec au moins 20 caractères',
          categorie: 'CatégorieInvalide'
        });
      }).toThrow('Catégorie invalide');
    });

    test('devrait accepter toutes les catégories valides', () => {
      const categories = ['Matériel', 'Logiciel', 'Réseau', 'Accès', 'Autre'];
      
      categories.forEach(cat => {
        const ticket = new Ticket({
          titre: 'Titre test',
          description: 'Description de test avec plus de 20 caractères',
          categorie: cat
        });
        expect(ticket.categorie).toBe(cat);
      });
    });
  });

  // Tests de couverture supplémentaires
  describe('Edge cases et couverture complète', () => {
    test('devrait gérer les espaces dans les champs', () => {
      const ticket = new Ticket({
        titre: '  Titre avec espaces  ',
        description: '  Description avec espaces et plus de 20 caractères  ',
        categorie: 'Matériel'
      });
      
      expect(ticket.titre).toBe('Titre avec espaces');
      expect(ticket.description).toBe('Description avec espaces et plus de 20 caractères');
    });

    test('devrait incrémenter les numéros de ticket', () => {
      const ticket1 = new Ticket({
        titre: 'Premier ticket',
        description: 'Description du premier ticket avec assez de caractères',
        categorie: 'Logiciel'
      });
      
      const ticket2 = new Ticket({
        titre: 'Deuxième ticket',
        description: 'Description du deuxième ticket avec assez de caractères',
        categorie: 'Réseau'
      });
      
      const num1 = parseInt(ticket1.id.split('-')[1]);
      const num2 = parseInt(ticket2.id.split('-')[1]);
      
      expect(num2).toBeGreaterThan(num1);
    });
  });
});
