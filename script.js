let selectMorningBtn = document.querySelector("#select-morning");
let selectHeaderBtn = document.querySelector("#select-header");
let selectClassBtn = document.querySelector("#select-class");

selectMorningBtn.addEventListener("click", function(){
    let selectId = document.querySelector("#morning");
    selectId.innerHTML = "Goodbye";
})

selectHeaderBtn.addEventListener("click", function(){
    let selectAllHeader = document.querySelectorAll("h1");
    for(each of selectAllHeader){
        each.innerHTML = "bravo";
    }
})

selectClassBtn.addEventListener("click", function(){
    let selectOneClass = document.querySelectorAll(".apple")[1];
    selectOneClass.innerHTML = "coconut";
})


let mouseEnterDemo = document.querySelector("#enter");
let mouseLeaveDemo = document.querySelector("#leave");

// MOUSEENTER
mouseEnterDemo.addEventListener("mouseenter",function(){
    mouseEnterDemo.style.color = "red";
});

// MOUSELEAVE
mouseLeaveDemo.addEventListener("mouseleave", function(){
    mouseLeaveDemo.style.color = "red";
})

// ONCLICK ADDED TO PARAGRAPH
let fontDemo = document.querySelector("#font-demo");
fontDemo.addEventListener("click", function(){
    fontDemo.style.fontSize = "32pt";
})

// TEXTBOX
let textInput = document.querySelector("#username");
let submitBtn = document.querySelector("#submit-btn");
let textOutput = document.querySelector("#text-output");

submitBtn.addEventListener("click",function(){
    let textValue = textInput.value;
    console.log("Text value is", textValue);
    textOutput.innerHTML = textValue;
})

// TEXTAREA
let textAreaInput = document.querySelector("#user-comments");
let submitBtn2 = document.querySelector("#submit-btn-2");
let textAreaOutput = document.querySelector("#text-area-output");

submitBtn2.addEventListener("click",function(){
    let textAreaValue = textAreaInput.value;
    console.log("Text Area is", textAreaValue);
    textAreaOutput.innerHTML = textAreaValue;
})

// RADIO BUTTONS
let radioOutput = document.querySelector("#radio-output");
let radioOutputBtn = document.querySelector("#radio-output-btn");

let radioBtns = document.querySelectorAll("input[name='fruits']"); 
// let radioBtns = document.getElementsByName("fruits");

radioOutputBtn.addEventListener("click", function(){
    for(each of radioBtns){
        // console.log(each.checked);
        if(each.checked){
            // console.log(each.value, "is checked")
            radioOutput.innerHTML = each.value;
        }
    }
});


// hands on 1
let leftInput = document.querySelector("#left");
let rightInput = document.querySelector("#right");

let swapBtn = document.querySelector("#swap");

swapBtn.addEventListener("click", function(){
    let leftValue = leftInput.value;
    let rightValue = rightInput.value;
    leftInput.value = rightValue;
    rightInput.value = leftValue;
})

// CHECKBOXES
let checkboxes = document.querySelectorAll("input[name='team']");
let checkboxesBtn = document.querySelector("#checkbox-output-btn");
let checkboxesOutput = document.querySelector("#checkbox-output");

checkboxesBtn.addEventListener("click", function(){
    let checkboxArr = [];
    for(each of checkboxes){
        if(each.checked){
            checkboxArr.push(each.value);
        }
    }
    checkboxesOutput.innerHTML = checkboxArr.toString();
});

// Adding to DOM
let parentElement = document.querySelector("#add-to-dom");
let headerDemo = document.querySelector("#header-demo");
let headerDemoBtn = document.querySelector("#header-demo-btn");
let firstDemoBtn = document.querySelector("#first-demo");
let secondDemoBtn = document.querySelector("#second-demo");;
let thirdDemoBtn = document.querySelector("#third-demo");;

headerDemoBtn.addEventListener("click",function(){
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    
    // headerDemo.innerHTML = "Another demo";
    // headerDemo.innerHTML = `Another demo ${randomNumber}`;
    let newElement = document.createElement('li');
    newElement.innerHTML = randomNumber;

    headerDemo.append(newElement);
})

firstDemoBtn.addEventListener("click", function(){
    // first demo: add into parent via changing innerHTML
    parentElement.innerHTML = `
        <h2>New Header</h2>
        <p>
            This is a new paragraph too.
        </p>
    `
});
secondDemoBtn.addEventListener("click", function(){
    // second demo: add into parent via appending innerHTML
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    parentElement.innerHTML += `
        <h2>New Header NO. ${randomNumber}</h2>
        <p>
            This is also new paragraph no. ${randomNumber}
        </p>
    `
});
thirdDemoBtn.addEventListener("click", function(){
    // third demo: append child
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    let childElement = document.createElement("h2");
    childElement.innerHTML = `Child Element No. ${randomNumber}`;

    parentElement.appendChild(childElement);
});

let listDemo = document.querySelector("#list-demo");
let listDemoBtn = document.querySelector("#list-demo-btn");

listDemoBtn.addEventListener("click",function(){
    console.log("click")
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    
    listDemo.innerHTML += `<li>Demo ${randomNumber}</li>`;
});
