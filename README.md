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
# For user-service only:
RESTAURANT_SERVICE_URL=https://restaurant-service-<your-render>.onrender.com
# For restaurant-service only:
DELIVERY_AGENT_SERVICE_URL=https://delivery-agent-service-<your-render>.onrender.com
```
Replace `xxxx` with the port (e.g., 8001, 8002, 8003) and `your_mongo_atlas_uri` with your MongoDB Atlas connection string. Replace the URLs with your actual Render service URLs after deployment.

### 4. Start each service locally
```
cd user-service
npm start
cd ../restaurant-service
npm start
cd ../delivery-agent-service
npm start
```

## Deployment (Render Example)
1. Push your code to GitHub and make sure it is up to date.
2. Go to https://dashboard.render.com/ and click **New +** → **Web Service** for each microservice.
3. Connect your GitHub repo and select the correct root directory (e.g., `Backend/user-service`).
4. Set environment variables in the Render dashboard for each service:
   - `MONGO_URI` (your MongoDB Atlas URI)
   - `PORT` (Render sets this automatically, but you can set it for clarity)
   - `RESTAURANT_SERVICE_URL` or `DELIVERY_AGENT_SERVICE_URL` as needed (see above)
5. Deploy each service. After deployment, update the inter-service URLs in the Render dashboard if needed.

## Postman Collection
- Import the provided `Food-Delivery-API.postman_collection.json` into Postman to test all endpoints.

## Deployed Endpoints (Example)
- User Service: https://user-service-foodapp.onrender.com
- Restaurant Service: https://restaurant-service-foodapp.onrender.com
- Delivery Agent Service: https://delivery-agent-service-foodapp.onrender.com

---

**For any issues, check your Render service logs in the Render dashboard.**