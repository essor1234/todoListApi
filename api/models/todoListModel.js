// Define requirements of the data model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// write the format for our model
const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_data: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

// solidify this Schema as a data model with mongoose and export it from this file for use in other areas of our project
module.exports = mongoose.model('Tasks', TaskSchema);