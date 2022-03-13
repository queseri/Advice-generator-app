const generateBtn = document.querySelector(".generateBtn")
async function generate() {
    const mainTitle = document.querySelector(".main-title")
    const advice = document.querySelector(".advice")
    const fetchAdvice = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
    const response = await fetchAdvice.json()
    mainTitle.innerHTML = `Advice # ${response.slip.id}`
    advice.innerHTML = response.slip.advice
    console.log(response.slip)
}

const generate2 = () => {
    const mainTitle = document.querySelector(".main-title")
    const advice = document.querySelector(".advice")
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            mainTitle.innerHTML = `Advice # ${data.slip.id}`
            advice.innerHTML = data.slip.advice
        })
        console.log(2)
}

generate()

generateBtn.addEventListener("click", generate)