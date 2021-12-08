const router = require('express').Router();
const fs = require('fs');
const dbFile = require("../db/db.json");
const { v1: uuidv1 } = require('uuid');

//get notes
router.get("/notes", (req, res) => {
    console.log(`${req.method} ${req.url}`);
    return res.json(dbFile);
});

//post a note

router.post("/notes", (req, res) => {
    console.log(`${req.method} ${req.url}`);
    // create a note object so that an id
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv1()
    };

    dbFile.push(note);
    

    console.log(dbFile)
    fs.writeFile('./db/db.json', JSON.stringify(dbFile), err => {
        if (err) {
            console.log(err);
        }
        return res.json(dbFile);
    })
})

//delete

module.exports = router;


