const express=require("express");
const router =express.Router();

// Index - post 
router.get("/", (req, res)=>{
    res.send("GET for post");
});

// show - post
router.get("/:id", (req, res)=>{
    res.send("GET for show post id");
});

// Post - post
router.post("/", (req, res)=>{
    res.send("GET for post post");
});

// Delete - users
router.delete("/:id", (req, res)=>{
    res.send("GET for delete post id");
});

module.exports=router;

