function removeBrTags() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 550) {
        const brTags = document.querySelectorAll('.follow-us br');

        brTags.forEach((brTag) => {
            brTag.remove();
        });
    }
}

removeBrTags();
window.addEventListener('resize', removeBrTags);

// ============= adjustButtonPadding============

function adjustButtonPadding() {
    const screenWidth = window.innerWidth;
    const button = document.getElementById('learnMoreButton');


    if (screenWidth < 768) {
        button.style.padding = '1rem 2rem';
    } else {
        button.style.padding = '1rem 4rem';
    }
}

adjustButtonPadding();
window.addEventListener('resize', adjustButtonPadding);

// ============= adjustButtonPadding============

// let count = document.getElementById("count")
// console.log(count)

// count.addEventListener("mouseover", () => {
//     console.log("first")
// })