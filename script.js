new Vue({
  el: "#flashcards-app",
  data: {
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]//end card array
  },//end data
  methods:{
    
    flipper: function(){
      this.flipped = !this.flipped;
      console.log(this.flipped)
    },
    
  }//end methods
})// end vue