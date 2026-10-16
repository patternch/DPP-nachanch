function changeColor(){
      let randomColor = "#" + Math.floor(Math.random() *16777216)
           .toString(16)
           .padStart(6, "0");
      document.body.style.backgroundColor = randomColor;
}
