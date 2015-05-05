$( document ).ready(function() {



	$("#videoBtn").click(function(){
	$("video")[0].play();
	})
	console.log( "ready!" );

	var actionHover = function(){
		$('div aside tbody tr:even').addClass('zebra');
		$('#videoPlayer tbody tr').hover(function(){
			$(this).addClass('zebraHover');
		}, function(){
			$(this).removeClass('zebraHover');
		});
	};

	actionHover();
  
/*
	function setArticle(){
		
		$("#videoPlayer").load("data/"+$(this).attr("id")+".html", function(){
			
			$('#videoPlayer tbody tr:even').addClass('zebra');
			
			$('#videoPlayer tbody tr').hover(function(){
				$(this).addClass('zebraHover');
			}, function(){
				$(this).removeClass('zebraHover');
			});	
		});
	}


 $(".navItem").click(setArticle);
 
*/
 
 var olay = $('<div class="overlay" />').appendTo(document.body).hide();
 var modal = $('<div class="modal" />').appendTo(document.body).hide();
 	
 	var openmodal = function(){
 		olay.add(modal).show().css({opacity:0});
 		olay.animate({opacity:.8});
 		modal
 			/*
.css({
	 			top: $(window).height()/2 - modal.outerHeight()/2 + $(window).scrollTop(),
	 			left: $(window).width()/2 - modal.outerWidth()/2 + $(window).scrollLeft()
 			})
*/
 			.animate({opacity:1});
 	};
/*
 	var movemodal = function(){
	 	modal
	 		.stop(true)
 			.animate({
	 			top: $(window).height()/2 - modal.outerHeight()/2 + $(window).scrollTop(),
	 			left: $(window).width()/2 - modal.outerWidth()/2 + $(window).scrollLeft()
 			}, 300);
 	};
*/
 	
 	var closemodal = function(){
	 	olay.add(modal).animate({opacity:0}, function(){
	 		$('#video').remove();	
			$(this).hide(); 	
	 	})
 	};

  $(".navItem").on('click' , function(){
  	$('video')[0].pause();
  	openmodal();
  	$(".modal").load("data/"+$(this).attr("id")+".html", function(){
			
			actionHover();
		});
	return false;  
  });
  
  olay.on('click', closemodal);
  
  $(window).on('keyup', function(e){
	  if (e.which === 27 ){
		  closemodal();
	  }
  });
  
/* $(window).on('resize', movemodal);  */

  
});