const express = require('express');
const itemRouter = express.Router();
const passport = require('passport');
const Item = require('../models/Item');
const Order = require("../models/Order");
const message = { msgBody: "Error has occured", msgError: true };

//create new order object
itemRouter.post('/new-order', (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };
    const { amountPayed, payerName, payerEmail, payerId, orderId, itemId, createdAt } = req.body;
    const newOrder = new Order({ amountPayed, payerName, payerEmail, payerId, orderId, itemId, createdAt });
    newOrder.save(err => {
        if (err) res.status(500).json({ message });
        else {
            Item.findById({ _id: itemId }).exec((err, item) => {
                if (err) res.status(500).json({ message });
                else {
                    item.orders.push(newOrder);
                    item.save(err => {
                        if (err) res.status(500).json({ message });
                        else {
                            res.status(201).json({ message: { msgBody: "Order successfully created", msgError: false } });
                        }
                    });
                }
            })
        }

    });
});

// get all inventory
itemRouter.get('/get-listings', (req, res) => {
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
itemRouter.get('/get-info/:id', (req, res) => {
    Item.findById({ _id: req.params.id }).exec((err, item) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({
                images: item.images,
                title: item.title,
                price: item.price,
                description: item.description,
                thumbnail: item.thumbnail
            });
        }
    })
});

module.exports = itemRouter;