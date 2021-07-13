class Building{
  constructor()
  {
    this.height=10;
    this.position=1;    
    this.yPosition=390;
    this.width=25;
    this.floors=10;
    
    //Cada piso (floor) tiene aproximadamente 12 pies de altura.
    //Si un edificio tiene 3 pisos, tendría entonces 3*12=36 pies de altura.
    this.building_height=this.floors*12;
    
  }  
  display()
  {
   this.height=this.floors*8;
   this.yPosition=395-(this.height);
    //this.xPosition=395-(this.height);
   this.xPosition=this.position*40;
   rect(this.xPosition,this.yPosition, this.width, this.height); 
  }  
  
}
