/**
 * Пометки: по стандарту диапозон будет равено от 0 до 100
**/

var Graphic = function(idCanvas) {
	this.canvas = document.getElementById(idCanvas);
	this.ctx = this.canvas.getContext("2d");
	if(this.canvas != null) {
		this.width = canvas.width;
		this.height = canvas.height;
	} else console.error("Error canvas not found");

	this.lineCtx = this.ctx;
	this.data = null;
	this.pointZero = (this.height/100)*10; // 10% от высоты канвас
	this.complPointZero = this.height - this.pointZero; // Просчитаное значение от 0
	this.range = 100; // Диапозон

	// Отрисовка первых(последних) amountValueX линий => 
	this.noAnimation_drawGraphicLine = function(data) {
		if(data == undefined) {console.error("Erorr data undefined");return;}
		//var complData = data[0].data.slice(data[0].data.length-this.amountValueX);
		var complData = data.slice(data.length-this.amountValueX); // Обязательно +1

		console.log(complData);
		
		this.lineCtx.beginPath();
		this.lineCtx.moveTo(0, this.complPointZero);
		for(var i=0; i < complData.length; i++) {
			this.lineCtx.lineTo((this.distanceAtAxisX*i), this.complPointZero - (complData[i].value*this.distanceAtAxisY));
			console.log(complData[i].value);
		}
		this.lineCtx.stroke();
	}
	
	// Отрисовываем линии оси x и y =>
	this.drawGraphicStart = function() {
		var ctx = this.ctx;
		ctx.beginPath();
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 1;

		// draw null =>
		ctx.moveTo(0, this.complPointZero);
		ctx.lineTo(this.width, this.complPointZero);

		// draw axis Y (Обязательно +1 делать)=>
		for(var i = 0; i < this.amountValueY+1; i++) {
			var y = this.complPointZero - ((this.distanceDrawValueAtAxisY*i) * this.distanceAtAxisY);
			//var y = ((this.distanceDrawValueAtAxisY*i) * this.distanceAtAxisY);
			ctx.moveTo(0, y);
			ctx.lineTo(this.width, y);

			// Убрать отрисовку текста здесь =>
			if(this.amountValueY == i)
				ctx.textBaseline="top";
			else 
				ctx.textBaseline="bottom"; 
			ctx.globalAlpha = 1;
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
		this.distanceAtAxisX = this.width / this.amountValueX;
		this.distanceDrawValueAtAxisY = this.range / this.amountValueY; // получение первого числа которое надо отрисовать как еденицу измерения

		this.drawGraphicStart();
		
		var dates = new Array();
		for(var i = 0; i < this.amountValueX+10;  i++) dates.push({timestamp: new Date().getTime(), value: Math.round(Math.random() * (100 - 0) + 0)});
		
		this.noAnimation_drawGraphicLine(dates);
		//this.noAnimation_drawGraphicLine(object.data);
	};

};