alert("Preencha as seguintes perguntas para se inscrever na maratona!")

var idade = Number(prompt("Digite a sua idade: "))
var atestado = 0
var distancia = 0
var minutos = 0
var pace = 0

if (idade >= 16 && idade < 60) {
    alert("Certo!")
    var atestado = prompt("Você tem atestado médico? responda sim ou não.")
    if (atestado == "sim" && atestado == "não") {
        var distancia = Number(prompt("Digite a distância desejada em Km: entre 5; 10; 21; 42"))
        var minutos = Number(prompt("Digite em quantos minutos faz a distância escolhida: "))
        var pace = minutos / distancia

        console.log(pace)
        if (minutos > 0) {
            if (distancia == 5 || distancia == 10){
            if (pace >= 5.75){
                alert("Você se classificou como Amador na prova de curta distância!")
            } else if (pace >= 4 || pace < 5.75) {
                alert("Você se classificou como Competitivo na prova de curta distância!")
            } else if (pace < 3) {
                alert("Você se classificou como Elite na prova de curta distância!")
                var competir = prompt("Você deseja participar da competição? responda sim ou não:")
                if (competir == "sim") {
                    alert("Certo, você vai competir.")
                } else {
                    alert("Ok, sem interesse de competir.")
                }
            } else {
                alert("Reprovado na etapa 4!")
            }
        } else if (distancia == 21 || distancia == 42) {
            if (pace >= 8.5 ) {
                alert("Você se classificou como Amador na prova de longa distância!")
            } else if (pace >= 4.5) {
                alert("Você se classificou como Competitivo na prova de longa distância!")
            } else if (pace < 3.25){
                alert("Você se classificou como Elite na prova de curta distância")
                var competir = prompt("Você deseja participar da competição? responda sim ou não:")
                if (competir == "sim") {
                    alert("Certo, você vai competir.")
                } else {
                    alert("Ok, sem interesse de competir.")
                }
            } else {
                alert("Reprovado na etapa 4!")
            }
        }
        } else {
            alert("Tempo inválido")
        }
    } else {
        alert("Reprovado na etapa 3, distância inválida!")
    } 
} else if (idade >= 60) {
    alert("Certo, mas é obrigado ter um atestado médico para participar!")
    var atestado = prompt("Você tem um atestado médico? responda sim ou não.")
    if (atestado == "sim") {
        var distancia = Number(prompt("Digite a distância desejada em Km: entre 5; 10; 21; 42"))
        var minutos = Number(prompt("Digite em quantos minutos faz a distância escolhida: "))
        var pace = minutos / distancia

        console.log(pace)
        if (minutos > 0) {
            if (distancia == 5 || distancia == 10){
                if (pace >= 5.75){
                    alert("Você se classificou como Amador na prova de curta distância!")
                } else if (pace >= 4 || pace < 5.75) {
                    alert("Você se classificou como Competitivo na prova de curta distância!")
                } else if (pace < 3) {
                    alert("Você se classificou como Elite na prova de curta distância!")
                    var competir = prompt("Você deseja participar da competição? responda sim ou não:")
                    if (competir == "sim") {
                        alert("Certo, você vai competir.")
                    } else {
                        alert("Ok, sem interesse de competir.")
                    }
                } else {
                    alert("Reprovado na etapa 4!")
                }
            } else if (distancia == 21 || distancia == 42) {
                if (pace >= 8.5 ) {
                    alert("Você se classificou como Amador na prova de longa distância!")
                } else if (pace >= 4.5) {
                    alert("Você se classificou como Competitivo na prova de longa distância!")
                } else if (pace < 3.25){
                    alert("Você se classificou como Elite na prova de curta distância")
                    var competir = prompt("Você deseja participar da competição? responda sim ou não:")
                    if (competir == "sim") {
                        alert("Certo, você vai competir.")
                    } else {
                        alert("Ok, sem interesse de competir.")
                    }
            } else {
                alert("Reprovado na etapa 4!")
            }
        } else {
            alert("Tempo inválido!")
        }
    } else {
        alert("Você precisa de um atestado médico.")
    } 

} else if (idade < 16) {
    alert("Infelizmente você não pode se inscreve. A idade mínima é 16 anos!")
}
