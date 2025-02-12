import multer from "multer";
import { storage, postStorage } from "../utils/cloudinary.util";

const userImgUpload = multer({ storage });
const postImgUpload = multer({ storage: postStorage });

export default { userImgUpload, postImgUpload };
