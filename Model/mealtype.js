const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mealtypeSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    meal_type :{
        type : String,
        require : true 
    }
});

module.exports = mongoose.model('mealtype',mealtypeSchema,'mealtype' );