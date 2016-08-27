//Designed and created by Mukul Jain

var strip = document.getElementById('bottom_strip');
var	leftx = document.getElementById('left');
var	rightx = document.getElementById('right');
var overlay = document.getElementById('overlay');


var k=0,j=0,r=0;

function pic_click(x)
{	
	x = x/5;
	show(x);
	return false;
}


var img = [];

for(i=0	; i<88; i++)
{
	var pic = "./pic/" + i + ".jpg";
	img.push(pic);
}


function dispImg()
	{
	width = screen.width*.96;
	var nunmber_of_imgs = 88;
	
	for(var i=0; i<=nunmber_of_imgs; i++)
	{
		strip.innerHTML += '<img src="' + img[i] + '" onclick=\'return show(this.id);\' id="' +i+'"\" />';		
	}
	i=0;
	
	return false;
}	



function img_next()
{
	// window.alert(addressx);
	if(j != img.length -1)
	{
		j++;
		k++;
	
		show(j);
	}
	return false;
}

function img_prev()
{
	if(j != 0)
	{
		j--;
		show(j);
	}
	
	return false;
}
	

function show(i)
{
	
	document.getElementById('overlay').style.display = 'block';
	
	imgs = document.getElementById('img_container');
	imgs.style.display = "none";
	var d = new Image();

	d.src = img[i];

	imgs.innerHTML = '<img src="' +  img[i] +'" class="animated fadeIn"  img_height="' + parseInt(0.85*d.height) + '" />';

	document.getElementById('close_btn').style.display = "block";
	
	leftx.style.display = "inline";
	rightx.style.display = "inline";



		
	var y = d.width/d.height;

	// window.alert(d.width)
	
	var height = window.screen.availHeight *.7;
	var width = y * height;

	if((width/window.screen.availWidth)>.7)
	{
		width = window.screen.availWidth * .7; 
	}

	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

	document.getElementById('img_container').style.left = (window.screen.availWidth-width)/2 + "px";
	document.getElementById('img_container').style.top  =  (window.screen.availHeight) * .10 + "px";

	// if(is_chrome)
	// {
	// 	document.getElementById('img_container').style.left = (window.screen.availWidth-width)/2 +80 + "px";
	// 	document.getElementById('img_container').style.top  =  (window.screen.availHeight) * .15 + "px";
	// }

	imgs.style.width = width + "px";
	imgs.style.height = height + "px";
	imgs.style.display = "inline";

	j= i;
	return false;
}


function close_gallery(){

	// window.alert("close");
	document.getElementById('img_container').style.display="none";
	document.getElementById('overlay').style.display="none";
	leftx.style.display = "none";
	rightx.style.display = "none";
	document.getElementById('close_btn').style.display = "none";
	return false;
}


document.onkeydown = function(e) {
    
	if(leftx.style.display == "inline")
	{
    switch (e.keyCode) {
        case 37:
            img_prev();
		    break;
        case 39:
            img_next();
            break;
         }
     }
    else
	{
    switch (e.keyCode) {
		case 40:
        	camera.position.z += 50;
        	// renderer.render( scene, camera );
		    break;
        case 38:
        	camera.position.z -= 50;
        	// renderer.render( scene, camera );        	
		    break;
         }
     }
     
};


document.onkeyup = function(e) {
    if (e.keyCode == 27) {
       close_gallery();
    }
};
