# Fullstack Flag Game

Refactored [my flag game app from course part 11](https://github.com/VilleJuhan1/Fullstack-websovelluskehitys-osa11-oma-sovellus) to work in containers in both development and production. Due to time constraints this version might not work without containerization so refer to the original repository for other uses.

The docker-compose uses a reverse proxy nginx for both frontend and backend. Use port 8080 or adjust docker compose file accordingly.

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

## Production
```bash
# From the my-app folder
cd frontend
docker build -f Dockerfile -t part12-my-app-frontend .

cd ../backend
docker build -f Dockerfile -t part12-my-app-backend .

cd ..
docker-compose -f docker-compose.dev.yaml up  
```