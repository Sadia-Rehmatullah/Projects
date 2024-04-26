let length;
let width;
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    
let area = length * width;
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

 //practise task

 let amount1, amount2, amount3;
 amount1 = parseFloat(document.getElementById('item1').value);
 console.log("item1", amount1);
 amount2 = parseFloat(document.getElementById('item2').value);
 amount3 = parseFloat(document.getElementById('item3').value);

 function calculateAmount(amount1,amount2,amount3)
 {
   let total = amount1 + amount2 + amount3;
   document.getElementById('result').innerText = `The total amount is: ${total}`;
 }