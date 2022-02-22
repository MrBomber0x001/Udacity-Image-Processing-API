import transform from "../utils/sharp";
import path from 'path';
const w = 100;
const h = 100;
const destination = path.resolve(__dirname, "../../public/images/thumbnails/eren_100_100.jpg");
const wrongPath = path.resolve(__dirname, "../handlers/api.ts");
const imagePath = path.resolve(__dirname, "../../public/images/eren.jpg");
describe('Trasnform function', () => {
    it('should return null in case of success', async(): Promise<void> => {
        const result = await transform({imagePath, destination, w, h});
        expect(result).toBeNull();
    })

    it('should throw an error', async(): Promise<void> => {
        const result = await transform({imagePath: wrongPath, destination, w, h});
        expect(result).toBe('Error processing the Image');
    })
})