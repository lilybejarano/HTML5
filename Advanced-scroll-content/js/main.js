$(document).ready(function(){
  // setDebug();
   var alto = $(window).height();
   var ancho = $(window).width();
    if(alto > ancho){
        $("html").addClass("hz");
    }
   var controller = new ScrollMagic.Controller({});
    
    
    
    
    var tweenInit = new TimelineMax ()
		.add([
            TweenMax.fromTo("body", 0.5,  {backgroundColor: "#C6D169"}, {backgroundColor: "#C6D169"}),
            TweenMax.fromTo("#huevo", 0.5, {opacity: 0}, {opacity: 0}),
		])
    var sceneInit = new ScrollMagic.Scene({triggerElement: "#escena_0",
                                            offset: 0, 
                                            duration: alto/2  })
                .setTween(tweenInit)
				//.addIndicators() 
				.addTo(controller);    
    
    
    
    
/* escena establo */
   var sceneEstablo = new ScrollMagic.Scene({triggerElement: "#escena_1",
                                            offset: alto/3, 
                                            duration: alto * 1.5})
				.setPin("#establo")
				//.addIndicators() 
				.addTo(controller);
    
    
    
/* escena huevo */
    var tweenHuevo = new TimelineMax ()
		.add([
			TweenMax.fromTo("#huevo", 1, {x: -ancho/4}, {x: -ancho/2}),
            TweenMax.fromTo("#huevo", 0.5, {opacity: 0}, {opacity: 1}),
            TweenMax.fromTo("#pollo", 1, {x: -ancho/4}, {x: -ancho/2}),
            TweenMax.fromTo("#huevoBottom", 1, {x: -ancho/4}, {x: -ancho/2}),
            TweenMax.fromTo("#huevoTop", 1, {x: -ancho/4}, {x: -ancho/2}),
		]);
    var sceneTweenHuevo = new ScrollMagic.Scene({triggerElement: "#escena_2",
                                            offset: 0, 
                                            duration: alto/2 })
                .setTween(tweenHuevo)
				//.addIndicators() 
				.addTo(controller);
    var scenePinHuevo = new ScrollMagic.Scene({triggerElement: "#escena_2",
                                            offset: 0, 
                                            duration: alto * 2 })
				.setPin("#huevo")
				//.addIndicators() 
				.addTo(controller);
    
    
    
    /* escena huevo roto*/
    var scenePinHuevoRoto = new ScrollMagic.Scene({triggerElement: "#escena_3",
                                            offset: 0, 
                                            duration: alto*2.5 })
				.setPin("#huevoCombinado")
				//.addIndicators() 
				.addTo(controller);
    var tweenHuevoRoto = new TimelineMax ()
		.add([
            TweenMax.fromTo("#huevo", 1,  {opacity: 1}, {opacity: 0}),
            TweenMax.fromTo("#pollo", 1, {opacity: 0}, {opacity: 1, delay:1}),
            TweenMax.fromTo("#huevoBottom", 1,  {opacity: 0}, {opacity: 1}),
            TweenMax.fromTo("#huevoTop", 1,  {opacity: 0}, {opacity: 1}),
		])
        .add([
            TweenMax.fromTo("#huevoTop", 0.5,  {y: 0}, {y: -80}),
            TweenMax.fromTo("body", 0.5,  {backgroundColor: "#C6D169"}, {backgroundColor: "transparent"})
		]);
     var sceneTweenHuevoRoto = new ScrollMagic.Scene({triggerElement: "#escena_3",
                                            offset: alto/2, 
                                            duration: alto  })
				.setTween(tweenHuevoRoto)
				//.addIndicators() 
				.addTo(controller);
    
    
    
    /* escena pollo*/
    var tweenPollo = new TimelineMax ()
		.add([
              TweenMax.fromTo("#polloAnimado", 1,  {x: ancho}, {x: -200, delay:1})
		])
            
     var sceneTweenPollo = new ScrollMagic.Scene({triggerElement: "#escena_4",
                                            offset: 0, 
                                            duration: alto * 2  })
				.setTween(tweenPollo)
                .setPin("#polloAnimado")
				//.addIndicators() 
				.addTo(controller);
    
    
    
    /* escena carteles*/
    var tweenCarteles = new TimelineMax ()
		.add([
            TweenMax.fromTo("#camino", 1,  {x: -ancho*1.5}, {x: ancho, delay:0})
		])
    var scenePinCarteles = new ScrollMagic.Scene({triggerElement: "#escena_5",
                                            offset: 50, 
                                            duration: alto * 1  })
                .setTween(tweenCarteles)
                .setPin("#camino")
				//.addIndicators() 
				.addTo(controller);
    
    
    
    /* escena gallina Andando */
    var tweenGallina = new TimelineMax ()
		.add([
            TweenMax.fromTo("#gallinaAnimada", 1,  {x: ancho}, {x: -200})
		])
    var scenePinCarteles = new ScrollMagic.Scene({triggerElement: "#escena_6",
                                            offset: 0, 
                                            duration: alto  })
                .setTween(tweenGallina)
                .setPin("#gallinaAnimada")
				//.addIndicators() 
				.addTo(controller);

    
    
    
    /* escena gallina parada */
    var tweenFondo = new TimelineMax ()
		.add([
            TweenMax.fromTo("body", 0.5,  {backgroundColor: "transparent"}, {backgroundColor: "#C6D169"})
		])
    var scenePinCarteles = new ScrollMagic.Scene({triggerElement: "#escena_7",
                                            offset: 0, 
                                            duration: alto/2  })
                .setTween(tweenFondo)
				//.addIndicators() 
				.addTo(controller);
    
    
    
    
    
});


function setDebug(){
    $(window).scroll(function(evento){
        $("#debug").html($(window).scrollTop() + " - " + $(window).height());
    })
};
