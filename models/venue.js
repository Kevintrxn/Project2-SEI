const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment: {
        type: String,
        required: true
},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
}
}, {
    timestamps: true 
});

const venueSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    eventName: {
        type: String,
        required: true
},
    eventLocation: {
        type: String,
        required: true
},
    eventDate: {
        type: Date,
        required: true
},
    experience: {
        type: String,
        enum: ['positive', 'negative'],
        required: true
},
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
},
    reviewText: {
        type: String,
        required: true
},
    comments: [commentsSchema] 
}, {
    timestamps: true 
});

module.exports = mongoose.model('Venue', venueSchema); 
