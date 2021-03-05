let questions = document.querySelectorAll(".faq-item-container");
const faq = el => {
    questions[el].addEventListener("click", function(){
        let questionContainer = this.closest(".question-container");
        let arrow = this.querySelector("img");
        let answerContainer = questionContainer.querySelector(".faq-item-info");

        answerContainer.classList.toggle("show");
        if(answerContainer.classList.contains("show"))
        {
            questions[el].style.fontWeight = "bold";
            arrow.style.transform = "rotate(180deg)";
        }else{
            questions[el].style.fontWeight = "normal";
            arrow.style.transform = "rotate(0)";
        }
    });
}
for(let i=0; i<questions.length; i++){faq(i);}