import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const { API_KEY, API_SECRET, CLOUD_NAME } = process.env;

cloudinary.config({ api_key: API_KEY, api_secret: API_SECRET, cloud_name: CLOUD_NAME });

const storage = cloudinaryStorage({
    cloudinary,
    params: {
        folder: 'audio',
        format: 'mp3',
        resource_type: 'video',
    },
});

export default multer({ storage });
