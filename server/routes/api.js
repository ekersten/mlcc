const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/test', function (req, res, next) {
    res.json('test');
});

router.get('/items', function (req, res) {
    const q = req.query.q;
    const limit = req.query.limit || false
    let limitStr = '';
    
    if (limit) {
        limitStr = `&limit=${limit}`   
    }

    if (!q) {
        res.status(500).json({
            msg: 'Missing q param'
        });
    }

    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}${limitStr}`).then(response => {
        res.json({
            author: {
                name: 'Eric',
                lastname: 'Kersten'
            },
            categories: response.data.available_filters[0].values.map(category => category.name),
            items: response.data.results.map(item => ({
                id: item.id,
                title: item.title,
                city: item.address.city_name,
                price: {
                    currency: item.currency_id,
                    amount: Math.floor(item.price),
                    decimals: Math.floor((item.price - Math.floor(item.price)) * 100)
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping
            }))
        });
    }).catch(error => {
        res.status(error.response.status).json({
            error: error.response.data.error,
            message: error.response.data.message,
            status: error.response.data.status
        })
    });

})

router.get('/items/:id', function (req, res) {
    const id = req.params.id;

    axios.all([
        axios.get(`https://api.mercadolibre.com/items/${id}`),
        axios.get(`https://api.mercadolibre.com/items/${id}/description`)
    ]).then(([detailResponse, descriptionResponse]) => {
        res.json({
            author: {
                name: 'Eric',
                lastname: 'Kersten'
            },
            item: {
                id: detailResponse.data.id,
                title: detailResponse.data.title,
                price: {
                    currency: detailResponse.data.currency_id,
                    amount: Math.floor(detailResponse.data.price),
                    decimals: Math.floor((detailResponse.data.price - Math.floor(detailResponse.data.price)) * 100)
                },
                picture: detailResponse.data.pictures[0].secure_url,
                condition: detailResponse.data.condition,
                free_shipping: detailResponse.data.shipping.free_shipping,
                sold_quantity: detailResponse.data.sold_quantity,
                description: descriptionResponse.data.plain_text
            }
        });
    }).catch(error => {
        res.status(error.response.status).json({
            error: error.response.data.error,
            message: error.response.data.message,
            status: error.response.data.status
        })
    });
    
    
    
});

module.exports = router;