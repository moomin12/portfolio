$(document).ready(function(){
	var btn	= $('nav li'); // 위의 메뉴들을 변수 btn으로 

	btn.click(function(){
		var btn_num = $(this).index();			//클릭한 li가 몇번째 인지 찾아서 변수에 넣어준다. (0부터)
		console.log('지금 클릭한 버튼은? ' + btn_num);

		btn.find('a').removeClass('on');						//모든 li안의 a에 클라스를 없애준다
		btn.eq(btn_num).find('a').addClass('on');   //클릭한 li안의 a에 클라스를 넣어준다

	});  //btn.click END

	//갤러리 소트
		$('.thumb').isotope({
			  // options
			  itemSelector: '.grid-item',
			  layoutMode: 'fitRows'
		});

		var btn1 = $('nav ul li:nth-child(1)'); 
		var btn2 = $('nav ul li:nth-child(2)'); 
		var btn3 = $('nav ul li:nth-child(3)'); 
		var btn4 = $('nav ul li:nth-child(4)'); 
		var btn5 = $('nav ul li:nth-child(5)'); 

		btn1.click(function(){
			$('.thumb').isotope({ filter:'.all'});
		});
		btn2.click(function(){
			$('.thumb').isotope({ filter:'.app'});
		});
		btn3.click(function(){
			$('.thumb').isotope({ filter:'.co'});
		});
		btn4.click(function(){
			$('.thumb').isotope({ filter:'.brand'});
		});
		btn5.click(function(){
			$('.thumb').isotope({ filter:'.public'});
		});



//fancyBox gallery
$('.thumb a').lightbox({
   transitionEffect: "tube",
	   loop: true, 
});


  });      