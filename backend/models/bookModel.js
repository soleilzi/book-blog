import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    author:{
      type: String,
      required: true
    },
    image:{
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    rating:{
      type: Number,
      min: 0,
      max: 5,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

const Book = mongoose.model('Book', bookSchema);

export default Book;