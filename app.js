
function scalePage() {

    console.log(window.innerWidth);

    const page = document.getElementById("page-scale");

    const designWidth = 2009;

    const scale = Math.min(
        window.innerWidth / designWidth,
        1

    );

    console.log(
        "幅:", window.innerWidth,
        "scale:", scale
    );

    page.style.transform = `scale(${scale})`;
}

window.addEventListener("load", scalePage);
window.addEventListener("resize", scalePage);