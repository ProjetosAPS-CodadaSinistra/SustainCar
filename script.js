
/* SELEÇÃO DAS MARCAS */
const optionMenu = document.querySelector(".wrapper"),
    selectBtn = optionMenu.querySelector(".select-btn-span"),
    options = optionMenu.querySelectorAll(".opcao"),
    spanText = optionMenu.querySelector(".texto-span"),
    imagemCarro = document.getElementById("carro-imagem");

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));
options.forEach(opcao => {
    opcao.addEventListener('click', () => {
        let opcaoSelecionada = opcao.querySelector(".spanLi").innerText;
        spanText.innerText = opcaoSelecionada;
        let opcaoId = opcao.querySelector(".spanLi").id;
        imagemCarro.src = `../imagens/img_carros/${opcaoId}.jpg`;
        imagemCarro.style.display = 'block'; 

        optionMenu.classList.remove('active');
    });
});