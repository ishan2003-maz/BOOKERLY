const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: ".env.local" });

async function seedAdmin() {
  const mongoUri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB_NAME || "bookerly";

  if (!mongoUri) {
    console.error("ERROR: MONGODB_URI not defined in .env.local");
    process.exit(1);
  }

  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const adminsCollection = db.collection("admins");

    // Check if admin already exists
    const existingAdmin = await adminsCollection.findOne({
      email: "admin@bookerly.com"
    });

    if (existingAdmin) {
      console.log("Admin already exists. Skipping...");
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // Create admin
    const result = await adminsCollection.insertOne({
      email: "admin@bookerly.com",
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
      createdAt: new Date()
    });

    console.log("✅ Admin created successfully!");
    console.log(`Admin ID: ${result.insertedId}`);
    console.log(`Email: admin@bookerly.com`);
    console.log(`Password: admin123`);
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seedAdmin();
