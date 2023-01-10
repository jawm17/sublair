const express = require('express');
const adminRouter = express.Router();
const passport = require('passport');
const Item = require('../models/Item');
const message = { msgBody: "Error has occured", msgError: true };

// create new inventory item
adminRouter.post('/add-item', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const { title, price, description, images, thumbnail } = req.body;
    const newItem = new Item({ title, price, description, images, thumbnail });
    newItem.save(err => {
        if (err)
            res.status(500).json({ message });
        else
            res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
    });
});

// update inventory item
adminRouter.post('/update-item', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { item, id } = req.body;
    Item.findOneAndUpdate({ _id: id }, item, (err, item) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else {
            res.status(201).json({ message: { msgBody: "Item successfully updated", msgError: false } });
        }
    });
});


// get all inventory
adminRouter.get('/get-inventory', passport.authenticate('jwt', { session: false }), (req, res) => {
    Item.find().exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ document });
        }
    });
});

// get all inventory
adminRouter.get('/item-data/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Item.findById({ _id: req.params.id }).populate("orders").exec((err, item) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ item });
        }
    });
});

module.exports = adminRouter;