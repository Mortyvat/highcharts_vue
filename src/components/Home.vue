<template>
  <div id="app">
    <div v-for="data in allData" :key="data.u_id">
      <h1> {{ data.u_lastname }} </h1>
      <p> {{ data.u_firstname }} </p>
    </div>
    <button @click="fetchUsers"> Click me!</button>
    <div v-for="user in users" :key="user.id">
      <h1> {{ user.name }} </h1>
      <p> {{ user.email }} </p>
    </div>
    <button @click="fetchAllData" variant="success"> Moje data </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      users: [],
      allData: [],
    }
  },
  methods: {
    fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    },
    fetchAllData:function(){  
      this.$http.get('https://192.168.0.143/highcharts_vue/highcharts_vue/app/api/action.php')
      .then((result) => {
        this.allData = result.data
      })
    }
  },
    /*methods:{
    /*
  },*/
  created: function(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
