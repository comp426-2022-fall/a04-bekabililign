
import minimist from 'minimist';
import express from 'express';
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
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
    res.send(roll(parseInt(req.params.sides), 2, 1)).end();
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1)).end();
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls))).end();
})

app.get('/app/*', (req, res, next) => {
    res.send('404 NOT FOUND');
})


app.listen(port, () => {
    console.log("Server listening on port " + port + ".");
})
