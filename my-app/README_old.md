# Fullstack Flag Game

Refactored my flag game app from course part 11 to work in containers in both development and production.

The docker-compose uses a reverse proxy nginx for both frontend and backend. Use port 8080.

## Development
```bash
# From the my-app folder
cd frontend
docker build -f dev.Dockerfile -t part12-my-app-frontend:dev .

cd ../backend
docker build -f dev.Dockerfile -t part12-my-app-backend:dev .

cd ..
docker-compose -f docker-compose.dev.yaml up  
```