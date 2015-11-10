$(document).ready(function(){
	$('#button').on('click', function(e) {
		e.preventDefault();
		var number = +$('#userNumber').val();
		if (number % 1 ===0) {
			fizzbuzz(number);
		} else {
			$('span').append('Input must be an integer')
		}

	//clear entire list
	function clearAll() {
		$('p').remove();
	}

	$('.clear').on('click', clearAll);

	});
});	
	function fizzbuzz(n) {	
		for (var i = 1; i <= n; i++) {
	   		if (i%15===0) {
	   			$('#console').append('<p>' + 'Fizz Buzz' + '</p>');
	    	}

	   		else if (i%3===0) {
	   			$('#console').append('<p>' + 'Fizz' + '</p>');
	   		}

	   		else if (i%5===0) {
	   			$('#console').append('<p>' + 'Buzz' + '</p>');
	   		}

	   		else {
	   			$('#console').append('<p>' + i + '</p>');
	   		}
	   	}

	};

	


