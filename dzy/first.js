
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var LEN = 200;
var x = 0;
var t;
window.onload = roll;
function roll() {
    var $col1 = document.getElementById("col1");
    var $col2 = document.getElementById("col2");

    var fun = function(){
        $col1.style.top = x + 'px';
        $col2.style.top = (x + LEN) + 'px';
        x--;
        if( (x + LEN) == 0 ){
            x = 0;
        }
    };
    t = setInterval(fun,200);
}
function select() {

    var xuan = document.getElementById('select');
	var new0 = document.createElement('div');
	var d = document.getElementById("body_box4_3_3");
	var old = d.childNodes[2];
	d.replaceChild(new0,old);
	new0.innerHTML =
	"<div style='color: #ff4d04;font-size: 12px;margin:0 0 0 10px;float: left;' id="+"body_box4_3_3_1>"+"￥"+xuan.value+"</div>";

}
