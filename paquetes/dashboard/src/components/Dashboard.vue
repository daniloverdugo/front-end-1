<template>
  <div>
    <h1>{{nombre}}  {{sumar()}}</h1>    
    <p>nombre <input type="text" v-model="nombre"></p>
    <p>apellido <input type="text" v-model="apellido"></p>

    <p>nombre: {{nombre}}</p>
    <p>apellido: {{apellido}}</p>
    <p>nombre completo: {{nombreCompleto}}</p>
    <p>nombre formato: {{nombreFormateado}}</p>
    <p>nombre formato método: {{nombreFormateadoMetodo()}}</p>

    <button v-on:click="contador += 1">clic</button>
    <p>has hecho {{contador}} clics</p>
  </div>
</template>

<script>
  import 'primevue/resources/themes/saga-blue/theme.css';
  import 'primevue/resources/primevue.css';
  import 'primeflex/primeflex.css';
  import 'primeicons/primeicons.css';

  export default {
    data() {
      return{
        nombre: "holanda q talca",
        precio:1500,
        apellido:"luLIn",
        contador:0,
    }
    },
    methods: {
        sumar(){
          return this.precio + 1000
        },
      nombreFormateadoMetodo(){
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1).toLocaleLowerCase() + " " + Date.now()
      },
    },
    computed: {
      nombreCompleto:function(){
        return this.nombre + " " + this.apellido
      },
      nombreFormateado(){
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1).toLocaleLowerCase() + " " + Date.now()
      },
    },
  }
</script>

<style>

</style>
