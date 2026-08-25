/* =========================================================
   LAW SIMPLIFIED
   WORD OF THE DAY
   ========================================================= */


/*
   Each word has:

   1. The legal term
   2. A simple explanation


*/

const legalWords = [

    {
        word: "Precedent",
        definition: "A previous court decision that can help guide the decision in a later case with similar facts."
    },

    {
        word: "Liability",
        definition: "Legal responsibility for something, such as causing harm, breaking a contract or owing money."
    },

    {
        word: "Contract",
        definition: "A legally enforceable agreement between two or more parties."
    },

    {
        word: "Consideration",
        definition: "Something of value exchanged between parties as part of a contract."
    },

    {
        word: "Negligence",
        definition: "When someone fails to take reasonable care and causes harm as a result."
    },

    {
        word: "Defendant",
        definition: "The person or organisation responding to a legal claim or being accused in a criminal case."
    },

    {
        word: "Claimant",
        definition: "A person or organisation that brings a civil claim against another party."
    },

    {
        word: "Appeal",
        definition: "A request for a higher court to review a decision made by a lower court."
    },

    {
        word: "Jurisdiction",
        definition: "The legal authority a court or other body has to deal with a particular case."
    },

    {
        word: "Tort",
        definition: "A civil wrong that causes harm or loss and may give the injured person a right to claim compensation."
    },

    {
        word: "Damages",
        definition: "Money awarded by a court to compensate someone who has suffered loss or harm."
    },

    {
        word: "Breach",
        definition: "A failure to follow a legal duty, agreement or contractual obligation."
    },

    {
        word: "Statute",
        definition: "A law formally created and passed by Parliament."
    },

    {
        word: "Legislation",
        definition: "Laws that have been created by Parliament or another law-making body."
    },

    {
        word: "Liable",
        definition: "Legally responsible for something, such as damage, loss or a debt."
    },

    {
        word: "Evidence",
        definition: "Information or material used to help prove or disprove something in a legal case."
    },

    {
        word: "Verdict",
        definition: "The formal decision reached by a jury in a criminal trial."
    },

    {
        word: "Acquittal",
        definition: "A decision that a person accused of a crime is not guilty."
    },

    {
        word: "Prosecution",
        definition: "The legal process of bringing a criminal case against someone accused of an offence."
    },

    {
        word: "Defence",
        definition: "The case or arguments presented on behalf of a person accused or sued."
    },

    {
        word: "Remedy",
        definition: "A legal solution provided when someone's rights have been affected or a legal wrong has occurred."
    },

    {
        word: "Injunction",
        definition: "A court order requiring someone to do something or stop doing something."
    },

    {
        word: "Bail",
        definition: "The temporary release of someone accused of a crime while they await further court proceedings."
    },

    {
        word: "Arbitration",
        definition: "A way of resolving a dispute outside court where an independent person makes a decision."
    },

    {
        word: "Mediation",
        definition: "A process where an independent person helps people in a dispute try to reach an agreement."
    },

    {
        word: "Shareholder",
        definition: "A person or organisation that owns shares in a company."
    },

    {
        word: "Director",
        definition: "A person appointed to help manage and make decisions for a company."
    },

    {
        word: "Insolvency",
        definition: "A situation where a person or organisation cannot pay the money they owe."
    },

    {
        word: "Intellectual Property",
        definition: "Legal rights that protect creations such as inventions, designs, brands and original works."
    },

    {
        word: "Copyright",
        definition: "Legal protection given to creators of original works such as writing, music, art and software."
    },

    {
        word: "Trademark",
        definition: "A sign, name, logo or symbol used to distinguish one business's goods or services from another's."
    },

    {
        word: "Fiduciary",
        definition: "Describes a relationship where one person is legally required to act in another person's best interests."
    },

    {
        word: "Breach of Duty",
        definition: "When someone fails to meet a legal duty they owe to another person."
    },

    {
        word: "Damages",
        definition: "A financial award intended to compensate someone for a loss or harm."
    },

    {
        word: "Ratio Decidendi",
        definition: "The legal reason or principle that forms the basis of a court's decision."
    },

    {
        word: "Obiter Dictum",
        definition: "A comment made by a judge that is not essential to the decision of the case."
    },

    {
        word: "Pro Bono",
        definition: "Legal work carried out voluntarily without charging the client."
    },

    {
        word: "Statutory Duty",
        definition: "A responsibility created by legislation that a person or organisation is legally required to follow."
    },

    {
        word: "Common Law",
        definition: "Law developed through decisions made by judges in courts rather than being created entirely through legislation."
    },

    {
        word: "Burden of Proof",
        definition: "The responsibility to prove the facts needed to establish a legal claim or criminal charge."
    },

    {
        word: "Remand",
        definition: "When a person accused of a crime is kept in custody or released on conditions while waiting for further court proceedings."
    }

];


/* =========================================================
   WORD RANDOMISER
   ========================================================= */


const wordElement = document.getElementById("legal-word");

const definitionElement = document.getElementById("word-definition");

const newWordButton = document.getElementById("new-word-button");


/*
   Get the words that have already been shown.

   localStorage allows the browser to remember
   previous words even after the page is refreshed.
*/

function getUsedWords() {

    const savedWords = localStorage.getItem("lawSimplifiedUsedWords");

    if (!savedWords) {
        return [];
    }

    return JSON.parse(savedWords);
}


/*
   Save the list of words that have already appeared.
*/

function saveUsedWords(usedWords) {

    localStorage.setItem(
        "lawSimplifiedUsedWords",
        JSON.stringify(usedWords)
    );

}


/*
   Choose a word that has not already appeared.
*/

function getNewWord() {

    let usedWords = getUsedWords();


    /*
       If all 40 words have been used,
       start a completely new cycle.
    */

    if (usedWords.length >= legalWords.length) {

        usedWords = [];

    }


    /*
       Find all words that haven't been used yet.
    */

    const availableWords = legalWords.filter(
        function(item, index) {
            return !usedWords.includes(index);
        }
    );


    /*
       Pick a random unused word.
    */

    const randomPosition = Math.floor(
        Math.random() * availableWords.length
    );


    const selectedWord = availableWords[randomPosition];


    /*
       Find the original position of the selected word.
    */

    const selectedIndex = legalWords.indexOf(selectedWord);


    /*
       Remember that this word has been used.
    */

    usedWords.push(selectedIndex);

    saveUsedWords(usedWords);


    return selectedWord;
}


/*
   Display the word on the page.
*/

function displayWord() {

    const selectedWord = getNewWord();


    wordElement.textContent = selectedWord.word;

    definitionElement.textContent = selectedWord.definition;

}


/*
   Show a new word when the button is clicked.
*/

newWordButton.addEventListener(
    "click",
    displayWord
);


/*
   Show a word when the website first loads.
*/

displayWord();/* =========================================================
   STEP 3 — SCROLL REVEAL ANIMATIONS
   ========================================================= */

const revealElements = document.querySelectorAll(
    `
    .intro-content,
    .example-group,
    .section-heading,
    .article-card,
    .case-card,
    .word-introduction,
    .word-card,
    .about-content
    `
);


/* Add the hidden starting state */

revealElements.forEach((element) => {
    element.classList.add("scroll-reveal");
});


/* Watch elements as the user scrolls */

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


/* Start watching every reveal element */

revealElements.forEach((element) => {
    revealObserver.observe(element);
});