const button = document.getElementById("btn-menumobile");
const list = document.getElementById("mobileNav");

list.style.display = "none";


button.addEventListener("click", (event) => {
    if (list.style.display == "none") {
        list.style.display="block";
    } else {
        list.style.display = "none";
    }
})
