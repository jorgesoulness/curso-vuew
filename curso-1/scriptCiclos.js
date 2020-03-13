// Se define una variable para crear una nueva instancia e iniciar Vue JS
// objeto new Vue
const app = new Vue({
  el: '#appVue',
  // Objeto data
  data: {
    // Se agrega propiedad mensaje
    tituloSection: 'Ciclo de Vida de la instancia',
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
  }
})