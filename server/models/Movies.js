const { Schema, model } = require("mongoose");

// Modelo para las peliculas 
const MovieSchema = Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },

    imagen: {
      type: String,
      required: true,
      trim: true,
    },

    genero: {
      type: String,
      required: true,
      enum: [
        "acción",
        "aventuras",
        "ciencia ficción",
        "comedia",
        "documental",
        "fantasía",
        "musical",
        "suspenso",
        "terror",
      ],
    },

    sinopsis: {
      type: String,
      required: true,
      trim: true,
    },

    publicacion: {
      type: String,
      required: true,
      trim: true,
    },

    actores: {
      type: String,
      required: true,
      trim: true,
    },

    direccion: {
      type: String,
      required: true,
      trim: true,
    },

    productora: {
      type: String,
      required: true,
      trim: true,
    },

    estatus: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Movie", MovieSchema);
