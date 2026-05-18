require("dotenv").config();
const bcrypt = require("bcryptjs");
const { connectToDatabase, closeDatabase } = require("../config/mongodb");

async function seedAdmin() {
  try {
    const { db } = await connectToDatabase();
    const adminsCollection = db.collection("admins");

    // Check if admin already exists
    const existingAdmin = await adminsCollection.findOne({
      email: "admin@bookerly.com"
    });

    if (existingAdmin) {
      console.log("⚠️  Admin with email 'admin@bookerly.com' already exists.");
      console.log("Skipping seed...");
      await closeDatabase();
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

    console.log("\n✅ Admin created successfully!");
    console.log(`─────────────────────────────────────`);
    console.log(`Admin ID: ${result.insertedId}`);
    console.log(`Email: admin@bookerly.com`);
    console.log(`Password: admin123`);
    console.log(`─────────────────────────────────────\n`);

    await closeDatabase();
  } catch (error) {
    console.error("❌ Error seeding admin:", error.message);
    process.exit(1);
  }
}

seedAdmin();
