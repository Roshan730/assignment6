const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    location_id :{
        type : String,
        require : true 
    }
});

module.exports = mongoose.model('restaurant', restaurantsSchema,'restaurants' );