Tras revisar los tutoriales (sobre todo el último, comentado por los compañeros):

http://reactivex.io/learnrx/
https://medium.com/@nomanbinhussein/getting-started-with-ngrx-5cec2788b25f
https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc

Las primeras impresiones con NgRX han sido las siguientes:

- La curva de aprendizaje es muy dura, ya que no estamos acostumbrados a trabajar con patrones de diseño y tampoco con observables
- Existen muchos caminos para llegar al mismo resultado, lo cual provoca que la documentación sea dispar y poco alineada
- Finalmente he logrado entender que debe existir un store donde se guarda el estado de la aplicación
- Puede haber varios mini stores donde se guarda el estado (por ejemplo, uno para los usuarios, otro para la configuración, etc)
- Para transformar un store lo haremos mediante reducers, que son funciones puras
- La llamada al reducer se hace mediante dispatch desde un componente
- Puede haber un side effect que no modifica el store, se suele usar para consultar los servicios, conexiones http, etc.
- Las acciones determinan si tenemos que realizar una operación u otra
- Por último, en el componente nos podemos suscribir mediante un selector a los cambios en el store

La mayor duda que me surge es si hay que vincular siempre los atributos a un selector, por ejemplo:

user = this._store.pipe(select(selectUser));

O bien, si es suficiente con cargarlas en el constructor al principio:

const user$ = this._store.pipe(select(selectUser));
user$.subscribe(usuario => {
this.user = usuario;
}) 

También incluyo en el directorio raíz del repositorio las capturas de pantalla de DevTools que me han ayudado a debuggear dándome visibilidad del estado del store.