const router = require('express').Router();
const fs = require('fs');
const dbFile = require("../db/db.json");
//get notes
router.get("/notes", (req, res) => {
    // let notes = fs.readFileSync("./db/db.json").then((notes) => {
    //     let jsonNotes = JSON.parse(notes)
    //     console.log(notes)
    //as of right now the dbFile is not displaying on the page
    let notes = JSON.parse(dbFile)
    console.log(notes);
        return res.json(notes);
    });
    


//post a note
router.post("api/notes", (req, res) => {
    res.json(dbFile);
})
//delete

module.exports = router;