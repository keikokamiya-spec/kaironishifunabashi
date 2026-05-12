function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_mouseout."))
			{
				var mouseoutSrc = images[i].getAttribute("src");
				var mouseoverSrc = mouseoutSrc.replace("_mouseout.", "_mouseover.");
				var preload = new Image();
				preload.onload = (function(image, over, out) {
					return function() {
						image.onmouseover = function() {
							this.setAttribute("src", over);
						}
						image.onmouseout = function() {
							this.setAttribute("src", out);
						}
					}
				})(images[i], mouseoverSrc, mouseoutSrc);
				preload.src = mouseoverSrc;
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}
