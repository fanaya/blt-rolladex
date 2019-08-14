const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://fanaya:6zd7rj63qMinkW1A@cluster0-nmcso.mongodb.net/test?retryWrites=true&w=majority";

const mongoConnect = (callback) => {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("Connected!");
        callback(client);
    })
    .catch(err => {
        console.log("ERROR!");
        console.log(err);
    });
};

module.exports = mongoConnect;
