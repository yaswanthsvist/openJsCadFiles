// title: OpenJSCAD.org hallow Cube
// author: Yaswanth Malisetty 
// license: Creative Commons CC BY
// revision: 0.003
// tags: Logo,Intersection,Sphere,Cube

function main() {
    var i=0,sps=[],sp=CSG.sphere({radious:0.1,resolution:20}).scale(0.1);
    for(i=40;i>20;i--){
        sps.push(CSG.sphere({radious:0.1,resolution:20}).translate([i*4,(Math.PI)/Math.asin(1/i),0]).scale(0.1));
    }
    sp=sp.union(sps);
    return cubeShell();
}
var cubeShell=function(){
    var i,j,k,cubes=[],cube=stickCube();
    //cube=cube.union([cube.translate([0,0,1]),cube.translate([0,1,1]),cube.translate([0,1,0]),cube.translate([1,0,0]),cube.translate([1,1,0]).scale(1)]);
    for(i=0;i<5;i++){
    for(j=0;j<5;j++){
    for(k=0;k<5;k++){
        cubes.push(cube.translate([i,j,k]));
    }}}
    cube=cube.union(cubes);
    cube=cube.scale(1*2);                                                                             be=cube.union(cube.translate([10,0,0]));
    return cube.union(stickCube().scale(1*10));
}

var stickCube=function(){
 var stickCube=CSG.cylinder({radious:1,resolution: 4}).scale(0.01);
 var stick=CSG.cylinder({                      // object-oriented
  start: [0, 0, 0],
  end: [0, 10, 0],
  radius: 1,                        // true cylinder
  resolution: 4
 }).scale(0.1).rotateY(45);
 stickCube=stickCube.union([stick,stick.translate([1,0,0]),stick.rotateZ(270).translate([0,1,0]),stick.rotateZ(270) //bottom
                             ,stick.translate([0,0,1]),stick.translate([1,0,1]),stick.rotateZ(270).translate([0,1,1]),stick.rotateZ(270).translate([0,0,1]) //Top
                        ,stick.rotateX(90),stick.rotateX(90).translate([1,0,0]),stick.rotateX(90).translate([0,1,0]),stick.rotateX(90).translate([1,1,0])]);
 return stickCube;
}
