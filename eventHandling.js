// event => events allow you to write javascript conde that reacts on certain situations,
// Examples of events include:
// a) the user clicks the mous button
// b) The web page loading
// c)A form field being change

// As of today, there are two way to handle events in  javascript
// a) By using an event handler
// a)By adding  an event listener

// event handler .....
// a) event handler alwase start with "on"
// b) event handler always writs in HTML
// c) even use as a html attrubutes


function myfunction1(){
    console.log("onclick");
}

function myfunction2(){
    console.log("you click on box2");
}

// onmouseover => jb box mai circle le jayenge tabhi print ho jayega

function myfunction3(){
    console.log("onmouseover");
}

// onmouseout => jb cursel ko box ke bhar le ke aye tabhi output aayega
function myfunction4(){
    console.log("onmouseout");
}

// onKeyPress => the event handler invoks a javascript code when the user press a key
function myfunction5(){
    console.log("onkey press");
}

function myfunction6(){
    console.log("onkey down");
}

function keypress(event){
    // console.log(event.key);//tracks the key pressed
    console.log(event.target.value);//track the value of the key(full name)
}