function appStart(){

    const handleKeydown = (event) => {
        const key = event.key;
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(".boadrd-column[data-index='00']");
        if (65 <= keycode && keycode <= 90){ 
          
          thisBlock.innerText = key;
        };
       
    };

  window.addEventListener("Keydown",handleKeydown);

}


appStart();