/* Copyright (c) 2009 Tobias Schneider <schneider@jancona.com> */

(function(){
	function load(file){
		var xhr = new XMLHttpRequest();
	    xhr.open("GET", file, false);
	    xhr.overrideMimeType("text/plain; charset=x-user-defined");
	    xhr.send(null);
	    if(xhr.status != 200){ throw new Error("Unable to load " + file); }
		return xhr.responseText;
	}
	
	C64 = {
		run: function(containerId){
			var container = document.getElementById(containerId);
			var charset = document.createElement("canvas");
			charset.width = 2048;
			charset.height = 8;
			ctx = charset.getContext("2d");
			ctx.fillStyle = "#4040e0";
			ctx.fillRect(0, 0, 2048, 8);
			ctx.fillStyle = "#a0a0ff";
			var data = load("char.rom");
			for(i = 0; i < 256; i++){
				for(var j = 0; j < 8; j++){
					var b = data.charCodeAt((i * 8) + j);
					for(var k = 0; k < 8; k++){
						if(b & 0x80){ ctx.fillRect((i * 8) + k, j, 1, 1); }
						b <<= 1;
					}
				}
			}
			var canvas = container.appendChild(document.createElement("canvas"));
			canvas.width = "320";
			canvas.height = "200";
			canvas.style.border = "35px solid #a0a0ff";
			canvas.style.background = "#4040e0";
			var ctx = canvas.getContext("2d");
			var worker = new Worker("_worker.js");
			
			worker.onmessage = function(e){
				var argv = e.data.split(' ');
				var cmd = argv.shift();
				var args = argv;
				switch(cmd){
					case 'l':
						console.log(args[0]);
						break;
					case 'v':
						var pos = args[0];
						var code = args[1];
						var dx = (pos % 40) * 8;
						var dy = parseInt(pos / 40) * 8;
						var sx = code * 8;
						var sy = 0;
						ctx.drawImage(charset, sx, sy, 8, 8, dx, dy, 8, 8);
						break;
				}
			}
			
			document.onkeydown = function(e){
				worker.postMessage("d " + e.keyCode);
				return false;
			}
			
			document.onkeyup = function(e){
				worker.postMessage("u " + e.keyCode);
				return false;
			}
			
			worker.postMessage('r');
		}
	};
})();
