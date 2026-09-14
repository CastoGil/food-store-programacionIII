import type { IUser } from "../types/IUser"

const USERS_KEY = "users"
const USER_DATA_KEY = "userData"


export const obtenerUsuarios = (): IUser[] => {
  const usuariosGuardados = localStorage.getItem(USERS_KEY)

  if (!usuariosGuardados) {
    return []
  }

  return JSON.parse(usuariosGuardados) as IUser[]
}


export const guardarUsuarios = (usuarios: IUser[]): void => {
  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(usuarios)
  )
}


export const guardarSesion = (usuario: IUser): void => {
  localStorage.setItem(
    USER_DATA_KEY,
    JSON.stringify(usuario)
  )
}


export const obtenerSesion = (): IUser | null => {
  const usuarioGuardado = localStorage.getItem(USER_DATA_KEY)

  if (!usuarioGuardado) {
    return null
  }

  return JSON.parse(usuarioGuardado) as IUser
}


export const cerrarSesion = (): void => {

  const usuarioActual = obtenerSesion()

  if (usuarioActual) {

    const usuarios = obtenerUsuarios()

    const usuario = usuarios.find(
      (usuario) => usuario.email === usuarioActual.email
    )

    if (usuario) {
      usuario.loggedIn = false
      guardarUsuarios(usuarios)
    }
  }

  localStorage.removeItem(USER_DATA_KEY)
}

export const existeEmail = (email: string): boolean => {
  const usuarios = obtenerUsuarios()

  return usuarios.some(
    (usuario) => usuario.email === email
  )
}
// Crea un administrador inicial si no existe ninguno 
// ya que no se puede registrar un administrador desde la interfaz de usuario. 
// Esto asegura que siempre haya al menos un administrador en el sistema.

export const crearAdminInicial = (): void => {

  const usuarios = obtenerUsuarios()

  const existeAdmin = usuarios.some(
    (usuario) => usuario.role === "admin"
  )

  if (existeAdmin) {
    return
  }

  const admin: IUser = {
    id: Date.now(),
    email: "admin@foodstore.com",
    password: "admin123",
    loggedIn: false,
    role: "admin"
  }

  usuarios.push(admin)

  guardarUsuarios(usuarios)
}