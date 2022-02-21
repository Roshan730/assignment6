const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const orderSchema = new Schema({
    placedBy : {
        type : String,
        require : true
    },
    placedByUserId :{
        type : Number,
        require : true 
    },
    placedOn :{
        type : String,
        require : true 
    },
     items :{
        type : Array,
        require : true 
    },
    Amount :{
        type : Number,
        require : true 
    },
    restaurantId :{
        type : Number,
        require : true 
    },
});

module.exports = mongoose.model('order',orderSchema,'order');