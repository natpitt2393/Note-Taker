const router = require('express').Router();
const fs = require('fs');
const dbFile = require("../db/db.json");

//get notes
router.get("/notes", (req, res) => {
    console.log(dbFile);
    return res.json(dbFile);
});

//post a note
// listening for someone to post to the url
router.post("/notes", (req, res) => {


    dbFile.push(req.body);
    // get the info from the post (req.body)
     // an object
    console.log(dbFile) // and array of objects
    fs.writeFile('./db/db.json', JSON.stringify(dbFile), err => {
        if (err) {
            console.log(err);
        }
        return res.json(dbFile);
    })

    // update the json file 
    // -- update our local variable (dbFile) (add the new obj to the array of obj)
    // -- overide the json file w/ the updated variable 
    // -- -- (fsWriteFile)

    // end the response or send back the modified obj
    // res.end()
})

//delete

module.exports = router;