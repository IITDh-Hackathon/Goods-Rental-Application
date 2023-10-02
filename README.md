# Setup Instructions

## Prerequisites
- node v18.12.1
- npm v8.19.2

## Clone
```
git clone https://github.com/IITDh-Hackathon/Goods-Rental-Application
```

## Server
- Example Env variables (create a .env file in the server directory)
```
MONGO_URI=mongodb+srv://karthikmurakonda14:j5pGQ9mOvKpLHF9X@cluster0.cyr9pcq.mongodb.net/
PORT=8000
JWT_SECRET=afoireejfoiewrjfoirejoifjwirfiewjfoijfoij8098ewf
```
- Install npm dependencies
```
cd server
npm install
```
- Start the server
```
npm run dev
```
This will start the server on http://localhost:8000

## Client
- Env variables (create a .env file in the client directory)
```
REACT_APP_SERVER_URL=http://10.196.10.102:8000
```
- Install npm dependencies
```
cd client
npm install
```

- Start the client
```
npm start
```
This will start the client on http://localhost:3000
