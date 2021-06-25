import { Injectable } from '@angular/core';


/**
 * clase que obtiene las rutas de los servicios web.
 * @author Emmanuel Ch&aacute;vez
 */
@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

   /** Ruta para obtener datos de perfil de usuario */
   public static readonly userProfile = "/82b8143c-f08a-4c55-b84f-05bc502d5c08";

   /** Ruta para obtener la lista de todos los productos */
   public static readonly allProducts = "/11f7165c-ea13-4ca6-8748-ca8bf94b5de5";
   
   /** Ruta para obtener informaci&oacute;n sobre el carrito de compras y pagos */
   public static readonly shoppingCart = "/b54da230-99a1-48a0-b826-9b2f50a2bbb7";
}
