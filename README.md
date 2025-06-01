# Food Delivery Backend

## Microservices
- User Service
- Restaurant Service
- Delivery Agent Service

## Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/your-username/food-delivery-backend.git
cd food-delivery-backend/Backend
```

### 2. Install dependencies for each service
```
cd user-service
npm install
cd ../restaurant-service
npm install
cd ../delivery-agent-service
npm install
```

### 3. Set up environment variables
Create a `.env` file in each service folder with the following content:
```
PORT=xxxx
MONGO_URI=your_mongo_atlas_uri
```
Replace `xxxx` with the port (e.g., 8001, 8002, 8003) and `your_mongo_atlas_uri` with your MongoDB Atlas connection string.

### 4. Start each service locally
```
cd user-service
npm start
cd ../restaurant-service
npm start
cd ../delivery-agent-service
npm start
```

## Deployment (Heroku Example)
1. Create a Heroku app for each service:
   - heroku create user-service-yourname
   - heroku create restaurant-service-yourname
   - heroku create delivery-agent-service-yourname
2. Set environment variables on Heroku for each app:
   - heroku config:set MONGO_URI=your_mongo_atlas_uri --app user-service-yourname
   - heroku config:set PORT=8001 --app user-service-yourname
   - (repeat for other services)
3. Push each service to Heroku:
   - git push https://git.heroku.com/user-service-yourname.git main
   - (repeat for other services)

## Postman Collection
- Import the provided `Food-Delivery-API.postman_collection.json` into Postman to test all endpoints.

## Deployed Endpoints (Example)
- User Service: https://user-service-yourname.herokuapp.com
- Restaurant Service: https://restaurant-service-yourname.herokuapp.com
- Delivery Agent Service: https://delivery-agent-service-yourname.herokuapp.com

---

**For any issues, check your Heroku logs with:**
```
heroku logs --tail --app your-app-name
```