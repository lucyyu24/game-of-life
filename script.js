$(document).ready(function() {
	initCells(50);
}); 


function initCells (dim) {
	if (dim < 0) dim = 0;
    else if (dim > 70) dim = 90;
    var len = 750 / dim;
    for (var i = 0; i < dim; i++) {
        for (var k = 0; k < dim; k++) {
        	var str = "<div class=\"cell\" id=\"" +i+"," +k+"\" style=\"width:" + len + "px;height:" + len + "px;\" />";
        	$("#environment").append(str);
        }
    }

    $('div.cell').hover (function () {
    		$(this).css("background-color", "#F1C4BE");
    	}
    )
}

function startGame() {
	update(); 
}

function update () {
	$('.cell').each(function() {
		
	});

	setTimeout(function() {update();}, 100);
}