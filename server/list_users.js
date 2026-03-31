require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user');

async function listUsers() {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shopping_cart');
        const users = await User.find({}, 'name email');
        console.log('\n--- Registered Users ---');
        if (users.length === 0) {
            console.log('No users found.');
        } else {
            users.forEach((user, index) => {
                console.log(`${index + 1}. Name: ${user.name} | Email: ${user.email}`);
            });
        }
        console.log('------------------------\n');
        process.exit(0);
    } catch (err) {
        console.error('Error connecting to DB:', err.message);
        process.exit(1);
    }
}

listUsers();
