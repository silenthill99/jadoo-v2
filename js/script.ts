const btns = document.querySelectorAll(".discover") as NodeListOf<HTMLButtonElement>

btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.preventDefault()
        alert("Commande passée !")
    })
})