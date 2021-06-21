class Cannon{
    constructor(x,y,width,height){
       this.x = x;
       this.y = y;
       this.width  = width;
       this.height = height;
    }
    display()
    {
        
        fill ("red")
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-15,-20,this.width,this.height)
        pop();  
        arc(this.x-35,this.y+80,150,200,PI , TWO_PI)
        noFill();


   
    }
}