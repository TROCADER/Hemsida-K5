const button = document.querySelector("#button");
button.addEventListener("click", clicked);

const page = document.querySelector("#whole_page");
const secret = document.querySelector("#secret");

function clicked()
{
    page.style.display = "none"
    secret.style.display = "block"
}