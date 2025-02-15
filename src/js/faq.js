
// hämta en lista av knappar med dataattribut data-faq-button
const buttons = document.querySelectorAll('[data-faq-button]')
const answers = document.querySelectorAll('[data-faq-answer]')
answers.forEach(function(answer, index){
    answer.style.display = "none";
})
   
// loopa igenom knapplista
buttons.forEach(function (button, index) {
    // vid klick på specifik knapp i knapplista
    button.addEventListener("click", function(){

        // hämta siblingelement (svaret)
        const answer = button.nextElementSibling;   
        // om svaret är dolt - visa svar, om svaret visas - dölj svar      
        if (answer.style.display === "none")
        {
            // sätt styling display till "block", dvs visa svar
            answer.style.display = "block";
        }
        else
        {
            // sätt styling display till "none", dvs dölj svar
            answer.style.display = "none";
        }
    });
})