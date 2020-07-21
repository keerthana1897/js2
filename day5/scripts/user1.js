let num=prompt("enter a positive number");
let pos=parseInt(num);
let arr=new Array();
for(let i=0;i<=pos;i++){
    arr.push(i);   
}
console.log(arr);
let newar=new Array();
newar=arr.filter(function(age) {
if(age%2!=0){
    return true;
}
});
console.log(newar);
for(let j=0;j<newar.length;j++){
    newar[j]=newar[j]*newar[j]*newar[j];
    
}
console.log(newar);