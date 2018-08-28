// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
    {
        customerName: "John Kim",
        phoneNumber: "6164468366",
        customerEmail: "blah@gmail.com",
        customerID: "23049234"
    },
    {
        customerName: "John Kim",
        phoneNumber: "6164468366",
        customerEmail: "blah@gmail.com",
        customerID: "23049234"
    }
];
var waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.post("/api/tables", function(req, res){
    var newTable = req.body;
    console.log(newTable);
    if(tables.length < 5){
        tables.push(newTable);
        return true;
    }else{
        waitList.push(newTable);
        return false;
    }
    // tables.push(newTable);
    // res.json(newTable);
})

// app.post("/api/waitlist", function(req, res){
//     var newWaitlist = req.body;
//     newWaitlist.routeName = newWaitlist.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newWaitlist);
//     waitlist.push(newWaitlist);
//     res.json(newWaitlist);
// })
