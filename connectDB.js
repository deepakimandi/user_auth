// const connectionString = 'mongodb+srv://deepakimandi:wfwBPUyrbm3OhuGO@cluster0.tiwonez.mongodb.net/EmployeeDB?retryWrites=true&w=majority&appName=Cluster0';
const connectionString = process.env.CONNECTION_STRING;
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true }

const mongoose = require('mongoose');
mongoose.connect(connectionString, connectionParams).then(() => {
    console.log('Connected to the database');
}).catch((e) => {
    console.log('Error: ', e);
});
