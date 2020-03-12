// Se define una variable para crear una nueva instanccia e iniciar Vue JS
// objeto new Vue
const app = new Vue({
  el: '#appVue',
  // Objeto data
  data: {
    // Se agrega propiedad mensaje
    mensaje: 'Hola mundo!',
    // Propiedad de imagen
    src: 'https://vuejs.org/images/logo.png'
  },
  methods: {
    // Se inician los metodos para recibir datos
    // Si se quiere mostrar datos de una propiedad mediante un
    // Método, se debe agregar this.nombre_propiedad
    mostrarMensaje: function() {
      return this.mensaje;
    }
  }
})