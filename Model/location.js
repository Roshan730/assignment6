const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    location_id :{
        type : String,
        require : true 
    }
});

module.exports = mongoose.model('location',locationSchema,'location' );