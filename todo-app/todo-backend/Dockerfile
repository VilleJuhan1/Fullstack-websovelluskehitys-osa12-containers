FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

# Install dependencies using npm ci to ensure a clean install based on package-lock.json
RUN npm ci 
  
USER node

CMD npm start