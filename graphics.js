/**
 * Пометки: по стандарту диапозон будет равено от 0 до 100
**/

var Graphic = function(idCanvas) {
	this.canvas = document.getElementById(idCanvas);
	if(this.canvas != null) {
		this.width = canvas.width;
		this.height = canvas.height;
	} else console.error("Error canvas not found");
	this.data = null;
	this.pointZero = (this.width/100)*10;
	this.range = 100; // Диапозон
	
	this.initGraphic = function(object) {
		this.distanceAtAxisY = (this.height - this.pointZero) / this.range; // Дистанция(промежуток) по оси Y
		this.distanceDrawValueAtAxisY = this.range / 5;
	}

}