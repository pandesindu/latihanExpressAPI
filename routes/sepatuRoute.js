import express from "express";
import {
    getSepatu,
    storeSepatu,
    updateSepatu,
    deleteSepatu
} from "../controllers/sepatuController.js";


const router = express.Router()

router.get('/', getSepatu);
router.post('/', storeSepatu);
router.patch('/:id', updateSepatu);
router.delete('/:id', deleteSepatu);

export default router;