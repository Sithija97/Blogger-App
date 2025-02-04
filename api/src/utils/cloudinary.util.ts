import { format } from "date-fns";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const validFormats = ["jpg", "jpeg", "png"];
    const extension = file.originalname.split(".").pop()?.toLowerCase();

    if (!extension || !validFormats.includes(extension)) {
      throw new Error("Unsupported file format");
    }

    return {
      folder: "uploads",
      format: extension, // Dynamic format based on the file extension
      public_id: `${file.originalname.split(".")[0]}-${Date.now()}`,
      resource_type: "image",
    };
  },
});

export { cloudinary, storage };
