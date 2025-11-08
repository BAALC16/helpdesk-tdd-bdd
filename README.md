# HelpDesk+ TDD/BDD Project

[![CI Pipeline](https://github.com/VOTRE_USERNAME/helpdesk-tdd-bdd/actions/workflows/ci.yml/badge.svg)](https://github.com/VOTRE_USERNAME/helpdesk-tdd-bdd/actions)
[![Coverage](https://codecov.io/gh/VOTRE_USERNAME/helpdesk-tdd-bdd/branch/main/graph/badge.svg)](https://codecov.io/gh/VOTRE_USERNAME/helpdesk-tdd-bdd)

## 🎯 Objectif

Démonstration des pratiques TDD/BDD avec CI/CD pour le projet HelpDesk+ MVP.

## 🚀 Installation

\`\`\`bash
npm install
\`\`\`

## 🧪 Tests

\`\`\`bash
# Tests unitaires TDD
npm test

# Tests avec couverture
npm test -- --coverage

# Tests BDD
npm run test:bdd

# Mode watch
npm run test:watch
\`\`\`

## 🔍 Linting

\`\`\`bash
npm run lint
npm run lint:fix
\`\`\`

## 📊 Couverture

Objectif: 80% minimum sur branches, fonctions, lignes et statements.

## 🏗️ Cycle TDD

1. **RED**: Écrire un test qui échoue
2. **GREEN**: Implémentation minimale
3. **REFACTOR**: Code propre et optimisé

## 🥒 BDD Gherkin

Scénarios d'acceptation en langage naturel (français).

## 🔄 CI/CD

Pipeline GitHub Actions automatique sur push/PR.
\`\`\`

---

## 🚀 Étapes de déploiement sur GitHub

### 1. Créer le repository

\`\`\`bash
# Sur GitHub.com
1. Cliquer "New repository"
2. Nom: helpdesk-tdd-bdd
3. Cocher "Add README"
4. Créer le repo
\`\`\`

### 2. Cloner et setup local

\`\`\`bash
git clone https://github.com/VOTRE_USERNAME/helpdesk-tdd-bdd.git
cd helpdesk-tdd-bdd

# Copier tous les fichiers ci-dessus dans le dossier

npm install
\`\`\`

### 3. Commits TDD (Red/Green/Refactor)

\`\`\`bash
# COMMIT 1: RED - Tests qui échouent
git add tests/ticket.test.js
git commit -m "🔴 RED: Add failing tests for ticket creation"
git push

# COMMIT 2: GREEN - Implémentation minimale
git add src/ticket.js src/ticketValidator.js
git commit -m "🟢 GREEN: Implement minimal ticket creation logic"
git push

# COMMIT 3: REFACTOR - Code propre
git add src/ tests/
git commit -m "♻️ REFACTOR: Improve validation and error handling"
git push
\`\`\`

### 4. Vérifier CI/CD

1. Aller sur GitHub → Actions
2. Voir le workflow "CI Pipeline" en cours
3. Attendre le ✅ vert
4. Capturer `09_CI.png`

---

## ✅ Checklist finale

- [ ] Repository GitHub créé
- [ ] Tous les fichiers ajoutés
- [ ] 3 commits TDD (Red/Green/Refactor)
- [ ] Scénarios BDD Gherkin écrits
- [ ] Pipeline CI/CD configure
- [ ] Badge CI: passing visible
- [ ] Tests passent (couverture ≥ 80%)
- [ ] Capture `09_CI.png` prise
