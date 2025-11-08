# language: fr
Fonctionnalité: Création de ticket HelpDesk
  En tant qu'employé
  Je veux créer un ticket de support
  Afin de signaler un problème technique

  Contexte:
    Étant donné que je suis connecté en tant qu'employé
    Et que je suis sur la page de création de ticket

  Scénario: Création réussie d'un ticket avec informations valides
    Étant donné que je remplis le formulaire avec les informations suivantes:
      | champ       | valeur                                           |
      | titre       | Mon ordinateur ne démarre plus                   |
      | description | Depuis ce matin, l'écran reste noir au démarrage |
      | categorie   | Matériel                                         |
    Quand je soumets le formulaire de création
    Alors un nouveau ticket devrait être créé
    Et le ticket devrait avoir le statut "NOUVEAU"
    Et je devrais recevoir une notification par email
    Et le numéro du ticket devrait être affiché

  Scénario: Échec de création avec titre trop court
    Étant donné que je remplis le formulaire avec les informations suivantes:
      | champ       | valeur                                           |
      | titre       | Bug                                              |
      | description | Mon ordinateur ne fonctionne pas correctement    |
      | categorie   | Matériel                                         |
    Quand je soumets le formulaire de création
    Alors une erreur devrait être affichée
    Et le message devrait contenir "Le titre doit contenir au moins 5 caractères"

  Scénario: Échec de création avec description trop courte
    Étant donné que je remplis le formulaire avec les informations suivantes:
      | champ       | valeur      |
      | titre       | Bug réseau  |
      | description | Pas internet|
      | categorie   | Réseau      |
    Quand je soumets le formulaire de création
    Alors une erreur devrait être affichée
    Et le message devrait contenir "La description doit contenir au moins 20 caractères"

  Scénario: Sélection de catégorie auto-assigne l'équipe
    Étant donné que je remplis le formulaire avec les informations suivantes:
      | champ       | valeur                                           |
      | titre       | Problème de connexion VPN                        |
      | description | Je ne peux pas me connecter au VPN de l'entreprise|
      | categorie   | Réseau                                           |
    Quand je soumets le formulaire de création
    Alors le ticket devrait être assigné à l'équipe "Support Réseau"
    Et une notification devrait être envoyée à l'équipe
