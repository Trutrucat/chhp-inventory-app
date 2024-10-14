const express = require('express');
const router = express.Router();
const { User, Inventory, WalkinRefrigerator, WalkinFreezer, Beer, Kitchen, StoreRoom, DiningArea } = require('../models/index');

router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { type } = req.body;
    let inventory;
    switch (type) {
      case 'WalkinRefrigerator':
        inventory = new WalkinRefrigerator(req.body);
        break;
      case 'WalkinFreezer':
        inventory = new WalkinFreezer(req.body);
        break;
      case 'Beer':
        inventory = new Beer(req.body);
        break;
      case 'Kitchen':
        inventory = new Kitchen(req.body);
        break;
      case 'StoreRoom':
        inventory = new StoreRoom(req.body);
        break;
      case 'DiningArea':
        inventory = new DiningArea(req.body);
        break;
      default:
        res.status(400).json({ error: 'Invalid inventory type' });
        return;
    }
    await inventory.save();
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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

router.put('/:id', async (req, res) => {
  try {
    const { type } = req.body;
    let inventory;
    switch (type) {
      case 'WalkinRefrigerator':
        inventory = await WalkinRefrigerator.findByIdAndUpdate(req.params.id, req.body, { new: true });
        break;
      case 'WalkinFreezer':
        inventory = await WalkinFreezer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        break;
      case 'Beer':
        inventory = await Beer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        break;
      case 'Kitchen':
        inventory = await Kitchen.findByIdAndUpdate(req.params.id, req.body, { new: true });
        break;
      case 'StoreRoom':
        inventory = await StoreRoom.findByIdAndUpdate(req.params.id, req.body, { new: true });
        break;
      case 'DiningArea':
        inventory = await DiningArea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        break;
      default:
        res.status(400).json({ error: 'Invalid inventory type' });
        return;
    }
    if (!inventory) {
      res.status(404).json({ error: 'Inventory item not found' });
    }
    res.json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



module.exports = router;