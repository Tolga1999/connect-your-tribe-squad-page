// THIS IS A CLIENT SIDE SOLUTION

// select elements
let input = document.querySelector("input");
let form = document.querySelector("form");

// select all h2 names
let studentNames = document.querySelectorAll(".student-name")
// select all student containers
let studentContainer = document.querySelectorAll(".student-container");
// select all names
let allNames = document.querySelectorAll(".only-name");
// console.log(allNames[0].innerHTML.toUpperCase())
// console.log(studentContainer[0].children[1].children[1].innerHTML)

// loop the names for use
form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let i = 0; i < studentContainer.length; i++) {
        // toUppercase to make the comparison easier
        if (input.value.toUpperCase() !== studentContainer[i].children[1].children[1].innerHTML.toUpperCase()) {
            studentContainer[i].classList.add("container-off");
        } else {
            studentContainer[i].classList.remove("container-off")
        }

        // if field is empty show all
        if (input.value === "") {
            studentContainer[i].classList.remove("container-off")
        }

        // search on first name
        // if (input.value.toUpperCase() !== allNames[i].innerHTML.toUpperCase()) {
        //     studentContainer[i].classList.add("container-off");
        // } else {
        //     studentContainer[i].classList.remove("container-off")
        // }   
    }

})