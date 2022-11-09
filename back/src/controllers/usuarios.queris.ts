export const UsuarioQueries = {
    GetUsuarios: `
    select * from usuario u left join direccion d on u.id_usuario = d.usuario_id;
    `,
  
    GetUsuariosById: `
    select * from usuario u inner join direccion d on u.id_usuario = d.usuario_id WHERE id_usuario = ?;
    `,
  
    AddUsuario: `
    insert into usuario (id_usuario,nombre, apellido_paterno, apellido_materno)
      VALUES (?, ?, ?, ?);
    `,
  
    UpdateUsuarioById: `
    UPDATE usuario
    SET nombre = ?,
        apellido_paterno = ?,
        apellido_materno = ?
    WHERE
      id_usuario = ?
    `,
  
    DeleteUsuarioById: `
    DELETE FROM usuario
    WHERE
      id_usuario = ?
    `
  };