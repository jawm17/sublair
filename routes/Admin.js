const express = require('express');
const adminRouter = express.Router();
const passport = require('passport');
const Item = require('../models/Item');

//create new inventory item
adminRouter.post('/add-item', passport.authenticate('jwt', { session: false }), (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const { title, price, description, images } = req.body;
    const newItem = new Item({ title, price, description, images });
    newItem.save(err => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error hasddd occured", msgError: true } });
        else
            res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
    });
});

module.exports = adminRouter;