function LoadLeveis() {
 this.current_level = 1;
 this.level_1 = [
    [4,4,4,4,4,4,4,4,4,4,4,4,4],
    [3,3,3,3,3,3,3,3,3,3,3,3,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,2,2,2,2,2,2,2,2,2,2,2,4],
    [5,5,5,5,5,5,5,5,5,5,5,5,5],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
  ]
}


LoadLeveis.prototype.getLevel = function(){
	return this.level_1;
}