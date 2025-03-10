const btn = document.querySelector(".discover") as HTMLButtonElement

btn.addEventListener("click", function(event) {
    event.preventDefault()
    alert("Commande passée !")
})