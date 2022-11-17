
import minimist from 'minimist';
import express from 'express';
import { roll } from "./lib/roll.js";

// const args = require('minimist')(process.argv.slice(2));
const args = minimist(process.argv.slice(2));
// const express = require('express')
const app = express();

const port = args.port || 5000;

// app.use(express.json());
// app.use(express.urlencoded({ encoded: true}));

app.get('/app/', (req, res, next) => {
    res.send("200 OK").end();
})

app.get('/app/roll/', (req, res, next) => {
    res.send(roll(6, 2, 1)).end();
})

app.get('/app/roll/:sides/', (req, res, next) => {
    res.send(roll(req.params.sides, 2, 1)).end();
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
    res.send(roll(req.params.sides, req.params.dice, 1)).end();
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    res.send(roll(req.params.sides, req.params.dice, req.params.rolls)).end();
})

app.get('/app/*', (req, res, next) => {
    res.send('404 NOT FOUND');
})

// app.post('/app/roll/:sides/', (req, res, next) => {
//     console.log(roll(req.params.sides, 2, 1)) // this gets logged to the node tab
//     res.status(200).json(
//         roll(req.params.sides || 6, 2, 1)
//     ).end() // this get posted to the curl tab
// })

// app.post('/senddata/:username/', (req, res, next) => {
//     console.log(req.params.username + " logged in with this password: " + req.body.password);
//     console.log(roll(6, 2, 3));
//     res.status(200).json(
//         {
//             username: req.params.username,
//             password: req.body.password
//         }
//     ).end()
// })

app.listen(port, () => {
    console.log("Server listening on port " + port + ".");
})
