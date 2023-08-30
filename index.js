alert("hello");
// var ratingStarContainer= document.querySelectorAll(".rating-star");
// console.log(ratingStarContainer);
var ratingStar = document.querySelector(".rating-star");
for(var i =0; i<document.querySelectorAll(".rating-num").length; i++){
    document.querySelectorAll(".rating-num")[i].addEventListener("click",function(){
        var ratingNum = parseInt(this.getAttribute("data-ratingNum"))
        console.log(ratingNum);
        // document.querySelector(".rating-star").classList.add("add-rating-star");
        userRating(ratingNum);
        document.querySelector(".selection p span").textContent = ratingNum

    });
    
}


function userRating(ratingNumber) {
    ratingStar.innerHTML =" ";
    for (var i = 0; i<ratingNumber; i++) {
        var addDiv = document.createElement("div");
        addDiv.classList.add("add-rating-star");
        ratingStar.appendChild(addDiv);
    }
}

document.querySelector(".submit-button button").addEventListener("click",function submitButton(userChosenButton){
    document.querySelector(".thank-you-container").classList.add("add-container")
    document.querySelector(".rating-container").classList.add("remove-container")
    // console.log(userChosenButton);
})
