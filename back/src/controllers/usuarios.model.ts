import { Request } from 'express';
/**
 * Si se desea un borrado logico, agregar un campo el cual indique el estado del usuario
 */
export interface IUsuario {
    id_usuario: number;
    nombre: string;
    apellido_paterno: string,
    apellido_materno: string
};

export interface IGetUsuarioReq extends Request{}
export interface IAddUsuarioReq extends Request{}
export interface IUpdateUsuarioReq extends Request{}
export interface IDeleteUsuarioReq extends Request{}