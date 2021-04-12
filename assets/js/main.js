Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    disks: [],
    genreFilter: '',
    genreOptions:[],
    orderDesc: true

  },
  mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
       .then((result) => {
         this.disks = result.data.response;

       this.disks.forEach((disk) => {
         if(!this.genreOptions.includes(disk.genre)) {
           this.genreOptions.push(disk.genre);
         }
       });

      });


  },
  methods:{
    yearSort: function () {
        this.orderDesc = !this.orderDesc;
        if (this.orderDesc) {
          this.disks.sort((a, b) => b.year - a.year);
          }else {
            this.disks.sort((a, b) => a.year - b.year);
          }

  }

  }
});
