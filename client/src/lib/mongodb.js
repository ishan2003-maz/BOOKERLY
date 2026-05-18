import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  try {
    const client = new MongoClient(mongoUri);
    await client.connect();
    
    const db = client.db(process.env.MONGODB_DB_NAME || "bookerly");
    
    cachedClient = client;
    cachedDb = db;

    console.log("Connected to MongoDB");
    return { client, db };
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
}
