// THIS IS A CLIENT SIDE SOLUTION
// select form + select all student containers
let form = document.querySelector("form");
let studentContainer = document.querySelectorAll(".student-container");

// loop the names
form.addEventListener('input', function (e) {
    e.preventDefault();

    // selecteer input
    let input = document.querySelector("input").value.toUpperCase();

    for (let i = 0; i < studentContainer.length; i++) {
        
        // search on first name
        if (!studentContainer[i].children[1].children[1].innerHTML.toUpperCase().includes(input)) {
            studentContainer[i].classList.add("container-off");
        } else {
            studentContainer[i].classList.remove("container-off")
        }
    }

})