/* =========================================================
   LAW SIMPLIFIED — MOBILE NAVIGATION
   ========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".nav-links");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent =
            isOpen ? "Close" : "Menu";

    });


    navigation.querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent =
                    "Menu";

            });

        });

}