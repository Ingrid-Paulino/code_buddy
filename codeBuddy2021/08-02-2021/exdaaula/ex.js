var vetor = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

for(var i=0;i<20;i++){
    console.log(vetor[i]);
}

for(var i=0;i<20;i++){
    vetor[i]=i+1;
    console.log(vetor[i]);
}

for(var i=0;i<20;i++){
    if(i%2==0){
        vetor[i]=vetor[i]*10;
    }
    
    console.log(vetor[i]);
}