const { Animal, Cuidador } = require("./models.js");


// ------- CLIENTES

exports.readAnimales = (req, res) =>
    Animal.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readAnimal = (req, res) =>
    Animal.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteAnimal = (req, res) =>
    Animal.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateAnimal = (req, res) =>
    Animal.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, raza: req.body.raza } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createAnimal = (req, res) =>
    new Animal({ nombre: req.body.nombre, raza: req.body.raza })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readCuidadores = (req, res) =>
    Cuidador.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readCuidador = (req, res) =>
    Cuidador.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteCuidador = (req, res) =>
    Cuidador.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateCuidador = (req, res) =>
    Cuidador.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createCuidador = (req, res) =>
    new Cuidador({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
