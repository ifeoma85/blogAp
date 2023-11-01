const express = require("express")
const BlogModel = require("../models/blog")

const blogRoute = express.Router()
// CRUD routes

//Read
blogRoute.get("/", (req, res) =>{
    res.send("")
})

//READ BY ID
blogRoute.get("/:id", (req, res)=> {
    const id = req.params.id
    //FIND AND RETURN BLOG BY ID
    res.send("Get blog by ID")
})

//CREATE
blogRoute.get("/", (req, res)=>{
    const blog = req.body
    console.log(blog)

    res.send("Blog Added")
})

//UPDATE
blogRoute.put("/:id", (req, res) => {
    const id = req.params.id
    console.log("Updating blog with id" + id)

    //Perform update to book in the database
    
    res.send("Blog updated")
})

//DELETE
blogRoute.delete("/:id", (req, res) => [
    id = req.params.id,
    console.log("Deleting blog with id" + id),

    // perform delete to blog in the database

    res.send("Blog Deleted!")
])

module.exports = blogRoute