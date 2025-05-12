# Step 1: Build frontend
FROM node:18 AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build
# Step 2: Build backend
FROM node:18 AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
# Step 3: Final Stage for Frontend (Production)
FROM nginx:alpine AS frontend-production
# Copy the built frontend assets to Nginx's web root directory
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html
# Copy the index.html if it's not inside the 'dist' folder
COPY --from=frontend-builder /app/frontend/index.html /usr/share/nginx/html/
# Ensure the correct permissions on the Nginx directory
RUN chown -R nginx:nginx /usr/share/nginx/html
EXPOSE 80
# Step 4: Final Stage for Backend (Production)
FROM node:18 AS backend-production
WORKDIR /app/backend
COPY --from=backend-builder /app/backend /app/backend
COPY backend/.env /app/backend/.env
EXPOSE 5005
CMD ["node", "src/index.js"]
