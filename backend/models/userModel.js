import { pool } from '../config/db.js';
// Función crear usuario
export const crearUsuario = async (nombre, correo, contraseña, id_rol) => {
    const [result] = await pool.query(
        'insert into usuarios (nombre, correo, contraseña, id_rol) values (?, ?, ?, ?)',
        [nombre, correo, contraseña, id_rol]);
    return result.insertId;
};
// Función buscar usuario por correo

export const buscarUsuarioPorCorreo = async (correo) => {
    const [rows] = await pool.query(
        'select * from usuarios where correo = ?', [correo]
    );
    return rows[0]; // <-- Agrega este return
};
// Función obtener rol por id

export const ObtenerRolPorId = async (id_rol) => {
    const [rows] = await pool.query(
        'select nombre from roles where id = ?', [id_rol]
    );
    return rows[0]?.nombre;
}
