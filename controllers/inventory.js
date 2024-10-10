const express = require('express');
const router = express.Router();
const { Inventory } = require('../models/user');
// GET /inventory
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /inventory
router.post('/', async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /inventory/:id
router.get('/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) {
      res.status(404).json({ error: 'Inventory item not found' });
    }
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /inventory/:id
router.put('/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inventory) {
      res.status(404).json({ error: 'Inventory item not found' });
    }
    res.json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /inventory/:id
router.delete('/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) {
      res.status(404).json({ error: 'Inventory item not found' });
    }
    res.json({ message: 'Inventory item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;