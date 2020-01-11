import * as express from 'express';
import * as path from 'path';

export class Routes {

    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
        this.setStaticDir();
    }

    private home(): void {
        this.app.get('/', (request, response, next) => {
            response.sendFile('index.html');
        });
    }

    private setStaticDir(): void {
        this.app.use('/socket.io-client', express.static(path.join(__dirname, '..', '..', 'node_modules', 'socket.io-client', 'dist')));
        this.app.use('/', express.static(path.join(__dirname, '..', 'views')));
    }

    public getRoutes(): void {
        this.home();
    }

}