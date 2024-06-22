    //event
      function myFun(){
          alert("I see you!");
      }

      let box = document.querySelector(".box");
      document.getElementById("btn1").onclick = function(){
          let red = Math.floor(Math.random() * 256);
          let green = Math.floor(Math.random() * 256);
          let blue = Math.floor(Math.random() * 256);
          let randomColor = `rgb(${red},${green},${blue})`;
          box.style.backgroundColor = randomColor;
          box.style.borderRadius = "30px 0px 30px 0px";
         
      }
      document.getElementById("btn2").onclick = function(){
          box.style.backgroundColor= "green";
      }
      document.getElementById("btn3").onclick = function(){
          box.style.backgroundColor= "yellow";
      }

 //  function getRandomColor() {
 //    let r= Math.floor(Math.random()*255);
 //    let g= Math.floor(Math.random()*255);
 //    let b= Math.floor(Math.random()*255);
 //    return `rgb(${r}, ${g}, ${b})`;
 //}
 //console.log(getRandomColor());

 // function getRandomColor() {
 //   // Generate random values for red, green, and blue
 //   let r = Math.floor(Math.random() * 256);
 //   let g = Math.floor(Math.random() * 256);
 //   let b = Math.floor(Math.random() * 256);
 //   // Return the RGB color in CSS format
 //   return `rgb(${r}, ${g}, ${b})`;
 //   }
//
 //   console.log(getRandomColor()); // Outputs something like "rgb(123, 45, 67)"
