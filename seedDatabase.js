const mongoose = require("mongoose");
const { fakerEN_IN: faker } = require("@faker-js/faker"); 
const User = require("./src/models/user"); 
const bcrypt = require("bcrypt"); 
require("dotenv").config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_SECRET);
    
    await User.deleteMany({}); 

    const techSkills = [
      "React", "Node.js", "MongoDB", "Express", "TypeScript", 
      "Next.js", "Tailwind", "Python", "Java", "AWS", "Docker"
    ];
    const headlines = [
      "Full Stack Developer", "Frontend Engineer", "Backend Architect", 
      "SDE-2", "MERN Developer"
    ];

    const hashedPassword = await bcrypt.hash("Password@123", 10);

    const users = [];

    for (let i = 0; i < 50; i++) {
      const fName = faker.person.firstName();
      const lName = faker.person.lastName();

      users.push({
        firstName: fName,
        lastName: lName,
        emailId: i < 10 ? `dev${i}@gmail.com` : faker.internet.email({firstName: fName, lastName: lName}).toLowerCase(),
        password: hashedPassword,
        age: faker.number.int({ min: 22, max: 40 }),
        gender: faker.helpers.arrayElement(["male", "female"]),
        photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${fName}${i}&backgroundColor=b6e3f4,c0aede,d1d4f9`, 
        about: `${faker.helpers.arrayElement(headlines)} based in India. ${faker.person.bio()}`,
        skills: faker.helpers.arrayElements(techSkills, { min: 4, max: 7 }),
        isVerifiedDev: i < 10 ? true : false,
      });
    }

    await User.collection.insertMany(users);
    console.log("Credentials for test accounts: dev0@gmail.com to dev9@gmail.com with password 'Password@123'");
    
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding error:", err);
  }
};

seedDB();