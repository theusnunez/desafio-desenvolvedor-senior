FROM node:18

WORKDIR /usr/src/app

# Install deps first (cache)
COPY package*.json ./
RUN npm install --no-progress --no-audit --prefer-offline

# Copy rest of the application
COPY . .

# Make scripts executable
RUN chmod +x ./scripts/wait-for-postgres.sh
RUN chmod +x ./scripts/docker-entrypoint.sh

# Build-time envs (useful for some setups)
ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 3333

# Entrypoint will run migrations/seeds and then exec CMD
ENTRYPOINT ["/usr/src/app/scripts/docker-entrypoint.sh"]
CMD ["npm", "run", "start:prod"]
