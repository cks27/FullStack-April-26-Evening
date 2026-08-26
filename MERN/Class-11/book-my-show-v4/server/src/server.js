import app from './app.js';
import AppDataSource from './data-source.js';

const PORT = 8080;

(async () => {
    try {
        await AppDataSource.connect();
        app.listen(PORT, () => {
            console.log(`server started at ${PORT}`)
        });
    }
    catch (err) {
        // gracefull shutdown of database
        await AppDataSource.disconnect();
        console.log(err);
    }
})()