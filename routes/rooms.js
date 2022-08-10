import express from 'express';
import { getRoom, getRooms, createRoom, updateRoom, deleteRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/index.js';

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

// DELETE
roomsRouter.delete('/:id/:hotelid', verifyAdmin, deleteRoom);


export default roomsRouter;