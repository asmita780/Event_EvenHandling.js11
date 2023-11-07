// Finding The HTML Element
/*
  const myBody = document.body;
  myBody.style.backgroundColor = "red";
  console.log(myBody);*/



  // a)finding HTML element by id: DocumentgetElementById("intro");
  /*const box2 = document.getElementById("box-2");
  console.log(box2);*/



// b)finding HTML element by tag: DocumentgetElementByTagName("intro");
    /*const divs =  document.getElementsByTagName("div");
    console.log(divs);*/




// c)Finding HTML elements by class: DocumentgetElementsByClass("intro");
// const boxs = document.getElementsByClassName(".box");
// console.log(boxs);



// d) finding  HTML elements by querySelectoorrAll("intro")
/*      explanenation => document.querySelectoorrAll allows you to select all 
        elements with all the classes/id's 
        multiple or single from the Dom and returns you the array*/

/*const box1 = document.querySelectorAll(".box-1 .box2");//sare element select kr lo jinke under "box" and "box2" class ho
console.log(box1);
const box2 = document.querySelectorAll(".box-1 #box2");// give all those element whose id and class is "box2" and "box-1"
*/

/*whought All
    as we know we put same class name in multiple tags so  if we want const box1 = document.querySelectorAll(".box-1 .box2");  to use 
    only first element  then we can use this, we remove "All"from "querySelectoorrAll"
    and under the parantheses we put name of class*/
// const box3 = document.querySelectoorr(".box-1 #biox2");//"box-1" class jisme lga h uska sabse phle wala element 













