const { MongoClient } = require("mongodb");

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const mongoUri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB_NAME || "bookerly";

  if (!mongoUri) {
    throw new Error("Please define the MONGODB_URI environment variable in .env");
  }

  try {
    const client = new MongoClient(mongoUri);
    await client.connect();

    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    console.log(`✅ Connected to MongoDB database: ${dbName}`);
    return { client, db };
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
}

async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    console.log("MongoDB connection closed");
  }
}

module.exports = { connectToDatabase, closeDatabase };
