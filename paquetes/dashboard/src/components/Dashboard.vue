<template>
  <h1>{{nombre}}  {{sumar()}}</h1>  
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
  }
  },
  methods: {
      sumar(){
        return this.precio + 1000
      }
  },
}
</script>

<style>

</style>
