import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../server/public/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now());
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 15 }, // Limit file size to 5MB
}).array('images', 10); // Allow up to 5 files for the 'images' field

export default upload;
