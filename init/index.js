const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dotenv =require("dotenv");
const path=require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const dbUrl = process.env.MONGO_URI;

main()
 .then(() => {
    console.log("connected to DB");
 })
 .catch((err) =>{
  console.log(err);
 });

 async function main() {
  await mongoose.connect(dbUrl);
 }


const initDB = async () => {
  await Listing.deleteMany({});
  initData.data=initData.data.map((obj)=>({...obj, owner:"698087ce654df7074835ea40"}))
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");
// const dotenv = require("dotenv");
// const path = require("path");

// // THIS IS THE FIX
// dotenv.config({ path: path.resolve(__dirname, "../.env") });

// const dbUrl = process.env.MONGO_URI;

// // quick check
// console.log("DB URL Loaded:", !!dbUrl);

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(dbUrl);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//     owner: "6767eb099d829a53a8ef2d7e",
//   }));
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();
