const prompt = require('prompt-sync')();

var i = 0;
var qtd = 0;

console.log("Bem Vindo ao Coliseu!")
while (qtd <= 0 || qtd >= 15) {
    qtd = parseInt(prompt("Quantos inimigos você acha que consegue enfrentar: "));
}
console.log("Tente a sorte e mostre suas habilidades de batalha para sair vivo!")

var player = {
    nome: prompt("Insira seu nome: "),
    vida: 100,
    poder: 10,
    defesa: 10,
    pocao: 3
}

function infoPlayer() {
    console.log("Nome:", player.nome);
    console.log("Vida:", player.vida);
    console.log("Poder:", player.poder);
    console.log("Defesa:", player.defesa);
    console.log("Poções:", player.pocao);
}

//Define qual inimigo irá enfrentar
function sortInimigo() {
    var sort = Math.floor(Math.random() * 2);
    if (sort === 0) {
        var inimigo = {
            nome: "Barbaro",
            vida: 50,
            poder: 10,
            defesa: 5
        }
    } else if (sort === 1) {
        var inimigo = {
            nome: "Goblin",
            vida: 40,
            poder: 5,
            defesa: 10
        }
    }
    return inimigo;
}

function infoInimigo() {
    console.log("");
    console.log("Informações do inimigo");
    console.log("Nome:", inimigo.nome);
    console.log("Vida:", inimigo.vida);
    console.log("Poder:", inimigo.poder);
    console.log("Defesa:", inimigo.defesa);
}

//Função para atacar
function atacar() {
    var resultAcao = sortAcao();
    if (resultAcao === 1) {
        player.vida -= inimigo.poder;
        inimigo.vida -= player.poder;
        if (player.vida <= 0) {
            player.vida = 0;
        }
        if (inimigo.vida <= 0) {
            inimigo.vida = 0;
        }
        console.log("Seu inimigo atacou");
        console.log("Sua vida:", player.vida);
        console.log("Inimigo vida:", inimigo.vida);
    } else if (resultAcao === 0) {
        inimigo.vida -= (player.poder - inimigo.defesa);
        if (inimigo.vida <= 0) {
            inimigo.vida = 0;
        }
        console.log("Seu inimigo defendeu");
        console.log("Sua vida:", player.vida);
        console.log("Inimigo vida:", inimigo.vida);
    }
}

//Função para defender
function defender() {
    var resultAcao = sortAcao();
    if (resultAcao === 1) {
        if (inimigo.poder < player.defesa) {
            player.vida += (inimigo.poder - player.defesa);
        } else {
            player.vida -= (inimigo.poder - player.defesa);
        }
        if (player.vida <= 0) {
            player.vida = 0;
        }
        console.log("Seu inimigo atacou");
        console.log("Sua vida:", player.vida);
        console.log("Inimigo vida:", inimigo.vida);
    } else if (resultAcao === 0) {
        console.log("Seu inimigo defendeu");
        console.log("Sua vida:", player.vida);
        console.log("Inimigo vida:", inimigo.vida);
    }
}

//Função para poção
function pocao() {
    var resultAcao = sortAcao();
    if (resultAcao === 1) {
        player.vida += 50;
        player.pocao--;
        player.vida -= (inimigo.poder - player.defesa);
        if (player.vida <= 0) {
            player.vida = 0;
        }
        console.log("Você curou 50 de vida")
        console.log("Seu inimigo atacou");
        console.log("Sua vida:", player.vida);
        console.log("Inimigo vida:", inimigo.vida);
    } else if (resultAcao === 0) {
        player.vida += 50;
        player.pocao--;
        console.log("Você curou 50 de vida")
        console.log("Seu inimigo defendeu");
        console.log("Sua vida:", player.vida);
        console.log("Inimigo vida:", inimigo.vida);
    }
}

//sortAcao 1 = Ataque
//sortAcao 0 = Defesa
function sortAcao() {
    var acao = Math.floor(Math.random() * 2);
    return acao;
}

//Batalha
while (i < qtd) {
    inimigo = sortInimigo();
    infoInimigo();
    while (true || escolha2 === 4) {
        console.log("");
        console.log("1 - Atacar || 2 - Defender || 3 - Poção || 4 - Seus atributos");
        var escolha2 = parseInt(prompt());
        switch (escolha2) {
            case 1:
                console.log("");
                atacar();
                break;
            case 2:
                console.log("");
                defender();
                break;
            case 3:
                console.log("");
                if (player.pocao > 0) {
                    pocao();
                } else {
                    console.log("Suas poções acabaram!");
                }
                break;
            case 4:
                infoPlayer();
                break;
        }
        console.log("");
        if (player.vida === 0 && inimigo.vida === 0) {
            console.log("Vocês morreram!");
            return;
        } else if (inimigo.vida === 0) {
            console.log("Você derrotou ele!");
            break;
        } else if (player.vida === 0) {
            console.log("Você morreu!");
            return;
        }
    }
    i++;
}

//Verific win
if (player.vida > 0) {
    console.log("");
    console.log("Suas informações finais:");
    infoPlayer();
    console.log("");
    console.log("Você ganhou de ", qtd, " inimigo(s)!");
    console.log("Parabéns");
}