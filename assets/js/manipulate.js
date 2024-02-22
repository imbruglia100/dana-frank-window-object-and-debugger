export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    document.title = "Dana's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    document.querySelector("h1").innerText = "I am Dana Shaw"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    document.querySelector("div.section > p").innerText = `Shíshì shīshì Shī Shì, shì shī, shì shí shí shī.

    Shì shíshí shì shì shì shī.

    Shí shí, shì shí shī shì shì.

    Shì shí, shì Shī Shì shì shì.

    Shì shì shì shí shī, shì shǐ shì, shǐ shì shí shī shìshì.

    Shì shí shì shí shī shī, shì shíshì.

    Shíshì shī, Shì shǐ shì shì shíshì.

    Shíshì shì, Shì shǐ shì shí shì shí shī.

    Shí shí, shǐ shí shì shí shī shī, shí shí shí shī shī.

    Shì shì shì shì.`
}
