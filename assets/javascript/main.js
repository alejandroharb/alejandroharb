$(document).ready(function() {
	// materialize side navbar for mobile
	$(".button-collapse").sideNav();
	//index page quotes
	var quotes = [
	['"Enthusiasm is one of the most powerful engines of success. When you do a thing, do it with all your might. Put your whole soul into it. Stamp it with your own personality. Be active, be energetic and faithful, and you will accomplish your object. Nothing great was ever achieved without enthusiasm."',"Ralph Waldo Emerson"],
	['"Learn to ask of all actions, \'Why are they doing that?\' Starting with your own."', "Marcus Aurelius"],
	['"In any weather, at any hour of the day or night, I have been anxious to improve the nick of time; to stand on the meeting of two eternities, the past and future, which is precisely the present moment; to toe that line."', "Ralph Waldo Emerson"],
	['"Your mind will take shape of what you frequently hold in thought, for the human spirit is colored by such impressions."', "Marcus Aurelius"],
	['"They lose the day in waiting for the night"', "Seneca"],
	['"You\'re better off not giving the small things more time than they deserve."', "Marcus Aurelius"],


	];
	var i = 0;
	function showQuotes() {
			var quote = quotes[i][0];
			var author = quotes[i][1];
			$('#quotesDisplay').fadeIn("slow").html(quote);
			$('#author').html(author).fadeIn("slow");
			var out = setTimeout(function(){
				$('#quotesDisplay').fadeOut("slow");
				$('#author').fadeOut("slow");
			}, 8000);
			var next = setTimeout(function(){
				if(i == quotes.length-1){
					i = 0;
					showQuotes();
				} else {
					i++;
					showQuotes();
				};
			},9000);
	}
	//when window loads, run function that cycles through quote array to display quote stings
	$(window).load(showQuotes)
	
	//when window loads, the different content sections fade in one after the other
	$(window).load(function(){
		//front end fades in first with duration of 1 sec.
		$('#frontEnd').fadeIn(1000, function(){
			//when first fade-in finished, second content section fades in
			$('#backEnd').fadeIn(1000, function(){
				$('#analytics').fadeIn(1000);
			});
		});
		
		
	})

	//click event for "what I do" button
	$('#whatIDoBtn').on('click', function(){
		//Button Color Changes
			//removes orange color from other button
		$('#knowledgeBtn').removeClass('deep-orange darken-3');
			//add blue-grey button color to button NOT clicked
		$('#knowledgeBtn').addClass('blue-grey darken-1');
			//removes gray color from button clicked
		$(this).removeClass('blue-grey darken-1');
			//adds orange color to button clicked
		$(this).addClass('deep-orange darken-3');
		//Unhides container for "What I do"
		$('#whatIDoContent').fadeIn('slow');
		// Hides container for "Knowledge"
		$('#knowledgeContent').hide();
	})
	//click event for "areas of knowledge" button
	$('#knowledgeBtn').on('click', function(){
		//Button Color Changes
			//removes orange color from button NOT clicked
		$('#whatIDoBtn').removeClass('deep-orange darken-3');
			//add blue-grey button color to button NOT clicked
		$('#whatIDoBtn').addClass('blue-grey darken-1');
			//removes gray color from button clicked
		$(this).removeClass('blue-grey darken-1');
			//adds orange color to button clicked
		$(this).addClass('deep-orange darken-3');
		//Unhides container for "Areas of Knowledge"
		$('#knowledgeContent').fadeIn('slow');
		//Hides container for "What I do" 
		$('#whatIDoContent').hide();
	})

})