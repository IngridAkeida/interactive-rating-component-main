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
    if(!selected){
      alert(`Please chose a button`);
    } else {
      page1.style.display = "none";
      page2.style.display = "block";
      select.innerHTML += `You selected ${selected} out of 5`;
    }
  }); 
}