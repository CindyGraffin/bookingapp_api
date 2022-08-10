// this file show us only our routes/endpoints, all the process is in the controllers
import express, { Router } from 'express';
import { getUser, getUsers, updateUser, deleteUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/index.js';

const usersRouter = express.Router()

// usersRouter.get('/checkauth', verifyToken, (req, res, next) => {
//     res.send('you are logged in')
// })
// usersRouter.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('hello user, you are logged and you can delete your account')
// })
// usersRouter.get('/checkadmin', verifyAdmin, (req, res, next) => {
//     res.send('hello user, you are admin')
// })

// GET
usersRouter.get('/:id', verifyUser, getUser);

// GET ALL
usersRouter.get('/', verifyAdmin, getUsers);

// UPDATE
usersRouter.put('/:id', verifyUser, updateUser);

// DELETE
usersRouter.delete('/:id', verifyUser, deleteUser);


export default usersRouter;