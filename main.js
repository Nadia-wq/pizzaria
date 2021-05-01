pizza_array=[];
function submit(){
    var pizza_1=document.getElementById("pizza_1").value;
    var pizza_2=document.getElementById("pizza_2").value;
    var pizza_3=document.getElementById("pizza_3").value;
    var pizza_4=document.getElementById("pizza_4").value;
    var pizza_5=document.getElementById("pizza_5").value;
    pizza_array.push(pizza_1);
    pizza_array.push(pizza_2);
    pizza_array.push(pizza_3);
    pizza_array.push(pizza_4);
    pizza_array.push(pizza_5);
    document.getElementById("answer").innerHTML=pizza_array;


}
