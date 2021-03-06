var dim; 
var cellArray;
var pink; 

$(document).ready(function() {
    dim = 55; 
    pink  = "#F1C4BE"; 

	initCells(dim);
	$('#start').click(
		function() {
			update(dim); 
		}
	);
	$('#clear').click(
		function() {
			$('div.cell').css("background-color", "white");
		}
	);
}); 


function initCells (dim) {
    cellArray = [];

	if (dim < 0) dim = 0;
    else if (dim > 70) dim = 90;
    var len = 750 / dim;
    for (var i = 0; i < dim; i++) {
    	if (!cellArray[i]) cellArray[i] = [];
        for (var k = 0; k < dim; k++) {
        	var str = "<div class=\"cell\" id=\""+i+"," +k+"\" style=\"width:" + len + "px;height:" + len + "px;\" />";
        	$("#environment").append(str);
        	cellArray[i][k] = 0; 
        }
    }

    $('div.cell').hover(function () {
    		$(this).css("background-color", pink);
    	}
    );
}


function update (dim) {

    for (var i = 0; i < dim; i++) {
        for (var k = 0; k < dim; k++) {
        	var element = document.getElementById(i+"," +k);

        	var backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color'); 
        	if (backgroundColor == 'rgb(255, 255, 255)') {
        		cellArray[i][k] = 0;  
        	} else {
        		cellArray[i][k] = 1;  
        	}      	
        }
    }

	for (var i = 0; i < dim; i++) {
        for (var k = 0; k < dim; k++) {
        	var liveCells =0 ;

        	if (i-1 >= 0) {
                if (cellArray[i-1][k] == 1) {liveCells++;}
        		if (k-1 >= 0) {if (cellArray[i-1][k-1] == 1) liveCells++;}
        	}
        	if (i+1 < dim) {
                if (cellArray[i+1][k] == 1) {liveCells++;}
        		if (k+1 <dim) {if (cellArray[i+1][k+1] == 1) liveCells++;}
        	}
        	if (k-1 >= 0) {
        		if (cellArray[i][k-1] == 1) {liveCells++;}
        		if (i+1 <dim) {if (cellArray[i+1][k-1] == 1) liveCells++;}
        	}
        	if (k+1 <dim) {
        		if (cellArray[i][k+1] == 1) {liveCells++;}
        		if (i-1 >=0) {if (cellArray[i-1][k+1] == 1) liveCells++;}
        	}

            var element = document.getElementById(i+"," +k);

            if (cellArray[i][k] == 1) {
                if (liveCells == 2 || liveCells == 3) {
                    element.style.backgroundColor=pink;
                } else {
                    element.style.backgroundColor="white";
                }
            } else {
                if (liveCells == 3 ) {
                    element.style.backgroundColor=pink;
                } else {
                    element.style.backgroundColor="white";
                }
            }

        }
    }

	setTimeout(function() {update(dim);}, 100); 
}