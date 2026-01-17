require('dotenv').config()
let mongoose = require('mongoose')


let URI = process.env.MONGODB_URI

// var client = new MongoClient(URI);
// var db = client.GetDatabase("test");

let connectdb = async () => {
    try {
        let con = await mongoose.connect(URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
        console.log("Database is Connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectdb
// module.exports = db


