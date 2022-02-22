import express, {Request, Response} from 'express';
import fs from 'fs';
import transform from '../utils/sharp';
import { validateRequest } from '../utils/validation';
import path from 'path';

const apiRoutes = (app: express.Application) => {
    app.get("/api/resize", async (req: Request, res: Response) => {
        const { error } = validateRequest(req.query);
        if (error) {
          return res.send(error.details[0].message);
        }
      const { filename, height, width } = req.query;
      const [file, extension] = (filename as string).split(".");
      const w: number = parseInt(width as string);
      const h: number = parseInt(height as string);
      const savingDir = path.join(__dirname, "../../public/images/thumbnails");
      const imagePath = path.join(__dirname, `../../public/images/${filename}`);
      const destination = `${savingDir}/${file}_${w}_${h}.${extension}`
      const cache = path.join(
        __dirname,
        `../../public/images/thumbnails/${file}_${w}_${h}.${extension}`
      );
        fs.readFile(cache, async (err, result) => {
          if (result == undefined) {
            try {
              await transform({imagePath, destination, w, h});
              console.log("Your Image has been saved successfully!");
              res.sendFile(destination);
            } catch (err){
                res.send(err.message);
            }
          } else {
            console.log(`Getting it from the cache!`);
            res.sendFile(destination);
          }
        });
    })
};
export default apiRoutes
