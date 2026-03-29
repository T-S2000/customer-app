const express = require("express");

const router = express.Router();

const Customer = require("../models/Customer");

router.get('/', async(req,res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);    
    } catch (error) {
        res.status(500).json({message: "an error occured!", error: error});
    } 
});

router.get('/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const customer = await Customer.findOne({ _id: id});
        res.status(200).json(customer);    
    } catch (error) {
        res.status(500).json({message: "an error occured!", error: error});
    } 
});

router.post('/', async (req,res) => {
    try {
        const customers = new Customer(req.body);
        const savedCustomer = customers.save();
        res.status(200).json(savedCustomer);    
    } catch (error) {
        res.status(500).json({message: "an error occured!", error: error});
    } 
});