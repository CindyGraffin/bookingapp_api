// this file show us only our routes/endpoints, all the process is in the controllers

import express from 'express';
import { getHotel, getHotels, createHotel, updateHotel, deleteHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/index.js';

const hotelsRouter = express.Router()


// GET
hotelsRouter.get('/:id', getHotel);

// GET ALL
hotelsRouter.get('/', getHotels);

// CREATE
hotelsRouter.post('/', verifyAdmin, createHotel);

// UPDATE
hotelsRouter.put('/:id', verifyAdmin, updateHotel);

// DELETE
hotelsRouter.delete('/:id', verifyAdmin, deleteHotel);


export default hotelsRouter;