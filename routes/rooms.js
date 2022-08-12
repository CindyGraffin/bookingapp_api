import express, { Router } from 'express';
import { getRoom, getRooms, createRoom, updateRoom, deleteRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin, verifyUser } from '../utils/index.js';

const roomsRouter = express.Router()

roomsRouter.get('/', (req, res) => {
    res.send('rooms')
})

// GET
roomsRouter.get('/:id', getRoom);

// GET ALL
roomsRouter.get('/', getRooms);

// CREATE
roomsRouter.post('/:hotelid', verifyAdmin, createRoom);

// UPDATE
roomsRouter.put('/:id', verifyAdmin, updateRoom);
roomsRouter.put('/availability/:id', updateRoomAvailability);

// DELETE
roomsRouter.delete('/:id/:hotelid', verifyAdmin, deleteRoom);


export default roomsRouter;