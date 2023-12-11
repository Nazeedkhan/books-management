const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//using middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ Message: "Hello world!" });
});

//Database connection
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://nazeedkhan10:nazeedkhan10@cluster0.bcn75ct.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // create a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");

    //insert a book to the db: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    //get all the books
    app.get("/all-books", async (req, res) => {
      try {
        const data = await bookCollections.find().toArray();
        res.send(data);
      } catch (error) {
        console.error("Error fetching books:", error);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
    });

    //update books
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBooksData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: { ...updateBooksData } };
      const option = {
        upsert: true,
      };

      const result = await bookCollections.updateOne(filter, updateDoc, option);
      res.send(result);
    });

    //delete books
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = {
          category: req.query.category,
        };
      }
      try {
        const result = await bookCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
      }
    });

    // to get one book data
    app.get('/book/:id', async (req,res)=>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
     
        const result = await bookCollections.findOne(filter);
        res.send(result);
    })
    
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // coming...  
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
