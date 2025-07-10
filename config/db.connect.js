const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_PATH || './database.sqlite',
    logging: false, // Set to console.log to see SQL queries
});

const connectDB = async () => {
    try {
        console.log('Attempting to connect to SQLite database...');
        console.log('Database path:', process.env.DB_PATH || './database.sqlite');
        
        await sequelize.authenticate();
        console.log("✅ SQLite database connected successfully");
        
        // Sync all models
        await sequelize.sync();
        console.log("✅ Database models synchronized");
        
        return sequelize;
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

module.exports = { connectDB, sequelize };