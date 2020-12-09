class Constraint{
     constructor(body1,body2,offsetX,offsetY)
     {
         this.offsetX=offsetX
         this.offsetY=offsetY
         var options={
             bodyA:body1,
             pointB:body2point,
             pointB:{x:this.offsetX,y:this.offsetY}
         }
         this.row=constraint.create(options)
            World.add(world,this.rope)
     }
    

}