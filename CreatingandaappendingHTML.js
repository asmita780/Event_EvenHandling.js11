// textContent propety => for adding text in <p>

// const newPara = document.createElement("p");
// newPara.textContent = "This is a paragraph";
// /* <p>This is a paragraph</p> */

// const container = document.getElementById("container");
// container.appendChild(newPara);

// const button = document.createElement("button");
// button.innerHTML = "Submit";

// const container1 = document.getElementById("container");
// container1.appendChild(button);



// inserting HTML
// insertAdjacentHTML => convert string to HTML =>iner this mathod there is a parsar who convert string to an HTML 
const divbox = `
<div class="box" id="box-5">box-5</div>
<div class="box" id="box-6">box-6</div>
`;

// container.insertAdjacentHTML("beforeend", divbox);//"beforeend" => it's a posstion where we want to put our new elements(divbox)
// container.insertAdjacentHTML("beforebegin", divbox);
// container.insertAdjacentHTML("afterend", divbox);
// container.insertAdjacentHTML("afterbegin", divbox);