import * as UsuarioService from './usuarios.service';
import { Request, RequestHandler, Response } from 'express';
import {
  IUsuario,
  IGetUsuarioReq,
  IAddUsuarioReq,
  IUpdateUsuarioReq,
  IDeleteUsuarioReq
} from './usuarios.model';

export const getUsuario: RequestHandler = async (req: Request, res: Response) => {
    try {
      const usuarios = await UsuarioService.getUsuario();
  
      res.status(200).json({
        usuarios
      });
    } catch (error) {
      console.error('[usuarios.controller][getusuarios][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
        message: 'Error en get Usaurios'
      });
    }
  };

  export const getUsuarioById: RequestHandler = async (req: IGetUsuarioReq, res: Response) => {
    try {
      const usuario = await UsuarioService.getUsuaurioById((req.params.id as unknown) as number);
  
      res.status(200).json({
        usuario
      });
    } catch (error) {
      console.error('[usuarios.controller][getUsuarioById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
        message: 'Error en GetUsuarioById'
      });
    }
  };

  export const addUsuario: RequestHandler = async (req: IAddUsuarioReq, res: Response) => {
    try {
      const result = await UsuarioService.insertUsuario(req.body);
  
      res.status(200).json({
        result
      });
    } catch (error) {
      console.error('[usuarios.controller][addUsuario][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
        message: 'Error Añadiendo usarios'
      });
    }
  };

  export const updateUsuarioById: RequestHandler = async (req: IUpdateUsuarioReq, res: Response) => {
    try {
      const result = await UsuarioService.updateUsuario({ ...req.body, id: req.params.id });
  
      res.status(200).json({
        result
      });
    } catch (error) {
      console.error('[usuarios.controller][updateUsuarioById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
        message: 'Error actualizando usuarios'
      });
    }
  };

  export const deleteUsuarioById: RequestHandler = async (req: IDeleteUsuarioReq, res: Response) => {
    try {
      const result = await UsuarioService.deleteUsuario((req.params.id as unknown) as number);
  
      res.status(200).json({
        result
      });
    } catch (error) {
      console.error('[usuarios.controller][deleteUsuarioById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
        message: 'Error eliminando usarios'
      });
    }
  };

export default { getUsuario, getUsuarioById, updateUsuarioById, deleteUsuarioById, addUsuario };