$(document).ready(function(){
    $('a').click(function(event){
        console.log(this,this.hash)
      if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          smoothscroll: $(hash).offset().top
        },800,function(){
          window.location.hash = hash
        })
      }
    })
  })

  $(document).ready(function(){
    $('a[href="#"]').click(function(event){
        console.log(this,this.hash)
      if(this.hash !== ""){
        event.preventDefault();
        var destino = this.hash;
        $('html, body').animate({
          smoothscroll: $(destino).offset().top
        },800,function(){
          window.location.destino = destino
        })
      }
    })
  })