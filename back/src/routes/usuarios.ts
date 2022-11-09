/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/usuarios.controller';
const router = express.Router();

router.get('/usuarios', controller.getUsuario);
router.get('/usuarios/:id', controller.getUsuarioById);
router.put('/usuarios/:id', controller.updateUsuarioById);
router.delete('/usuarios/:id', controller.deleteUsuarioById);
router.post('/usuarios', controller.addUsuario);

export = router;
