<template>
  <div id="app">
    <Header />
    <h1>Reclist</h1>
    <!--<div v-for="data in allData" :key="data.u_id">
      <h1> {{ data.u_lastname }} </h1>
      <p> {{ data.u_firstname }} </p>
    <div>-->
    <div id="table">
      <b-table striped hover :items="allData"></b-table>
    </div>
    <b-button @click="fetchAllData" variant="success"> Moje data </b-button>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Header
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
.btn {
  margin: 10px 10px;
}
</style>
