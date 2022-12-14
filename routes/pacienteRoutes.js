import  express  from "express";
const router = express.Router()
import {agregarPaciente,
        obtenerPacientes,
        obtenerPaciente,
        actualizarPaciente,
        eliminarPaciente} from '../controllers/pacientes.Controllers.js'
import checkAuth from  '../middelware/authMiddelware.js'  

router
    .route('/')
    .post(checkAuth,agregarPaciente)
    .get(checkAuth,obtenerPacientes)

router  
    .route('/:id')
    .get(checkAuth,obtenerPaciente)
    .put(checkAuth,actualizarPaciente)
    .delete(checkAuth,eliminarPaciente)




export default router;