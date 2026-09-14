import type { Rol } from "./types/Rol"

import {
  obtenerSesion
} from "./utils/auth"


export const protegerRuta = (rolPermitido: Rol): void => {

  const usuario = obtenerSesion()


  if (!usuario) {

    window.location.href =
      "/src/pages/auth/login/login.html"

    return
  }


  if (usuario.role !== rolPermitido) {

    if (usuario.role === "admin") {

      window.location.href =
        "/src/pages/admin/admin.html"

    } else {

      window.location.href =
        "/src/pages/client/client.html"
    }
  }
}