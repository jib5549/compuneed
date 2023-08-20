// const item = require('./item');

// const Schema = require('mongoose').Schema;

// const itemSchema = new Schema({
//   name: { type: String, required: true },
//   emoji: String,
//   category: { type: Schema.Types.ObjectId, ref: 'Category' },
//   reducedPrice: { type: Schema.Types.ObjectId, ref: 'Category', type: Number },
//   price: { type: Number, required: true, default: 0 }
// }, {
//   timestamps: true
// });

// module.exports = itemSchema;

const item = require('./item');
const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  image: String,
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = itemSchema;