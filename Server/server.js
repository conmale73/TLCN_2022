require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') 
const morgan = require('morgan')
const productRoutes = require('./routes/product')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000

app.use(morgan('tiny'));

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tlcn2022.areckna.mongodb.net/TLCN?retryWrites=true&w=majority`)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()
app.use(express.json());
app.use(cors())
app.use('/api/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
