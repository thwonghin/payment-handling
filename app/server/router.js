const express = require('express');
const path = require('path');
const paymentValidation = require('./handlers/paymentValidation');
const gatewayChooser = require('./handlers/gatewayChooser');
const recordChecker = require('./handlers/recordChecker');

const router = new express.Router();

const sendIndexHtml = (req, res) => res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));

router.get('/payment-check', sendIndexHtml);
router.post('/payments', paymentValidation, gatewayChooser);
router.get('/payments/:id', recordChecker);

// fallback on missing route: go back to home page
router.get('/*', (req, res) => res.redirect('/'));

module.exports = router;