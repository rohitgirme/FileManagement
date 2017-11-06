var multer = require('multer');
var path = require('path');
var constants = require('./constants');

let upload;

const Utils = {
  getMulter: function() {
    if (!upload) {
      let storage = multer.diskStorage({
        destination: path.join(__dirname, '..', constants.UPLOAD_FILE_DIR),
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      });
      return multer({storage: storage})
        .array(constants.UPLOAD_FILE_NAME, constants.UPLOAD_FILE_LIMIT);
    }

    return upload;
  }
};

module.exports = Utils;