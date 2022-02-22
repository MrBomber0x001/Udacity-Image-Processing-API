import supertest from "supertest";
import app from '../main'

const request = supertest(app);


describe('Testing Endpoint Response', (): void => {
    describe('/', (): void => {
        it('gets /', async (): Promise<void> => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        })
    })

    describe('/api/resize',  (): void=> {
        it('gets the /api/resize?filename=eren.jpg&width=100&height=100', async(): Promise<void> => {
            const response = await request.get('/api/resize?filename=eren.jpg&width=100&height=100');
            expect(response.status).toBe(200);
        })
    })
});
