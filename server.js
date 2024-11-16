
server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
const { MongoClient } = require("mongodb");
const { throwDeprecation } = require('process');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
connectDB();
