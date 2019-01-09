playNo1 = function() {
	var videoPanel = document.getElementById('vid');
	videoPanel.innerHTML = '<iframe width="1120" height="630" src="https://www.youtube.com/embed/UnyLfqpyi94" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

playNo2 = function() { 
	var videoPanel = document.getElementById('vid');
	videoPanel.innerHTML = '<iframe width="1120" height="630" src="https://www.youtube.com/embed/txCCYBMKdB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

playNo3 = function() {
	var videoPanel = document.getElementById('vid');
	videoPanel.innerHTML = '<iframe width="1120" height="630" src="https://www.youtube.com/embed/DC_TrsY7U3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

$('.fav-button').on('click', function() {
   $(this).toggleClass('is-active');
});

$('.Minus_Btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp;gt; 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.Plus_Btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp;lt; 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});

