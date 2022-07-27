import express from 'express';
import Hotel from '../models/Hotel.js'
const hotelsRouter = express.Router()

hotelsRouter.get('/', (req, res) => {
    res.send('hotels')
})

// GET
// GET ALL
// CREATE
// we use async because we need to connect to our db, create a new collection and a new document and it will take time
hotelsRouter.post('/', async (req, res) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json(error);
    }
})
// UPDATE
// DELETE



export default hotelsRouter;