
setInterval(type2,9000);
//type2()



      function type2(){
       let a = new TypeIt("#myElement", {
        speed: 200,
       
        
      })

        a.type(() => story[Math.floor(Math.random()*story.length)] , { delay: 1000 })
       
        a.delete()

        a.type(() => story[Math.floor(Math.random()*story.length)] , { delay: 1000 })
       
        a.go();

         a.destroy()

        return;

       //a.is(console.log());


    }




function type3(){
 
  new TypeIt('#myElement', {
    strings: ' disappear.',
    speed: 50, 
    afterComplete: function (step, instance) {
     destroy();
    }
  }).go();

  }
   
