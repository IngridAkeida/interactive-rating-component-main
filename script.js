function submit() {
  let select = document.getElementById("info").value;

  let button = document.querySelector('button');

  const numberButtons = document.querySelectorAll('input[name="rateSelected"]');

  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");

  button.addEventListener("click", () => {

    let selected;

    for (const numberButton of numberButtons) {
        if (numberButton.checked) {
          selected = numberButton.value;
          break;
        }
    }
    // show the output:
    if(selected = true){

      page1.style.display = "none";
      page2.style.display = "block";
      select.innerHTML = `You selected ${selected} out of 5`;

    } else {
      alert(`Please chose a button`);
    }
    /*select.innerText = selected ? 
    
    `You selected ${selected}` : 
    `You haven't selected any size`;*/
});

  /*
  let five = document.getElementById("five").value;
  let four = document.getElementById("four").value;
  let three = document.getElementById("three").value;
  let two = document.getElementById("two").value;
  let one = document.getElementById("one").value;

  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");

  let valueRate = '';




  if(button == ''){
    alert(`Please chose a button`);
  }else{

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
    
  }*/
  
}