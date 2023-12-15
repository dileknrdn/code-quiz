const startSection= document.querySelector(".start-box")
const startBtn=document.getElementById("start-btn")
const questionSection= document.querySelector(".question-section")
const questionEL= document.getElementById("question")
const btnList=document.querySelector(".btn-list")
const formSection=document.querySelector(".form-section")
const inputEl= document.getElementById("initials-input")
const submitBtn=document.getElementById("submit-btn")

const index=0

function showQuestions(){
    
    questionEL.textContent=questions[index].question

    for (let i = 0; i < questions[index].answers.length; i++) {
        const btn= document.createElement("button")
        btn.setAttribute("class", "btn")
        btn.textContent=questions[index].answers[i]

        btnList.append(btn)
        
    }
}





startBtn.addEventListener("click", ()=>{
    startSection.classList.add("hide")
    questionSection.classList.remove("hide")
    showQuestions()
})