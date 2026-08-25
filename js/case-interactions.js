/* =========================================================
   LAW SIMPLIFIED — UNIVERSAL CASE POLL
   Works across every case study
   ========================================================= */

const poll = document.querySelector(".you-decide");

if (poll) {

    const decisionButtons =
        poll.querySelectorAll(".decision-button");

    const decisionResult =
        poll.querySelector(".decision-result");

    const resultTitle =
        poll.querySelector(".decision-result-title");

    const resultText =
        poll.querySelector(".decision-result-text");

    const correctAnswer =
        poll.dataset.correct;


    decisionButtons.forEach((button) => {

        button.addEventListener("click", () => {

            /* Remove old selection */

            decisionButtons.forEach((option) => {
                option.classList.remove("selected");
            });


            /* Highlight selected option */

            button.classList.add("selected");


            /* Get reader's answer */

            const answer = button.dataset.answer;


            /* Compare with actual court decision */

            if (answer === correctAnswer) {

                resultTitle.textContent =
                    poll.dataset.agreeTitle;

                resultText.textContent =
                    poll.dataset.agreeText;

            } else {

                resultTitle.textContent =
                    poll.dataset.disagreeTitle;

                resultText.textContent =
                    poll.dataset.disagreeText;
            }


            /* Show result */

            decisionResult.classList.add("show");

        });

    });

}