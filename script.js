$(document).ready(function(){	//<- onload
	$(".carousel__slide:eq(0)").show(); // <- viser første slide
	if ($(".carousel__slide").length > 3){ // <- er det mer enn 3 slides så skjules dots
	 	$(".dot__container").hide();
	}else{ 
	 	for (i = 0; i < $(".carousel__slide").length; i++) { // <- lager Dots utifra hvor mange slides som finnes
		 	if (i==0) { // <- første dot er active
		 		$(".dot__container").append('<div class="[ dot --active ]"></div>')
		 	}else{
		 		$(".dot__container").append('<div class="[ dot ]"></div>')
		 	}	 		
	 	}
	}	 	
});

$(".--right").click(function(){ //<- onclick på ene karusell kontrollen
	//Blar fremover i dots
	var next = $(".carousel__slide:visible").next(); //neste slide 
	$(".carousel__slide:visible").hide(); //skjuler nåværende slide
	if (next.length == 0){ //looper tilbake til første slide om det ikke er fler
		next = $(".carousel__slide:first");
		next.show();
	}else{
		next.show();
	}
	var nextDot = $(".--active").next(); //neste dot
	$(".--active").removeClass("--active"); // fjerner active fra nåværende dot
	if (nextDot.length == 0 ){ //looper tilbake til første dot om det ikke er fler		
		nextDot = $(".dot:first");		
		nextDot.addClass("--active");
	}else {
		nextDot.addClass("--active");
	}
});

$(".--left").click(function(){
	//Blar bakover i slides.
	var prev = $(".carousel__slide:visible").prev();
	console.log(prev)	
	$(".carousel__slide:visible").hide();
	if (prev.length == 0){
		prev = $(".carousel__slide:last");
		prev.show();
	}else{
		prev.show();
	}
	//Bytter active på dots
	var prevDot = $(".--active").prev();
	$(".--active").removeClass("--active");
	if (prevDot.length == 0 ){
		console.log("match")
		prevDot = $(".dot:last");		
		prevDot.addClass("--active");
	}else {
		prevDot.addClass("--active");
	}
});