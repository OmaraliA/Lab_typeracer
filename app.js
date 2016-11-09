$(document).ready(function(){
	$('a').click(function(event){
		$(this).removeClass('bold');
		event.preventDefault();
});

var  a =$('#paragraph').text().split('');
console.log(a);
var winner = $( '#winner');
var fail = $('#fail');
var i = $('#input');


i.keypress(function(e){
	var ok=false;
	var current  = String.fromCharCode(e.which);
	if (current==a[0]){
		ok=true;
		

		if (ok){

			a.shift();
			console.log(a);
			i[0].style.background = 'white';
			i.val('');

		}

	}
	else {
	
		i[0].style.background = 'red';
		fail.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
		event.preventDefault();
		
	

	}
	
	if (a.length == 0){
		winner.fadeIn('slow');
		console.log('Congrats, you are the winner!');
	
	}

	
});
});

