import multer from 'multer';
import path from 'path';

const multerDestination = path.join(__dirname, '../../', 'temp');

const multerConfig = multer.diskStorage({
  destination: multerDestination,
  filename: (request, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadMiddleware = multer({ storage: multerConfig });

export default uploadMiddleware;
