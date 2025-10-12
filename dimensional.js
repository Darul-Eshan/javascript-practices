var points = [1, 2, 3, 4, 5];
function hights_points(points){
var max=points[0];
for( var x=1; x<points.length; x++){
    if(max<x){
        max=points[x];
    }
}
return max;
}
hights_points(points);
console.log("Hights points is: "+hights_points(points));

