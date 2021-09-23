const quizData=[
    {
        question: "How old you?",
        a: "13",
        b: "19",
        c: "29",
        d: "37",
        correct: "a",
    },
    {
        question: "How you have money?",
        a: "good",
        b: "bad",
        c: "very",
        d: "how much",
        correct: "a",
    },
    {
        question: "are you have child?",
        a: "yes",
        b: "no",
        c: "3 baby",
        d: "4 babay",
        correct: "a",
    },   
];

const quiz=document.getElementById('quiz')
const answerEl=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')

const submitBtn=document.getElementById('submit')


let currentQuiz = 0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswer()
    
    const currentQuizData=quizData[currentQuiz]
    questionEl.innerHTML=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswer(){
    answerEl.forEach(answerEl=>answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEl.forEach(answerEl => {
        if(answerEl.checked){
            answer =answerEl
        }
    })
return answer
}


submitBtn.addEventListener('click',()=>{
    const answer=getSelected()
if(answer){
    if(answer === quizData[currentQuiz].correct){
score++
    }
    currentQuiz++
    if(currentQuiz <quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML=`
        <h2>You answer at ${score} / ${quizData.length} questions </h2>
        <button onclick="location.relad()">Reload</button>
        `
    }
}
})