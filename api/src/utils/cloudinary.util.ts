import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: "your_api_secret",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "uploads",
      format: "jpg", // Use static string instead of an async function
      public_id: file.originalname.split(".")[0],
      resource_type: "image", // Specify resource type if necessary
    };
  },
});

export { cloudinary, storage };
