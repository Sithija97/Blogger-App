declare module "multer-storage-cloudinary" {
  import type { StorageEngine } from "multer";
  import type { UploadApiOptions, v2 as CloudinaryV2 } from "cloudinary";
  import type { Request } from "express";

  type Params =
    | UploadApiOptions
    | ((
        req: Request,
        file: Express.Multer.File
      ) => Promise<UploadApiOptions> | UploadApiOptions);

  interface CloudinaryStorageOptions {
    cloudinary: CloudinaryV2;
    params?: Params;
  }

  // The actual module exports a factory function: module.exports = (opts) => new CloudinaryStorage(opts)
  // We model it as returning a Multer StorageEngine.
  export default function multerStorage(
    options: CloudinaryStorageOptions
  ): StorageEngine;
}
