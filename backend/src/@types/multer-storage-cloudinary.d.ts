declare module "multer-storage-cloudinary" {
  import { StorageEngine } from "multer";

  export interface Options {
    cloudinary: any;
    params?: {
      folder?: string;
      allowed_formats?: string[];
      transformation?: any[];
      public_id?: (req: any, file: any) => string;
      [key: string]: any;
    } | ((req: any, file: any) => any);
  }

  export class CloudinaryStorage implements StorageEngine {
    constructor(options: Options);
    _handleFile(req: any, file: any, callback: any): void;
    _removeFile(req: any, file: any, callback: any): void;
  }
}
