# TodoList API - Structure du projet

```
todolist/
│
├── src/
│   ├── main.ts                    # Point d'entrée de l'application
│   ├── app.module.ts              # Module racine
│   │
│   ├── todo/                      # Module Todo (fonctionnalité principale)
│   │   ├── dto/                   # Data Transfer Objects
│   │   │   ├── create-todo.dto.ts
│   │   │   └── update-todo.dto.ts
│   │   ├── entities/              # Entités TypeORM
│   │   │   └── todo.entity.ts
│   │   ├── todo.controller.ts     # Contrôleur REST
│   │   ├── todo.service.ts        # Logique métier
│   │   ├── todo.module.ts         # Module NestJS
│   │   ├── todo.controller.spec.ts # Tests controller
│   │   └── todo.service.spec.ts    # Tests service
│   │
│   └── common/                    # (À venir) Composants partagés
│       ├── filters/               # Exception filters
│       ├── guards/                # Guards d'authentification
│       ├── interceptors/          # Intercepteurs
│       └── pipes/                 # Pipes de validation
│
├── test/                          # Tests E2E
│   └── app.e2e-spec.ts
│
├── dist/                          # Code compilé (généré)
│
├── node_modules/                  # Dépendances (généré)
│
├── .env                           # Variables d'environnement (NON commité)
├── .env.example                   # Template des variables
├── .gitignore                     # Fichiers à ignorer par Git
├── Dockerfile                     # Image Docker de production
├── docker-compose.yml             # Orchestration Docker
├── nest-cli.json                  # Configuration NestJS CLI
├── package.json                   # Dépendances Node.js
├── package-lock.json              # Lock des dépendances
├── tsconfig.json                  # Configuration TypeScript
├── tsconfig.build.json            # Config TypeScript pour build
└── README.md                      # Documentation
```

## Comptage des lignes de code métier

**Code métier actuel : 75 lignes** (< 150 ✅)

Répartition :
- `todo.controller.ts` : ~32 lignes
- `todo.service.ts` : ~43 lignes

**Exclus du comptage :**
- DTOs (validation uniquement)
- Entity (mapping BDD)
- Tests
- Imports et commentaires

## Bonnes pratiques respectées

✅ **Séparation des responsabilités**
- DTOs : Validation des données
- Entity : Mapping base de données
- Service : Logique métier
- Controller : Routes HTTP

✅ **Structure modulaire**
- Chaque fonctionnalité dans son propre module
- Facilite l'ajout de nouvelles fonctionnalités

✅ **Tests unitaires**
- Fichiers `.spec.ts` à côté du code source
- > 80% de couverture

✅ **Sécurité**
- Pas de credentials en dur dans le code
- Utilisation de variables d'environnement uniquement

## Évolution prévue

**Issue #3 (CI/CD + SAST) :**
- `.github/workflows/` : Pipelines GitHub Actions

**Issue #4 (DAST) :**
- Scripts de scan OWASP ZAP

**Issue #5 (Kubernetes) :**
- `k8s/` : Manifests Kubernetes
- `monitoring/` : Prometheus + Grafana
