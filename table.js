function GenerateTable(){
    var getData=document.getElementById("number").value;
    var putData=document.getElementById("display");
    putData.innerHTML="";
    
    var i,temp;
    for(i=1;i<=10;i++){
        
         let newEle = document.createElement("li");
        
        newEle.innerHTML=getData*i;
        putData.appendChild(newEle);
        
    }
}