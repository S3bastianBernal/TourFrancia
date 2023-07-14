const mongoose = require("mongoose");

const premioSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    ganador:{
        type: String,
        require: true,
        trim: true
    },
    equipo:{
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Premio = mongoose.model("premios", premioSchema);

module.exports = Premio;