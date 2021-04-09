Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    disks: []
  },
  mounted(){
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
       .then((result) => {
         this.disks = result.data.response;
      });

    }
  },

});
