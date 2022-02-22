import express, {Request, Response} from 'express';

const homeRoutes = (app: express.Application): void => {
    app.get('/', (req: Request, res: Response): void=> {
        res.send(`<h1>Udacity - Image processing api project</h1>
                 <p>This project is all about receiving an image from an api and resize it with your favorite dimenstions <br>
                 all you need to provide is the filename, width, heigth on the <a href="http://localhost:3000/api/resize">resize api</a>
                 </p>
        `)
    })
}
export default homeRoutes