const multer = require('multer')

const storage = multer.diskStorage({
    destination: './src/uploads/foods',
    filename: function (req, file, cb) {
      return cb(null,`${Date.now()}${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload 