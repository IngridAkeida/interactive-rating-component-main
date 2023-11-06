function submit() {

  let select = document.getElementById("info").value;

  let five = document.getElementById("five").value;
  let four = document.getElementById("four").value;
  let three = document.getElementById("three").value;
  let two = document.getElementById("two").value;
  let one = document.getElementById("one").value;

  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");

  select = '';

  if(!select){
    alert(`Please chose a button`);
  }else{

    page1.style.display = "none";
    page2.style.display = "block";

    if(five){
      five.innerHTML = `You selected ${} out of 5`;
    }
    if(four){
      four.innerHTML = `${}`;
    }
    if(three){
      three.innerHTML = `${}`;
    }
    if(two){
      two.innerHTML = `${}`;
    }
    if(one){
      one.innerHTML = `${}`;
    }

    select.innerHTML = `You selected ${select} out of 5`;
    
  }
  
}