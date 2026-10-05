/* ============================================================
   CONFIGURACIÓN DEL CATÁLOGO
   Edita SOLO los valores entre comillas.
   ============================================================ */
window.CONFIG = {
  // ---------- ACCESO AL PANEL DE ADMINISTRADOR ----------
  // La contraseña NO se escribe aquí: solo su huella cifrada.
  // Para cambiar usuario/contraseña abre  generar-clave.html  en el sitio,
  // escribe tus datos y pega aquí las 3 líneas que te entrega.
 ADMIN_USUARIO: "administrador",
  ADMIN_SAL: '27244ff7df72af7258889f533a296065',
  ADMIN_CLAVE_HASH: 'ac80e434c9d2fbd37df5773fe7d46c441addcc59e589fbeb92e3b69cf057927b', 

  // Minutos que dura la sesión del administrador antes de pedir clave otra vez.
  SESION_MINUTOS: 120,

  // ---------- VALORES POR DEFECTO ----------
  // Se usan sólo si el catálogo publicado (data/catalogo.json) no trae "ajustes".
  // Desde el panel de administrador puedes cambiarlos sin tocar este archivo.
  NEGOCIO: 'Mi Catálogo',
  // Número de WhatsApp con indicativo de país, sin "+", espacios ni guiones.
  // Ejemplo Colombia: 573001234567
  WHATSAPP: '573000000000',

  // Productos que se muestran por "página" mientras el cliente hace scroll.
  PRODUCTOS_POR_PAGINA: 24
};
