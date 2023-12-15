const startSection= document.querySelector(".start-box")
const startBtn=document.getElementById("start-btn")
const questionSection= document.querySelector(".question-section")
const questionEL= document.getElementById("question")
const btnList=document.querySelector(".btn-list")
const formSection=document.querySelector(".form-section")
const inputEl= document.getElementById("initials-input")
const submitBtn=document.getElementById("submit-btn")







startBtn.addEventListener("click", ()=>{
    startSection.classList.add("hide")
    questionSection.classList.remove("hide")
})