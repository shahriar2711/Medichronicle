const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require("express-session")
const MongoStore = require("connect-mongo")
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const UserModel = require("./model/User")


dotenv.config();
const app = express();
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173', // Ensure this matches exactly with your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

mongoose.connect("mongodb+srv://atiqshahriar2001:admin@cluster0.tssbe.mongodb.net/userCredentials")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Failed to connect to MongoDB", err))

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})



app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),
  cookie: {maxAge: 24 * 60 * 60 * 1000}
}))

app.post("/signup", async(req,res) => {
  try {
    const {name , email , password} = req.body;
    console.log(name + " " + email + " " + password)
    const existingUser = await UserModel.findOne({email});
    console.log(existingUser);
    if(existingUser){
      return res.status(400).json({error: "Email already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new UserModel({name , email , password: hashedPassword});
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})



app.post("/login", async(req,res) => {
  try {
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    if(user){
      const passwordMatch = await bcrypt.compare(password,user.password);
      if(passwordMatch){
        req.session.user = {id: user._id, name:user.name , email:user.email};
        res.json("Success");
      }else{
        res.status(401).json("Password does not match!");
      }
    }else{
      res.status(401).json("Please SignUp first");
    }
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})

app.get('/user', (req,res) => {
  if(req.session.user){
    res.json({user:req.session.user});
  }else{
    res.status(401).json("Not authenticated");
  }
})

require('./model/pdfDetails');
const PdfSchema = mongoose.model('PdfDetails');

const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Ensure the directory for storing files exists
const filesDirectory = path.join(__dirname, 'files');
if (!fs.existsSync(filesDirectory)) {
    fs.mkdirSync(filesDirectory, { recursive: true });
}

app.use('/files', express.static(path.join(__dirname, 'files')));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filesDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload-files', upload.single('file'), async (req, res) => {
    const { title } = req.body;
    const fileName = req.file.filename;

    try {
        await PdfSchema.create({ title, pdf: fileName });
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

// Endpoint to get uploaded files
app.get('/get-files', async (req, res) => {
  try {
      const files = await PdfSchema.find({});
      res.json({ status: 'ok', data: files });
  } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});




