const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

// MIDELVARES use()
app.use(cors())
app.use(express.json()) // allow us to parse JSON

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true  })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection estabishes successfilly");
})

const DiseaseRouter = require('./routes/ChronicDiseases')
const CigaretsRouter = require('./routes/CigaretsType')
const CityRouter = require('./routes/City')
const GenderRouter = require('./routes/Genre')
const MedicineRouter = require('./routes/Medicine')
const TrainingRouter = require('./routes/TreningType')
const SmokingInformation = require('./routes/SmokingInformation')

const BlogCard = require('./routes/blogCard')

app.use('/disease',DiseaseRouter)
app.use('/cigarets',CigaretsRouter)
app.use('/city',CityRouter)
app.use('/gender',GenderRouter)
app.use('/medicine',MedicineRouter)
app.use('/training',TrainingRouter)
app.use('/smokinginformation', SmokingInformation)

app.use('/blogcard', BlogCard)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})