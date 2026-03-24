# GitHub-Clone — краткая инструкция

Проект: `backend` (.NET 8) и `frontend` (React). Этот README — минимальные команды для разработки и для контейнерного запуска.

## Требования
- Docker / Docker Compose
- Node 18+
- .NET 8 SDK

## Локальная разработка
- Backend:

```bash
cd backend/CloneGitHub
dotnet run
```

- Frontend:

```bash
cd frontend
npm install
npm start
```

Фронтенд обычно доступен на `http://localhost:3000`, бэкенд — на `https://localhost:7093`.

## Запуск через Docker Compose
В корне есть `docker-compose.yml`, он собирает `frontend` и `backend` и поднимает MS SQL.

```bash
docker compose up --build
```

Остановить:

```bash
docker compose down
```

## Конфигурация и секреты
- Замените `SA_PASSWORD` в `docker-compose.yml` на безопасный пароль.
- Переменные для бэкенда: `ConnectionStrings__DefaultConnection`, `AllowedOrigins`, `ASPNETCORE_ENVIRONMENT`.
- Для локальной отладки CORS можно настроить в `backend/CloneGitHub/appsettings.json`.

## Порты
- Frontend: `3000` -> контейнер `80`
- Backend: `7093` -> контейнер `80`

## Как проверить авторизацию
- После успешного логина/регистрации API возвращает `{ success: true, username: "..." }` — фронтенд переходит на `/<username>`.
- Есть endpoint `GET /api/User/current`, который возвращает username из cookie при необходимости.

Если хотите, могу добавить `.env.example` и подправить `docker-compose.yml` для чтения переменных окружения из `.env`.
