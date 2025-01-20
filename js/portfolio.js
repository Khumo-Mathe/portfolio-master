let x = document.querySelector(".one")
let y = document.querySelector(".two")
let z = document.querySelector(".three")
let a = document.querySelector(".four")
let b = document.querySelector(".five")


window.onload = function() {
 // executes when complete page is fully loaded, including all frames, objects and images
//console.log("window is loaded");

  
// window load  
};
myFunction = () => {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

myFunctionTwo = () => {
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

myFunctionThree = () => {
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

myFunctionFour = () => {
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
myFunctionFive = () => {
  if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";
  }
}

