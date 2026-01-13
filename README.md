# 🚀 Task Manager API - DevOps Project

[![CI/CD](https://github.com/Fridhi-Rochdi/todolist/actions/workflows/ci.yml/badge.svg)](https://github.com/Fridhi-Rochdi/todolist/actions)

## 📖 Description

Task Manager REST API built with **NestJS** and **PostgreSQL** for an academic DevOps project.

**Business Code Constraint**: < 150 lines

---

## 🛠️ Tech Stack

- **Backend**: NestJS (TypeScript)
- **Database**: PostgreSQL
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Security**: SAST (SonarCloud / Snyk), DAST (OWASP ZAP)
- **Observability**: Prometheus + Grafana
- **Orchestration**: Kubernetes

---

## 🏗️ Architecture

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Client    │─────▶│  NestJS API │─────▶│ PostgreSQL  │
│  (Postman)  │      │   (Port 3000)│      │  (Port 5432)│
└─────────────┘      └─────────────┘      └─────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- Docker & Docker Compose
- PostgreSQL

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fridhi-Rochdi/todolist.git
   cd todolist
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your PostgreSQL credentials
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start PostgreSQL (Docker)**
   ```bash
   docker-compose up -d postgres
   ```

5. **Run the application**
   ```bash
   npm run start:dev
   ```

6. **Access the API**
   - API: http://localhost:3000
   - Health Check: http://localhost:3000/health

---

## 📡 API Endpoints

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| GET    | `/tasks`          | Get all tasks       |
| GET    | `/tasks/:id`      | Get task by ID      |
| POST   | `/tasks`          | Create a new task   |
| PATCH  | `/tasks/:id`      | Update task         |
| DELETE | `/tasks/:id`      | Delete task         |

---

## 🐳 Docker

```bash
# Build and run
docker-compose up --build

# Stop
docker-compose down
```

---

## 🔐 Security

- **SAST**: Static code analysis with SonarCloud
- **DAST**: Dynamic security testing with OWASP ZAP
- **Secrets Management**: GitHub Secrets + Kubernetes Secrets

---

## 📊 Observability

- **Metrics**: Prometheus
- **Visualization**: Grafana
- **Logging**: Structured logs with Winston

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

---

## 🤝 Contributing

This is an academic project. Issues and Pull Requests follow a strict workflow:

1. Create GitHub Issue
2. AI creates branch and implements code
3. AI opens Pull Request
4. Peer review
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
