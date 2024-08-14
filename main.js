const blurDiv = document.getElementById("absolute")
const blurDivG = document.getElementById("absoluteG")
const blurDivW = document.getElementById("absoluteW")
const cardT = document.getElementsByClassName("card")[0]
const cardG = document.getElementsByClassName("card")[1]
const cardW = document.getElementsByClassName("card")[2]

function handleMove (e){
    console.log(e)
    const {clientX, clientY} = e
    const rect = cardT.getBoundingClientRect()
    blurDiv.style.opacity = 1
    blurDiv.style.top = `${clientY - rect.top}px`; 
    blurDiv.style.left = `${clientX - rect.left}px`;
} 

function handleMoveG (e){
    console.log(e)
    const {clientX, clientY} = e
    const rect = cardG.getBoundingClientRect()
    blurDivG.style.opacity = 1
    blurDivG.style.top = `${clientY - rect.top}px`; 
    blurDivG.style.left = `${clientX - rect.left}px`;
} 

function handleMoveW (e){
    console.log(e)
    const {clientX, clientY} = e
    const rect = cardW.getBoundingClientRect()
    blurDivW.style.opacity = 1
    blurDivW.style.top = `${clientY - rect.top}px`; 
    blurDivW.style.left = `${clientX - rect.left}px`;
} 

cardT.addEventListener("mousemove", handleMove)

cardT.addEventListener("mouseout", (e)=>{
    blurDiv.style.opacity = 0
})

cardG.addEventListener("mousemove", handleMoveG)
cardG.addEventListener("mouseout", (e)=>{
    blurDivG.style.opacity = 0
})

cardW.addEventListener("mousemove", handleMoveW)
cardW.addEventListener("mouseout", (e)=>{
    blurDivW.style.opacity = 0
})

