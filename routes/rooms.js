import express from 'express';

const roomsRouter = express.Router()

roomsRouter.get('/', (req, res) => {
    res.send('rooms')
})



export default roomsRouter;