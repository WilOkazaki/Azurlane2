const { Schema, model, default: mongoose } = require("mongoose");
const Movies = require("./Movies");
const Users = require("./Users");

// Modelo para las reviews 
const ReviewSchema = Schema(
  {
    review: {
      type: String,
      trim: true,
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: Movies
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: Users
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);




module.exports = model('Review', ReviewSchema);
