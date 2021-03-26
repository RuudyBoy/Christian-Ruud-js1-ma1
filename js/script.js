// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3 

heading.style.fontSize = "2em";

// Question 4 

heading.className = "subheading";

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraphs" + "<p>";
resultsContainer.style.background = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function listArgument (list) {
    for (let i = 0; 1 < list.length; i++) {
        console.log(list[i]);
    } 
}

listArgument (cats);


// Question 8


function createCats (cats) {

   let html = "";

   for(let i = 0; i < cats.length; i++) {

    let catClaw = "unknown";

    if(cats[i].claws) {
        catClaw = cats[i].claws;
        console.log("age unknown");
    }

    html += `<div class = "cat-container">
        <h5> ${cats[i].name} </h5>
        <p> Released: ${releaseYear} </p>
    </div>`;

    
   }
   
   return html;

}

const newHTML = createCats(cat);

const catContainer = document.querySelector(".cat-container");
gameContainer.innerHTML = newHTML;

