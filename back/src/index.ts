import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/usuarios';
import * as MySQLConnector from './utils/mysql.connector';


const router: Express = express();


router.use(morgan('dev'));

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

MySQLConnector.init();

/** Reglas del api */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/', routes);

/** manejo de errores */
router.use((req, res, next) => {
    const error = new Error('.error');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`Coneccion en el puerto ${PORT}`));
