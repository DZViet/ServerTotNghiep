const express = require('express');
const router = express.Router();
const CartController = require('../../components/cart/CartController');

// http://localhost:3000/api/cart/get-by-idUser?idUser=

router.get('/get-by-idUser', async (req, res, next) => {
    try {
        const { idUser } = req.query;
        const cart = await CartController.getCartByIdUser(idUser);
        if (cart) {
            return res.status(200).json({ result: true, cart: cart, message: "Success" });
        }
        return res.status(400).json({ result: false, cart: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, cart: null });
    }
});

// http://localhost:3000/api/cart/new-to-cart
router.post('/new-to-cart', async (req, res, next) => {
    try {
        const { idUser, idProduct, color,size,quantity} = req.body;
        // console.log(idUser, idRecipe)
        const cart = await CartController.addNewCart(idUser, idProduct, color,size,quantity);
        if (cart) {
            return res.status(200).json({ result: true, cart: cart, message: "Add new success" });
        }
        return res.status(400).json({ result: false, cart: null, message: "Failed to add new" });
    } catch (error) {
        return res.status(500).json({ result: false, cart: null });
    }
});

module.exports = router;