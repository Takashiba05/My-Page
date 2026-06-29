document.addEventListener("DOMContentLoaded", () => {

    const photo = document.querySelector(".achievement-photo");
    const section = document.querySelector("#milestones");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            console.log(entry.isIntersecting);

            if (entry.isIntersecting) {
                console.log("発火");

                photo.classList.add("show");
                observer.disconnect();
            }

        });

    });

    observer.observe(section);

});