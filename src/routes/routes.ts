import * as express from 'express';

export class Routes {

    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    private home(): void {
        this.app.get('/', (request, response) => {
            response.send('Hello Good ol friend');
        });
    }

    public getRoutes(): void {
        this.home();
    }

}