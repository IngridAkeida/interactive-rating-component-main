function submit() {

  let select = document.getElementById("info");
  let five = document.getElementById("five");
  let four = document.getElementById("four");
  let three = document.getElementById("three");
  let two = document.getElementById("two");
  let one = document.getElementById("one");
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");

  let number = {

  }

  select = '';

  if(!select){
    alert(`Please chose a button`);
  }else{
    
    page1.style.display = "none";
    page2.style.display = "block";

    if(five){
      five.innerHTML = `${}`;
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
    
  }
  
}