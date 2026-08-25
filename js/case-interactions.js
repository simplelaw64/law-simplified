/* =========================================================
   LAW SIMPLIFIED — WHAT WOULD YOU DECIDE?
   ========================================================= */

const decisionSections = document.querySelectorAll(".you-decide");

decisionSections.forEach((section) => {

    const buttons = section.querySelectorAll(".decision-button");
    const result = section.querySelector(".decision-result");

    const resultTitle =
        section.querySelector(".decision-result-title");

    const resultText =
        section.querySelector(".decision-result-text");

    const correctAnswer =
        section.dataset.correct;


    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const answer =
                button.dataset.answer;


            /* Remove previous selection */

            buttons.forEach((btn) => {
                btn.classList.remove("selected");
            });


            /* Highlight chosen answer */

            button.classList.add("selected");


            /* Show the result */

            if (answer === correctAnswer) {

                resultTitle.textContent =
                    section.dataset.agreeTitle;

                resultText.textContent =
                    section.dataset.agreeText;

            } else {

                resultTitle.textContent =
                    section.dataset.disagreeTitle;

                resultText.textContent =
                    section.dataset.disagreeText;

            }


            result.classList.add("show");

        });

    });

});