const { defineFeature, loadFeature } = require('jest-cucumber');
const Ticket = require('../../../src/ticket');

const feature = loadFeature('./tests/features/ticket-creation.feature');

defineFeature(feature, test => {
  let ticketData = {};
  let createdTicket = null;
  let error = null;

  test('Création réussie d\'un ticket avec informations valides', ({ given, when, then, and }) => {
    given('que je suis connecté en tant qu\'employé', () => {
      // Simuler authentification
      expect(true).toBe(true);
    });

    and('que je suis sur la page de création de ticket', () => {
      ticketData = {};
    });

    given('que je remplis le formulaire avec les informations suivantes:', (table) => {
      table.forEach(row => {
        ticketData[row.champ] = row.valeur;
      });
    });

    when('je soumets le formulaire de création', () => {
      try {
        createdTicket = new Ticket(ticketData);
      } catch (err) {
        error = err;
      }
    });

    then('un nouveau ticket devrait être créé', () => {
      expect(createdTicket).toBeDefined();
      expect(createdTicket.id).toBeDefined();
    });

    and('le ticket devrait avoir le statut "NOUVEAU"', () => {
      expect(createdTicket.statut).toBe('NOUVEAU');
    });

    and('je devrais recevoir une notification par email', () => {
      // Mock notification
      expect(createdTicket.emailSent).toBe(true);
    });

    and('le numéro du ticket devrait être affiché', () => {
      expect(createdTicket.id).toMatch(/^HELP-\d{4}$/);
    });
  });

  test('Échec de création avec titre trop court', ({ given, when, then, and }) => {
    given('que je remplis le formulaire avec les informations suivantes:', (table) => {
      ticketData = {};
      table.forEach(row => {
        ticketData[row.champ] = row.valeur;
      });
    });

    when('je soumets le formulaire de création', () => {
      try {
        createdTicket = new Ticket(ticketData);
      } catch (err) {
        error = err;
      }
    });

    then('une erreur devrait être affichée', () => {
      expect(error).toBeDefined();
    });

    and(/le message devrait contenir "(.*)"/, (message) => {
      expect(error.message).toContain(message);
    });
  });

  test('Échec de création avec description trop courte', ({ given, when, then, and }) => {
    given('que je remplis le formulaire avec les informations suivantes:', (table) => {
      ticketData = {};
      table.forEach(row => {
        ticketData[row.champ] = row.valeur;
      });
    });

    when('je soumets le formulaire de création', () => {
      try {
        createdTicket = new Ticket(ticketData);
      } catch (err) {
        error = err;
      }
    });

    then('une erreur devrait être affichée', () => {
      expect(error).toBeDefined();
    });

    and(/le message devrait contenir "(.*)"/, (message) => {
      expect(error.message).toContain(message);
    });
  });

  test('Sélection de catégorie auto-assigne l\'équipe', ({ given, when, then, and }) => {
    given('que je remplis le formulaire avec les informations suivantes:', (table) => {
      ticketData = {};
      table.forEach(row => {
        ticketData[row.champ] = row.valeur;
      });
    });

    when('je soumets le formulaire de création', () => {
      try {
        createdTicket = new Ticket(ticketData);
      } catch (err) {
        error = err;
      }
    });

    then(/le ticket devrait être assigné à l'équipe "(.*)"/, (equipe) => {
      expect(createdTicket.equipeAssignee).toBe(equipe);
    });

    and('une notification devrait être envoyée à l\'équipe', () => {
      expect(createdTicket.notificationEquipe).toBe(true);
    });
  });
});
