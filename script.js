// Get the the tquestion div
let questDiv = document.querySelectorAll(".question");

// Get the the the-question div
let theQuestDiv = document.querySelectorAll(".the-question");

// Get the arrow image
let arrowImg = document.querySelectorAll(".arrow-img");

// Get the the answer div
let answerDiv = document.querySelectorAll(".the-answer");

// Get all the h4 tag element
let h4 = document.querySelectorAll("h4");



// To give the necessary functionality in the code as required 
for (let i =0; i < questDiv.length; i++) {
    

    questDiv[i].onclick = function() {
        for(let i = 0; i < answerDiv.length; i++) {
            if (answerDiv[i].style.height === "max-content") {
                answerDiv[i].style.height = "0";
            }

            if (arrowImg[i].style.transform === "scaleY(-1)") {
                arrowImg[i].style.transform = "scaleY(1)";
            }

            if (h4[i].style.fontWeight === "700") {
                h4[i].style.fontWeight = "400";
            }
        }


        this.getElementsByTagName("h4")[0].style.color = "var(--DGB)";
        this.getElementsByTagName("h4")[0].style.fontWeight = "700";
        this.querySelector(".arrow-img").style.transform = "scaleY(-1)";
        this.querySelector(".the-answer").style.height = "max-content";

    }

    questDiv[i].onmouseover = function() {
        this.getElementsByTagName("h4")[0].style.color = "var(--SR)";
    }
    
    questDiv[i].onmouseout = function() {
        this.getElementsByTagName("h4")[0].style.color = "var(--DGB)";
    }
}


// To reset the questDiv to it initial state as seen in the html and css codes
document.querySelector(".left-container").onclick = function () {
    for (let i = 0; i < h4.length; i++) {
        h4[i].style.fontWeight = "400";
        answerDiv[i].style.height = "0";
        arrowImg[i].style.transform = "scaleY(1)";
    }
}

document.querySelector(".close-container").onclick = function () {
    for (let i = 0; i < h4.length; i++) {
        h4[i].style.fontWeight = "400";
        answerDiv[i].style.height = "0";
        arrowImg[i].style.transform = "scaleY(1)";
    }
}
