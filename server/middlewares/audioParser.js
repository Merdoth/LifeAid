import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();
const { API_KEY, API_SECRET, CLOUD_NAME } = process.env;

<<<<<<< Updated upstream
cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
});
=======
<<<<<<< Updated upstream
const { API_KEY, API_SECRET, CLOUD_NAME } = process.env;

cloudinary.config({ api_key: API_KEY, api_secret: API_SECRET, cloud_name: CLOUD_NAME });

=======
cloudinary.config({ api_key: API_KEY, api_secret: API_SECRET, cloud_name: CLOUD_NAME });
>>>>>>> Stashed changes
>>>>>>> Stashed changes
const storage = cloudinaryStorage({
    cloudinary,
    params: {
        folder: 'audio',
        format: 'mp3',
        resource_type: 'video',
    },
});

export default multer({ storage });
