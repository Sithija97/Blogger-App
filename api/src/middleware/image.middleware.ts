import multer from "multer";
import { storage } from "../utils/cloudinary.util";

const upload = multer({ storage });

export default upload;
