var express = require('express');
var logger = require('../utils/logger');
var constants = require('../utils/constants');
var utils = require('../utils/utils');
var path = require('path');

var router = express.Router();
var upload = utils.getMulter();

router.post('/files/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      logger.l.log(logger.LEVEL.ERROR, 'Upload failed', err);
      res.status(500).send();
    }

    setTimeout(function () {
      logger.l.log(logger.LEVEL.INFO, 'Upload succeeded');
      res.status(200).send();
    }, 5000);
  });
});

router.get('/files', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '..', 'fake', 'files.json'));
});

router.delete('/files/:id', function (req, res) {
  console.log('deleting ', req.params.id);
  res.status(200).send();
});

router.post('/files/batch', function (req, res) {
  console.log('deleting batch', req.body);
  res.status(200).send();
});

router.all(function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

module.exports = router;
