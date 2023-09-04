function colorRandom(){
    r = parseInt(Math.random()*255)
    g = parseInt(Math.random()*255)
    b = parseInt(Math.random()*255)
    return `rgb(${r},${g},${b})`
}

comidas = document.querySelectorAll("li")


for (i of comidas){
    i.style.backgroundColor = colorRandom()
}