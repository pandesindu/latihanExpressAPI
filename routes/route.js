import express from "express";
import {
    getNotif,
    getNotifID,
    createNotif,
    updateNotif,
    deleteNotif
} from "../controllers/notificationController.js";

const router = express.Router()
//get data all
router.get('/', getNotif)

//get data all
router.get('/:id', getNotifID)

// post data 
router.post('/', createNotif)
//update
router.patch('/:id', updateNotif)
//delete
router.delete('/:id', deleteNotif)


export default router;