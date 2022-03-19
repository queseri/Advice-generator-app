const generateBtn = document.querySelector(".generateBtn")
async function generate() {
    const mainTitle = document.querySelector(".main-title")
    const advice = document.querySelector(".advice")
    const fetchAdvice = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
    const response = await fetchAdvice.json()
    mainTitle.innerHTML = `Advice # ${response.slip.id}`
    advice.innerHTML = `"${response.slip.advice}"`
    gsap.from(".main-title", {duration: 1, x: 100});
    gsap.from(".advice", {duration: 1, x: -50});
    console.log(response.slip)
}

generate()

generateBtn.addEventListener("click", generate)
