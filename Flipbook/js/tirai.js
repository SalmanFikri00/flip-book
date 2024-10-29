 document.addEventListener("DOMContentLoaded", () => {

     const tiraiComp = document.querySelector('.tirai-comp')
     const tirai = document.querySelector('.tirai')

     setTimeout(() => {
        tiraiComp.style.top = "-64px"
     }, 2000);
     setTimeout(() => {
        tiraiComp.style.top = "-128px"
     }, 3000);
     setTimeout(() => {
        tiraiComp.style.top = "-192px"
     }, 4000);
     setTimeout(() => {
        tirai.style.top = "-100vh"
     }, 5000);



})