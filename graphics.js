/**
 * Пометки: по стандарту диапозон будет равено от 0 до 100
**/

var Graphic = function(idCanvas) {
	this.canvas = document.getElementById(idCanvas);
	this.ctx = this.canvas.getContext("2d");
	console.log(this.ctx);
	if(this.canvas != null) {
		this.width = canvas.width;
		this.height = canvas.height;
	} else console.error("Error canvas not found");
	this.data = null;
	this.pointZero = (this.height/100)*10; // 10% от высоты канвас
	this.complPointZero = this.height - this.pointZero; // Просчитаное значение от 0
	this.range = 100; // Диапозон
	
	// Отрисовываем линии оси x и y =>
	this.drawGraphicStart = function() {
		var ctx = this.ctx;
		ctx.beginPath();
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 1;
		// draw null =>
		ctx.moveTo(0, this.complPointZero);
		ctx.lineTo(this.width, this.complPointZero);
		// draw axis Y =>
		for(var i = 0; i < this.amountValueY; i++) {
			var y = this.complPointZero - ((this.distanceDrawValueAtAxisY*i) * this.distanceAtAxisY);
			ctx.moveTo(0, y);
			ctx.lineTo(this.width, y);

			ctx.textBaseline="bottom"; 
			ctx.fillText((this.distanceDrawValueAtAxisY*i), 0, y);
		}
		// draw axis X =>
		for(var i = 1; i < this.amountValueX; i++) {
			var x = this.distanceAtAxisX*i
			ctx.moveTo(x, this.complPointZero);
			ctx.lineTo(x, (this.complPointZero+10));
		}

		ctx.stroke();
	};

	this.initGraphic = function(object) {
		this.amountValueX = object.amountValueX;
		this.amountValueY = object.amountValueY;

		this.distanceAtAxisY = this.complPointZero / this.range; // Дистанция(промежуток) по оси Y
		this.distanceDrawValueAtAxisY = this.range / this.amountValueY; // получение первого числа которое надо отрисовать как еденицу измерения
		this.distanceAtAxisX = this.width / this.amountValueX;

		this.drawGraphicStart();
	};

}