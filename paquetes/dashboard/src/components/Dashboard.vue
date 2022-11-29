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
    <button v-on:click="saludar('Pedro',$event)">hi</button>
    <div class="myDiv" v-bind:class=claseDinamica @click="this.active = !this.active">
      activo?:{{active}}
    </div>

    <template v-if="contador > 0">
      <p>{{contador}}</p>
    </template>
    <p v-else>valor cero</p>

    <button v-on:click="addPersona()">persona</button>
    <button v-on:click="getPersonas()">personas</button>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
  export default {
    setup(){ 
        },
    data() {
      return{
        nombre: "holanda q talca",
        precio:1500,
        apellido:"luLIn",
        contador:0,
        active:false,
    }
    },
    methods: {
        sumar(){
          return this.precio + 1000
        },
        saludar(nombre, e){
          alert("hi " + nombre)
          console.log(e);
          this.contador= 0
        },
        nombreFormateadoMetodo(){
          return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1).toLocaleLowerCase() + " " + Date.now()
        },
        addPersona(){
          const persona= {
            name:"julin",
            job:"jobin"
          }
          axios.post('https://reqres.in/api/users', persona)
          .then(res => console.log(res))
          .catch(error => console.log(error))
        },
        getPersonas(){
        const personas = ref([]);         
        axios.get('https://reqres.in/api/users')
          .then(res => {
           for (const id in res.data.data){
              personas.value.push({
                id:  res.data.data[id].id,
                email: res.data.data[id].email,
                avatar:res.data.data[id].avatar
              })
            }
            console.log(personas.value);
          })
          .catch(error => console.log(error))
        },
    },
    computed: {
      nombreCompleto:function(){
        return this.nombre + " " + this.apellido
      },
      nombreFormateado(){
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1).toLocaleLowerCase() + " " + Date.now()
      },
      claseDinamica(){
        return this.active?"active":"noactive";
      }
    },
  }
</script>

<style>
  .myDiv{
    width: 180px;
    height: 60px;
    padding: 10px;
    text-align: center;
    line-height: 30px;
    margin: 10px;
  }
  .active{
    border: solid 3px #a01aa2
  }
  .noactive{
    border: solid 3px #555555
  }
</style>
