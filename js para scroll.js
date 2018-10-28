// JavaScript Document
$(document).ready(function(){



	$("#banner").css({"height":$(window).height() + "px"});



	var flag = false;

	var scroll;



	$(window).scroll(function(){

		scroll = $(window).scrollTop();



		if(scroll > 200){

			if(!flag){

				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});



				$("header").css({"background-color": "rgba(60, 60, 60, 0.73)"});

				flag = true;

			}

		}else{

			if(flag){

				$("#logo").css({"margin-top": "0px", "width": "400px","height":"80px"});



				$("header").css({"background-color": "transparent"});

				flag = false;

			}

		}





	});



});


		