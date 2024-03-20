
let sidebar = document.querySelector(".sidebar")

function showSide(){
    sidebar.style.left = '0'
}
let nav=document.getElementById("nav")
window.addEventListener("scroll", () => {
 if (scroll > 10) {
     nav.style.position="fixed"
     nav.style.backgroundColor="tarnsparent"
     nav.style.width="100%"
     
 } else {
     nav.style.position="static"
     nav.style.backgroundColor="white"
     
 }
})