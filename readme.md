this is a front end mentor challenge 
# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/127.0.0.1_5500_index.html%20(1).png)
![](./images/127.0.0.1_5500_index.html%20(2).png)
![](./images/127.0.0.1_5500_index.html%20(3).png)


### Links

- Solution URL: [Add solution URL here](https://github.com/kimanthigregory/rating-component.git)
- Live Site URL: [Add live site URL here](https://kimanthigregory.github.io/rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- framework




### What I learned


To see how you can add code snippets, see below:


```js

function userRating(ratingNumber) {
    ratingStar.innerHTML =" ";
    for (var i = 0; i<ratingNumber; i++) {
        var addDiv = document.createElement("div");
        addDiv.classList.add("add-rating-star");
        ratingStar.appendChild(addDiv);
    }
}
```

## Author

- Website - [gregory kimanthi](https://kimanthigregory.github.io/portfolio-website/)

- Twitter - [@techboygabriel](https://www.twitter.com/techboygabriel)


