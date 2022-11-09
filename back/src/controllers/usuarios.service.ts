import { execute } from "./../utils/mysql.connector";
import { UsuarioQueries } from "./usuarios.queris";
import { IUsuario } from "./usuarios.model";

/**
 * Controlador de servicios de usuarios
 */
 export const getUsuario = async () => {
    return execute<IUsuario[]>(UsuarioQueries.GetUsuarios, []);
  };
  
  /**
   * Controlador de servicios de usuarios
   */
  export const getUsuaurioById = async (id: IUsuario['id_usuario']) => {
    return execute<IUsuario>(UsuarioQueries.GetUsuariosById, [id]);
  };
  
  /**
   * Controlador de servicios de usuarios
   */
  export const insertUsuario = async (usuario: IUsuario) => {
    const result = await execute<{ affectedRows: number }>(UsuarioQueries.AddUsuario, [
      usuario.id_usuario,
      usuario.nombre,
      usuario.apellido_paterno,
      usuario.apellido_materno
    ]);
    return result.affectedRows > 0;
  };
  
  /**
   * Controlador de servicios de usuarios
   */
  export const updateUsuario = async (usuario: IUsuario) => {
    const result = await execute<{ affectedRows: number }>(UsuarioQueries.UpdateUsuarioById, [
      usuario.nombre,
      usuario.apellido_paterno,
      usuario.apellido_materno,
      usuario.id_usuario
    ]);
    return result.affectedRows > 0;
  };
  
  /**
   * Controlador de servicios de usuarios
   */
   export const deleteUsuario = async (id: IUsuario['id_usuario']) => {
    const result = await execute<{ affectedRows: number }>(UsuarioQueries.DeleteUsuarioById, [
      id
    ]);
    return result.affectedRows > 0;
  };