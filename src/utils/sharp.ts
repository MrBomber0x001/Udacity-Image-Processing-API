import sharp from 'sharp';

interface Sharp{ 
    imagePath: string;
    destination: string;
    w: number;
    h: number;
}
const transform = async (params: Sharp): Promise<null | string> => {
    try{
        const {w, h} = params;
        await sharp(params.imagePath).resize(w, h).toFile(params.destination)
        return null;
    } catch (err){
        return 'Error processing the Image';
    }
}
export default transform;