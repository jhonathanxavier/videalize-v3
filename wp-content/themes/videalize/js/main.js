var videosHover = new Array();
var timerHover = new Array();

$(function(){

	var margemLB = 50;

	$('.menu li.item-mp').hover(function(){
		$(this).parent().addClass('over');
		$(this).addClass('inover');
	}, 
	function(){
		$(this).parent().removeClass('over');
		$(this).removeClass('inover');
	});


	$('.submenu li').hover(function(){
		$(this).parent().addClass('over');
		$(this).addClass('inover');
	}, 
	function(){
		$(this).parent().removeClass('over');
		$(this).removeClass('inover');
	});

	// $('.item-dir').hover(function(){
	// 	var hMenu  = $(this).find('.submenu').height();
	// 	console.log(hMenu);
	// 	$(this).height(hMenu);
	// }, function(){
	// 	$(this).height(0);
	// });

	$('.lk-sf').hover(function(){

		
		$(window).unbind('mouseup');
		$('header .contato').removeClass('aberto');
		$('header .contato').unbind('mouseup');

		$('#menu-recolhido .contato').removeClass('aberto');
		$('#menu-recolhido .contato').unbind('mouseup');

	}, function(){});

	$(window).scroll(function(){
		$('.submenu').addClass('fechado');

		setTimeout(function(){ 
			$('.submenu').removeClass('fechado');
		}, 200);

		if( document.documentElement.clientWidth > 740 ){
			$('header .contato').removeClass('aberto');
			$('#menu-recolhido .contato').removeClass('aberto');
		}

		if( $(window).scrollTop() >  200 ){
			$('#menu-recolhido').addClass('aberto');
		}else{
			$('#menu-recolhido').removeClass('aberto');
		}

	});


	//Scroll do menu e voltar ao topo
	$('.link-scroll').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		var pos = $($(this).attr('href')).offset().top - 64;	
		$('html, body').animate({scrollTop: pos}, 500);
		

		$('#bt-menu-m').removeClass('fechar');
		$('#menu-recolhido').removeClass('visivel');
	});

	$('.link-contato-p').click(function(){
		
		$('header .contato').toggleClass('aberto');
		$(window).mouseup(function(e){
			$(window).unbind('mouseup');
			$('header .contato').removeClass('aberto');
		});

		$('header .contato').mouseup(function(e){
			e.stopPropagation();
			e.preventDefault();
		});
	});

	$('.link-contato-f').click(function(){
		
		if( !$('#menu-recolhido .contato').hasClass('aberto') ){
			$('#menu-recolhido .contato').addClass('aberto');
			$('.ct-menu-rec').addClass('fechado');
		}else{
			$('#menu-recolhido .contato').removeClass('aberto');
		}
		

		$(window).mouseup(function(e){
			if( document.documentElement.clientWidth > 740 ){
				$(window).unbind('mouseup');
				$('#menu-recolhido .contato').removeClass('aberto');
			}
		});

		$('#menu-recolhido .contato').mouseup(function(e){
			e.stopPropagation();
			e.preventDefault();
		});

	});



	$(window).bind('hashchange', function(){
		var video = window.location.hash;
		video = video.split('=');
		if(video.length > 1){
			video = video[1];

				if( document.documentElement.clientWidth > 740 ){

					var maxW = $(window).width() - ( 2 * margemLB );
					var maxH = $(window).height() - ( 2 * margemLB );

					var resH = maxW * 0.5625;
					var resW = maxH * 1.777777777777778;

					var finW = 0;
					var finH = 0;

					if(resH <= maxH){
						
						finW = maxW;
						finH = resH;

					}else if(resW <= maxW){

						finW = resW;
						finH = maxH;

					}else{

						finW = $(window).width() / 2 ;
						finH = finW * 0.5625;

					}



					var htmlVideo = '';
					htmlVideo += '<div id="lightbox" class="lightbox">';
					
					htmlVideo += '<div class="ct-video" style="width: '+finW+'px; height: '+finH+'px">';
					htmlVideo += '<a class="bt-fechar image">Fechar</a>';
					htmlVideo += '<iframe src="https://player.vimeo.com/video/'+video+'?autoplay=1&title=0&byline=0&portrait=0&muted=0" width="640" height="360" frameborder="0" title=" " allow="autoplay; fullscreen" allowfullscreen></iframe>';
					
					htmlVideo += '</div>';
					htmlVideo += '</div>';

					$('body').append(htmlVideo);
					setTimeout(function(){ 
						$('#lightbox').addClass('aberto');
					}, 100);

					setTimeout(function(){ 

						$(window).click( function(){

							$(window).unbind('click');
							$('#lightbox .ct-video').unbind('click');
							$(document).unbind('keyup');

							$('#lightbox').removeClass('aberto');
							setTimeout(function(){ 
								$('#lightbox').remove();
								window.location.hash = '#fechar';
							}, 500);

						} );

						$('#lightbox .ct-video').click(function(e){
							e.preventDefault();
							e.stopPropagation();
						});

						$(document).keyup(function( event ) {
						  
						  if ( event.which == 27 ) {
						     	
						  	$(window).unbind('click');
						  	$('#lightbox .ct-video').unbind('click');
						  	$(document).unbind('keyup');

						  	$('#lightbox').removeClass('aberto');
						  	setTimeout(function(){ 
						  		$('#lightbox').remove();
						  		window.location.hash = '#fechar';
						  	}, 500);

						  }
						 
						});

					}, 500);

					$('.bt-fechar').click(function(){

						$(window).unbind('click');
						$('#lightbox .ct-video').unbind('click');
						$(document).unbind('keyup');

						$('#lightbox').removeClass('aberto');
						setTimeout(function(){ 
							$('#lightbox').remove();
							window.location.hash = '#fechar';
						}, 500);
						

					});
			}else{

				var htmlVideo = '';
				htmlVideo += '<div id="lightbox" class="lightbox">';
				
				htmlVideo += '<div class="ct-video">';
				htmlVideo += '<a class="bt-fechar image">Fechar</a>';
				htmlVideo += '<iframe src="https://player.vimeo.com/video/'+video+'?autoplay=1&title=0&byline=0&portrait=0&muted=0" width="640" height="360" frameborder="0" title=" " allow="autoplay; fullscreen" allowfullscreen></iframe>';
				
				htmlVideo += '</div>';
				htmlVideo += '</div>';

				$('body').append(htmlVideo);
				setTimeout(function(){ 
					$('#lightbox').addClass('aberto');
				}, 100);


				setTimeout(function(){ 
					$(window).click( function(){

						$(window).unbind('click');
						$('#lightbox .ct-video').unbind('click');
						$(document).unbind('keyup');

						$('#lightbox').removeClass('aberto');
						setTimeout(function(){ 
							$('#lightbox').remove();
							window.location.hash = '#fechar';
						}, 500);

					} );

					$('#lightbox .ct-video').click(function(e){
						e.preventDefault();
						e.stopPropagation();
					});

					$(document).keyup(function( event ) {
					  
					  if ( event.which == 27 ) {
					     	
					  	$(window).unbind('click');
						$('#lightbox .ct-video').unbind('click');
						$(document).unbind('keyup');

					  	$('#lightbox').removeClass('aberto');
					  	setTimeout(function(){ 
					  		$('#lightbox').remove();
					  		window.location.hash = '#fechar';
					  	}, 500);
					     	
					  }
					 
					});

				}, 500);

				$('.bt-fechar').click(function(){

					$(window).unbind('click');
					$('#lightbox .ct-video').unbind('click');
					$(document).unbind('keyup');
					
					$('#lightbox').removeClass('aberto');
					setTimeout(function(){ 
						$('#lightbox').remove();
						window.location.hash = '#fechar';
					}, 500);
					

				});

			}	

		}

		
	});

	$(window).trigger('hashchange');

	$(window).resize(function(){

		if( $('.topo').hasClass('mobile') && document.documentElement.clientWidth > 740 ){

			window.location.reload();

		}

	});


	$('#bt-menu-m').click(function(){

		

		if ( !$('#menu-recolhido').hasClass('visivel') ){
			$(this).addClass('fechar');
			$('#menu-recolhido').addClass('visivel');
		}else{
			$(this).removeClass('fechar');
			$('#menu-recolhido').removeClass('visivel');
			$('#menu-recolhido .contato').removeClass('aberto');
			$('.ct-menu-rec').removeClass('fechado');
		}

		

	});



	$('#work a.temvid').hover(function(){

		if( document.documentElement.clientWidth > 740 ){

			var vidN = $(this).attr('data-video');
			var vidI = $(this).attr('data-ini');
			var vidD = $(this).attr('data-duracao');
			var vidNum = $(this).attr('data-num');

			var vidIni = vidI != '' ? '#t='+vidI+'s' : '';

			console.log( 'over num:' + vidNum );

			if( $(this).find('.hover-vid iframe').length > 0 ){

				videosHover[ vidNum ].play();

				

			}else{

				var htmlVid = '<iframe src="https://player.vimeo.com/video/'+vidN+'?background=1&autopause=0&quality=540p'+vidIni+'" width="640" height="360" frameborder="0" title=" " allow="autoplay; fullscreen" allowfullscreen></iframe>';

				$(this).find('.hover-vid').html(htmlVid);

				var iframe = $(this).find('.hover-vid iframe');
				videosHover[ vidNum ] = new Vimeo.Player(iframe);

				videosHover[ vidNum ].on('play', function(a) {
				 	this.off('play');
					
				 	var num = [].indexOf.call(videosHover, this);

				 	$('#work a.temvid[data-num="'+num+'"]').addClass('carregado');				

				 	

				  
				});

			}

		
		}	
		

	}, function(){

		if( document.documentElement.clientWidth > 740 ){

			var vidN = $(this).attr('data-video');
			var vidI = $(this).attr('data-ini');
			var vidD = $(this).attr('data-duracao');
			var vidNum = $(this).attr('data-num');

			console.log( 'out num:' + vidNum );
			
			clearTimeout(timerHover[vidNum]);
			timerHover[vidNum] =  setTimeout(function(){ 
				console.log( 'reseta num:' + vidNum );
				var iniVid = vidI != '' ? vidI : 0;
				videosHover[ vidNum ].pause();
				videosHover[ vidNum ].setCurrentTime(iniVid);

			}, 500 );

		}	

	});



});