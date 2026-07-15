if(process.env.NODE_ENV !="production") {
  require("dotenv").config();
}



const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require('ejs-mate');
const dotenv=require("dotenv");
const ExpressError= require("./utils/ExpressError.js");
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const flash=require("connect-flash");


const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const bodyParser = require("body-parser");
const multer=require("multer");
const upload=multer({dest:"uploads/"});
const paymentRouter = require("./routes/payment.js");
const dns =require( 'node:dns/promises');
// Change DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);


const dbUrl = process.env.MONGO_URI;
console.log("DB URL:", process.env.MONGO_URI);

// main()
//  .then(() => {
//     console.log("connected to DB");
//  })
//  .catch((err) =>{
//   console.log(err);
//  });

//  async function main() {
//   await mongoose.connect(dbUrl);
//  }



// dotenv.config();

// const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected with Database!");
//     } catch(err) {
//         console.log("Failed to connect with Db", err);
//     }
// }

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
 // Middleware to parse multipart/form-data
 //app.use(upload.none()); // Parses form fields but NOT files
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions={
  secret:"mysupersecretcode",
  resave:false,
  saveUninitialized:true,
  cookie: {
    expires:Date.now() + 7 * 24 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly:true,
  },
};




app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) =>{
  res.locals.success= req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser = req.user || null;  // Ensure currUser is defined
  console.log("Middleware - Current User:", res.locals.currUser); // Debugging
  res.locals.page = "";
  next();
});

// app.get("/demouser", async(req, res)=>{
//   let fakeUser=new User({
//     email:"student@gmail.com",
//     username:"delta-student"
//   });
  
//   let registeredUser = await User.register(fakeUser, "helloworld");
//   res.send(registeredUser);
// })

// app.get("/", (req, res) => {
//   res.render("listings/home.ejs");
//  });


app.use("/listings", listingRouter);
app.use("/payment", paymentRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


app.all("*", (req, res, next)=>{
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err,req, res, next )=> {
  let {statusCode=500, message="Something went wrong!"}= err;
  res.status(statusCode).render(("error.ejs"), {message});
});

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await mongoose.connect(dbUrl);
    console.log("✅ Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`🚀 Server is listening on port ${PORT}`);
    });

  } catch (err) {
    console.log("❌ MongoDB connection failed:", err);
  }
}

startServer();