# � TodoList API - Projet DevOps Académique

## 🎯 Vue d'ensemble

API REST minimaliste développée avec **NestJS + PostgreSQL** dans le cadre d'un projet académique DevOps individuel.

**Contrainte clé :** L'API REST reste **SOUS 150 lignes de code métier**.

---

## 🏗️ Architecture

- **Backend :** NestJS (TypeScript)
- **Base de données :** PostgreSQL
- **Conteneurisation :** Docker + Docker Hub
- **Orchestration :** Kubernetes
- **CI/CD :** GitHub Actions
- **Sécurité :** SAST + DAST (OWASP ZAP)
- **Observabilité :** Logs + Métriques

---

## 📦 API Endpoints

```
GET    /todos       - Liste toutes les tâches
GET    /todos/:id   - Récupère une tâche
POST   /todos       - Crée une tâche
PUT    /todos/:id   - Met à jour une tâche
DELETE /todos/:id   - Supprime une tâche
```

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL

### Installation locale

```bash
# Cloner le repo
git clone https://github.com/Fridhi-Rochdi/todolist.git
cd todolist

# Installer les dépendances
npm install

# Configurer .env (voir .env.example)
cp .env.example .env

# Démarrer PostgreSQL avec Docker
docker-compose up -d postgres

# Lancer l'API
npm run start:dev
```

**Accès:**
- API: http://localhost:3000
- Health Check: http://localhost:3000/health

---

## 🐳 Docker

```bash
# Build l'image
docker build -t fridhi-rochdi/todolist-api:latest .

# Lancer avec Docker Compose (API + PostgreSQL)
docker-compose up

# Vérifier les logs
docker-compose logs -f api

# Arrêter
docker-compose down
```

---

## 🧪 Tests

```bash
npm run test
npm run test:e2e
npm run test:cov
```

---

## 🔐 Sécurité

- **SAST :** Analyse statique du code (SonarCloud / CodeQL)
- **DAST :** Scan dynamique avec OWASP ZAP sur API running
- **Secrets :** Gestion via GitHub Secrets + Kubernetes Secrets

---

## 📊 Observabilité

- Logs structurés (Winston)
- Métriques Prometheus
- Health checks (`/health`)

---

## ☸️ Kubernetes

Déploiement automatisé via manifests dans `/k8s`.

```bash
kubectl apply -f k8s/
```

---

## 🤝 Workflow DevOps

1. **Student (moi) :** Crée les GitHub Issues
2. **Copilot (AI) :** Implémente le code, crée branches + Pull Requests
3. **Review :** Peer review sur au moins 1 PR
4. **Merge :** Validation + déploiement automatique

---

## 📋 Décomposition en 5 Issues

| # | Issue | Status |
|---|-------|--------|
| 1 | Configuration initiale NestJS + PostgreSQL + Docker | ✅ |
| 2 | CRUD API + Tests unitaires | ⏳ |
| 3 | CI/CD + SAST | ⏳ |
| 4 | DAST + Security Scan | ⏳ |
| 5 | Kubernetes + Observabilité + Documentation finale | ⏳ |
5. Merge to main

---

## 📝 Project Milestones

- [ ] Issue #1: NestJS + PostgreSQL Setup
- [ ] Issue #2: Docker + GitHub Actions CI/CD
- [ ] Issue #3: SAST Integration
- [ ] Issue #4: DAST + Security Testing
- [ ] Issue #5: Kubernetes + Observability

---

## 📄 License

Academic Project - 2026

---

## 👤 Author

**Fridhi Rochdi**  
GitHub: [@Fridhi-Rochdi](https://github.com/Fridhi-Rochdi)
