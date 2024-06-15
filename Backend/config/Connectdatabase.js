const mongoose = require('mongoose');




const connectDataBase = () => {
mongoose.connect(process.env.DB_URL).then((con) => {
    console.log("Mongo db Connected to host :" + con.connection.host);
})
};

module.exports = connectDataBase;