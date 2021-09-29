
const navSlide = ()=>{
    const burger = document.getElementsByClassName("burger");
    const nav = document.getElementsByClassName("nav-links");
    const line2 = document.getElementById("line2");
    const line1 = document.getElementById("line1");
    const line3 = document.getElementById("line3");

    for (let i = 0; i < burger.length; i++) {
        let num =0;
        burger[i].addEventListener("click",()=>{
            line2.style.opacity = "0";
            line3.style.transform = "rotate(-45deg)";
            line1.style.transform = "rotate(45deg)";
            num++;
            if (num%2 == 0) {
                line2.style.opacity = "1";
                line1.style.transform = "rotate(0deg)";
                line3.style.transform = "rotate(0deg)";
            }

            for (let j = 0; j < nav.length; j++) {
                nav[j].classList.toggle ("nav-active");
            }
        })
    }
}
navSlide();






////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////











