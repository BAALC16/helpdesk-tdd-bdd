# language: fr
Fonctionnalité: Création de ticket HelpDesk
  En tant qu'employé
  Je veux créer un ticket de support
  Afin de signaler un problème technique

  Scénario: Création réussie avec données valides
    Étant donné que je suis sur la page de création
    Quand je remplis le titre "Mon ordinateur ne démarre plus"
    Et je remplis la description "Depuis ce matin, l'écran reste noir"
    Et je sélectionne la catégorie "Matériel"
    Et je soumets le formulaire
    Alors un ticket est créé avec le statut "NOUVEAU"
    Et un numéro de ticket est généré

  Scénario: Échec avec titre trop court
    Étant donné que je suis sur la page de création
    Quand je remplis le titre "Bug"
    Et je soumets le formulaire
    Alors une erreur est affichée
    Et le message contient "au moins 5 caractères"
