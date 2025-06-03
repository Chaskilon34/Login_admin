import { pool } from '../config/db.js';
export async function verificarRol(req, res, next) {
    try {
        const { correo, rol} = req.body;
        if (!correo || !rol) {
            return res.status(400).json({ message: 'Correo y rol son requeridos' });
        }
        const { result } = await pool.query(
            'select * from usuarios where correo = ? and id_rol = ?', [correo, rol]
        );
        if (result.length === 0) {
            return res.status(403).json({ message: 'Acceso no atorizado: Rol incorrecto' });
        }
        next();
    } catch (error) {
        console.error('Error en auth middleware:', error);
        res.status(500).json({ message: 'Error del servidor al verificar el rol'});
    }
}