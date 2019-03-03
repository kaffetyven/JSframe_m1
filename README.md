# JSframe_m1
A simple jQuery carousel

General information:
A simple carousel, just include your own images within the divs with the class of: carousel__slide.
The plugin now has 3 placeholder slides to show how it works and how its built.

Note: You should know html to build this into your own projects. 

How to use this plugin:

Step 1, include the following html within the Head tag in your html file:
  <link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="script.js" defer></script>

Step 2, include the following html within the body in your html file:
<div class="[ carousel ]">	  
		<div class="[ dot__container ]">			
		</div>
		<div class="[ control --left ]">
			<div class="[ glyphicon glyphicon-chevron-left ]"></div>
		</div>
		<div class="[ control --right ]">
			<div class="[ glyphicon glyphicon-chevron-right ]"></div>
		</div>		
		<div class="[ slide__container ]"> <!-- Please store slides in this container-->
			<div class="[ carousel__slide ]">
				<img src="https://via.placeholder.com/900x300/FF0000/FFFFFF">	
			</div>
			<div class="[ carousel__slide ]">
				<img src="https://via.placeholder.com/900x300/000000/FFFFFF">	
			</div>
			<div class="[ carousel__slide ]">
				<img src="https://via.placeholder.com/900x300/0000FF/FFFFFF">	
			</div>
		</div>
</div>
