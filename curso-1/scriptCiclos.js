// Se define una variable para crear una nueva instancia e iniciar Vue JS
// objeto new Vue
new Vue({
  el: '#appVue',
  // Objeto data
  data: {
    // Se agrega propiedad mensaje
    tituloSection: 'Ciclo de Vida de la instancia',
    mensaje: 'Hola mundo'
  },
  // los metodos de los ciclos van fuera methods
  beforeCreate: function() {
    console.log('Se ejecuta - beforeCreate');
  },
  created: function() {
    console.log('Se ejecuta - created');
  },
  beforeMount: function() {
    console.log('Se ejecuta - beforeMount');
  },
  mounted: function() {
    console.log('Se ejecuta - mounted');
  },
  beforeUpdate: function() {
    console.log('Se ejecuta - beforeUpdate');
  },
  updated: function() {
    console.log('Se ejecuta - updated');
  },
  beforeDestroy :function() {
    console.log('Se ejecuta - beforeDestroy');
  },
  destroyed: function() {
    console.log('Se ejecuta - destroyed');
  },
  // Se crean un nuevo metodo para el DOM (Para destruir la instancia) destruir().
  methods: {
    destruir: function() {
      // El sign ($) es para decirle a Vue que no es un metodo creado por nosotros.
      this.$destroy();
    },
    texto: function() {

    }
  }
})