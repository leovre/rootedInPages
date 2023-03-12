require('dotenv').config();
const mongoose =  require('mongoose')
const connectionString = process.env.CONNECT_THIS

mongoose.connect(connectionString);

//mongoDB connection on success

mongoose.connection.on('connected',() => {
    console.log(`${new Date().toLocaleDateString()} - MongoDB connected...`)
})

mongoose.connection.on('error', (error) => {
    console.log('mongoDB connection error', error)
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected...')
})