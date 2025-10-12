var i=1; 

while(1<=20){
    if(i/3==0 && i/5==0){
        document.write(" "+i);
        sum=sum+i;
    }
    i++;
}
document.write(" "+ sum);