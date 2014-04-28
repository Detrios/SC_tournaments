var ctx; // context du canvas, les methodes passeront par ça
var t; // interval de raffraichissement, peut etre killé par : clearInterval(t);
var refresh = 1/30; // 30 fps
var cursor ={x:0,y:0}; // défini un objet nommé cursor ayant 2 methode : x et y
var position  ={x:0,y:0};
var TO_RADIANS = Math.PI/180; 
var angle = angle2 = angle3 = 0;
var direction = 0;
var path = new Array();
var temp_path='';