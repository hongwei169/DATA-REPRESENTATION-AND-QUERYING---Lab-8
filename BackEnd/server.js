/*. Develop a Server that uses the Express Framework to returns the following
JSON data when a GET request is made to /api/books.*/

const express = require('express')
const app = express()
const port = 4000 //use 4000 instead of 3000 , make them two different server

const cors = require('cors');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//include mongoose in our project and open a connection to the test database on our locally running instance of MongoDB.
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.rlnoltf.mongodb.net/?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//get a reference to Schema and define our books.
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
});

// compling bookSchema into a model.
const bookModel = mongoose.model('MyBooks', bookSchema);

app.post('/api/books', (req, res) => {
    console.log(req.body);

    //create collections for our bookModel in MongoDB
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author

        // we have to change all the variables in other files
        // 
    })

    res.send('Data Recieved');
})


app.get('/api/books', (req, res) => {

    // find() return all documents in the databases
    bookModel.find((error, data) => {
        res.json(data); // pull all the record and json(data) will send them back down to us
    })
})

//we can pull out the data with book id
app.get('/api/book/:id', (req, res) => {
    console.log(req.params.id);

    // findById() will parse the id and find the id
    // we can get out data by calling res.json(data) function in the findById()
    bookModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.put('/api/book/:id', (req, res) => {
    console.log('Update: ' + req.params.id)

    bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})