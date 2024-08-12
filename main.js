const blurDiv = document.getElementById("absolute")
const blurDivG = document.getElementById("absoluteG")
const cardT = document.getElementsByClassName("card")[0]
const cardG = document.getElementsByClassName("card")[1]

function handleMove (e){
    console.log(e)
    const {clientX, clientY} = e
    blurDiv.style.opacity = 1
    blurDiv.style.top = `${clientY}px`
    blurDiv.style.left = `${clientX}px`
} 

function handleMoveG (e){
    console.log(e)
    const {clientX, clientY} = e
    const rect = cardG.getBoundingClientRect()
    blurDivG.style.opacity = 1
    blurDivG.style.top = `${clientY - rect.top}px`; 
    blurDivG.style.left = `${clientX - rect.left}px`;
} 

cardT.addEventListener("mousemove", handleMove)

cardT.addEventListener("mouseout", (e)=>{
    blurDiv.style.opacity = 0
})

cardG.addEventListener("mousemove", handleMoveG)
cardG.addEventListener("mouseout", (e)=>{
    blurDivG.style.opacity = 0
})