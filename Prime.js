function checkPrime(num){
    let factor=0;
    for(let i=2;i*i<=num;i++){
        if(num%i===0){
            factor++;
        }
        
    }
    if(factor===0){
        return true;
    }
    return false;
   
}