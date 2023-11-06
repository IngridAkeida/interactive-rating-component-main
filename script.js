function submit() {
  let select = document.getElementById("info").value;

  const numberButtons = document.querySelectorAll('input[name="rateSelected"]');

  

  let five = document.getElementById("five").value;
  let four = document.getElementById("four").value;
  let three = document.getElementById("three").value;
  let two = document.getElementById("two").value;
  let one = document.getElementById("one").value;

  let button = document.getElementById("button").value;

  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");

  let valueRate = '';




  if(button == ''){
    alert(`Please chose a button`);
  }else{

    page1.style.display = "none";
    page2.style.display = "block";

    if(five){
      valueRate = five;
    }
    if(four){
      valueRate = four;
    }
    if(three){
      valueRate = three;
    }
    if(two){
      valueRate = two;
    }
    if(one){
      valueRate = one;
    }

    select.innerHTML = `You selected ${valueRate} out of 5`;
    
  }
  
}