import { createPool, Pool} from 'mysql';
import { DATA_SOURCES } from './../config/vars.config';
const dataSource = DATA_SOURCES.mySqlDataSource;

let pool: Pool;

/**
 * Generar un pool de conexiones
 */
export const init = () => {
  try {
    pool = createPool({
      connectionLimit: dataSource.DB_CONNECTION_LIMIT,
      host: dataSource.DB_HOST,
      user: dataSource.DB_USER,
      password: dataSource.DB_PASSWORD,
      database: dataSource.DB_DATABASE,
    });

    console.debug('Conectado con exito');
  } catch (error) {
    console.error('[mysql.connector][init][Error]: ', error);
    throw new Error('fallo en el pool de conexiones');
  }
};

/**
 * ejecutar una consulta
 *
 * @param {string} query - query sql
 * @param {string[] | Object} params - parametros de la 
 * query
 */
export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
  try {
    if (!pool) throw new Error('Pool no creado');

    return new Promise<T>((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });

  } catch (error) {
    console.error('[mysql.connector][execute][Error]: ', error);
    throw new Error('No se pudo ejecutar la query');
  }
}