// this file show us only our routes/endpoints, all the process is in the controllers

import express from 'express';
import { getHotel, getHotels, createHotel, updateHotel, deleteHotel, countByCity, countByType, getHotelRooms } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/index.js';

const hotelsRouter = express.Router()


// GET
hotelsRouter.get('/find/:id', getHotel);

// GET ALL
hotelsRouter.get('/', getHotels);
hotelsRouter.get('/countbycity', countByCity)
hotelsRouter.get('/countbytype', countByType)
hotelsRouter.get('/room/:id', getHotelRooms)

// CREATE
hotelsRouter.post('/', verifyAdmin, createHotel);

// UPDATE
hotelsRouter.put('/:id', verifyAdmin, updateHotel);

// DELETE
hotelsRouter.delete('/:id', verifyAdmin, deleteHotel);


export default hotelsRouter;