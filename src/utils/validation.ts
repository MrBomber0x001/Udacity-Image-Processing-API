import Joi from 'joi';
interface ImageQuery{
    width?: number,
    height?: number,
    filename?: string
}
export const validateRequest = (body: ImageQuery) => {
    const schema = Joi.object({
        width: Joi.number().min(1).required(),
        height: Joi.number().min(1).required(),
        filename: Joi.string().min(1).required()
    })
    return schema.validate(body);
}