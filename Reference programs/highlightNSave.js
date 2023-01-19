

const element = document.getElementById("myBtn");
element.addEventListener("click", getText);


function getText(){
    let text = "";
    // if(window.getSelection()){
    //   text = window.getSelection();
    // }
    if(document.getSelection()){
      text = document.getSelection();
    }
    else if (document.selection.createRange()) {
     text = document.getSelection()
    }
    alert(text);
}


//<script type="'module" src="highlightAndSave.js"></script>