function Level(rows, collumns, size) {
  this.SIZE = size;
  this.currente_level = [];
  this.cells = [];
  for (var r = 0; r < rows; r++) {
    this.cells[r] = [];
    for (var c = 0; c < collumns; c++) {
      this.cells[r][c] = 0;
    }
  }
}
this.loadImg;
this.debug = true;

Level.prototype. drawBackground = function(ctx, img){}

Level.prototype.drawGrid = function (ctx, loadImg) {
  this.loadImg = loadImg;
  this.setCells(this.currente_level);

  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {

      ///Chao simples;
      if(this.cells[r][c] == 1){  
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          if(debug){
            ctx.strokeStyle = "Red";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }

       ///Parede Horizontal    
      }else if(this.cells[r][c] == 2){
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_H"], c*this.SIZE, r*this.SIZE - (this.SIZE*0.75), this.SIZE, this.SIZE);// offset pra parede ficar na ponta do bloco
          if(debug){
            ctx.strokeStyle = "Green";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }


      ///Parede Vertical Alinhada a Direita do Piso  
      }else if(this.cells[r][c] == 3){
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_V"], c*this.SIZE + (this.SIZE*0.39), r*this.SIZE  - (this.SIZE * 0.5), this.SIZE, 2*this.SIZE); 
          if(debug){
            ctx.strokeStyle = "Green";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }


      ///Parede Vertical Alinhada a Esquerda do Piso    
      }else if(this.cells[r][c] == 4){
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_V"], c*this.SIZE - (this.SIZE*0.39), r*this.SIZE - (this.SIZE * 0.5), this.SIZE, 2*this.SIZE); 
          if(debug){
            ctx.strokeStyle = "Green";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }


       ///Esquina Direita Cima   
      }else if(this.cells[r][c] == 5){
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_H"], c*this.SIZE, r*this.SIZE - (this.SIZE*0.75), this.SIZE, this.SIZE);
          if(debug){
            ctx.strokeStyle = "Green";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }


       ///Esquina Esquerda Cima   
      }else if(this.cells[r][c] == 6){
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_H"], c*this.SIZE, r*this.SIZE - (this.SIZE*0.75), this.SIZE, this.SIZE);
         if(debug){
            ctx.strokeStyle = "Green";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }


      ///Esquina Direita Baixo    
      }else if(this.cells[r][c] == 7){
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_H"], c*this.SIZE, r*this.SIZE - (this.SIZE*0.75), this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_V"], c*this.SIZE + (this.SIZE*0.39), r*this.SIZE - (this.SIZE * 0.5), this.SIZE, 2*this.SIZE); 
          if(debug){
            ctx.strokeStyle = "Green";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }


      ///Esquina Esquerda Baixo  
      }else if(this.cells[r][c] == 8){
          ctx.drawImage(loadImg.images["Floor"], c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_H"], c*this.SIZE, r*this.SIZE - (this.SIZE*0.75), this.SIZE, this.SIZE);
          ctx.drawImage(loadImg.images["Wall_V"], c*this.SIZE - (this.SIZE*0.39), r*this.SIZE - (this.SIZE * 0.5), this.SIZE, 2*this.SIZE); 
           if(debug){
            ctx.strokeStyle = "Green";
            ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
          }



       ///Is Comming !!!   
      }else{
      };
    }
  }
};


Level.prototype.showInformations = function(ctx){
};

Level.prototype.setCells = function (newCells) {
  for (var i = 0; i < newCells.length; i++) {
    for (var j = 0; j < newCells[i].length; j++) {
      switch (newCells[i][j]) {
        case 1:
          this.cells[i][j] = 1;
          break;
        case 2:
          this.cells[i][j] = 2;
          break;
        case 3:
          this.cells[i][j] = 3;
          break;
        case 4:
          this.cells[i][j] = 4;
          break;
        case 5:
          this.cells[i][j] = 5;
          break; 
        case 6:
          this.cells[i][j] = 6;
          break; 
        case 7:
          this.cells[i][j] = 7;
          break; 
        case 8:
          this.cells[i][j] = 8;
          break; 
        default:
          this.cells[i][j] = 0;
      }
    }
  }
};