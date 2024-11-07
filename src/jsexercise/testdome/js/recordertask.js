function initialize() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', event => {
        // Write your code here
        if (event.currentTarget.className === 'upButton'){
            const swaptext = event.currentTarget.previousSibling.textContent;
            const parenttext = event.currentTarget.parentNode.previousSibling.firstChild.textContent;
            event.currentTarget.parentNode.previousSibling.firstChild.textContent = swaptext;
            event.currentTarget.previousSibling.textContent = parenttext; 
        }else{
            const swaptext = event.currentTarget.previousSibling.textContent;
            if (event.currentTarget.parentNode.nextSibling){
                const parenttext = event.currentTarget.parentNode.nextSibling.firstChild.textContent;
                event.currentTarget.parentNode.nextSibling.firstChild.textContent = swaptext;
                event.currentTarget.previousSibling.textContent = parenttext; 
            }else{
                const parenttext = event.currentTarget.parentNode.parentNode.firstChild.firstChild.textContent;
                event.currentTarget.parentNode.parentNode.firstChild.firstChild.textContent = swaptext;
                event.currentTarget.previousSibling.textContent = parenttext;
            }
        }
      });
    });
  }
  
  document.body.innerHTML = `
  <div>
      <span>Prepare presentation</span>
      <button class="downButton" type="button">&darr;</button>
  </div>
  <div>
      <span>Read emails</span>
      <button class="downButton" type="button">&darr;</button>
      <button class="upButton" type="button">&uarr;</button></div>
  <div>
      <span>Monthly report</span>
      <button class="upButton" type="button">&uarr;</button>
  </div>`;
  
  initialize();
  
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[1].click();
  
  console.log(document.body.innerHTML);