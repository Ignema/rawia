
const grid = document.getElementsByTagName("gallery")[0]

for(let i = 1; i < 31; i++){
    const image = document.createElement("img")
    image.src = "https://raw.githubusercontent.com/Ignema/rawia/master/gift/illustrations/%23" + i + ".png"
    const container = document.createElement("div")
    container.className = "container"
    container.appendChild(image)
    container.addEventListener("click", (e) => {
        window.open(image.src, '_blank');
    })
    grid.appendChild(container)
}