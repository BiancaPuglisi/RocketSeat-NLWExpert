const perguntas = [
{
    pergunta: "Quem é considerado o fundador da literatura brasileira?",
    respostas: [
        "Machado de Assis",
        "José de Alencar",
        "Padre Antônio Vieira"
    ],
    correta: 2
},
{
    pergunta: "Qual obra é conhecida como o marco inicial do Realismo no Brasil?",
    respostas: [
        "Dom Casmurro",
        "Senhora",
        "O Guarani"
    ],
    correta: 0
},
{
    pergunta: "Quem é o autor de 'Memórias Póstumas de Brás Cubas'?",
    respostas: [
        "Machado de Assis",
        "Carlos Drummond de Andrade",
        "Clarice Lispector"
    ],
    correta: 0
},
{
    pergunta: "Em qual período literário se destaca a obra 'Iracema', de José de Alencar?",
    respostas: [
        "Romantismo",
        "Realismo",
        "Parnasianismo"
    ],
    correta: 0
},
{
    pergunta: "Qual escritor é associado ao Modernismo brasileiro e participou da Semana de Arte Moderna de 1922?",
    respostas: [
        "Mário de Andrade",
        "Carlos Drummond de Andrade",
        "Cecília Meireles"
    ],
    correta: 0
},
{
    pergunta: "Qual é a principal obra de Gonçalves Dias, importante representante do Indianismo?",
    respostas: [
        "Iracema",
        "O Guarani",
        "Canção do Exílio"
    ],
    correta: 2
},
{
    pergunta: "Quem é o autor de 'Grande Sertão: Veredas'?",
    respostas: [
        "João Guimarães Rosa",
        "Euclides da Cunha",
        "Machado de Assis"
    ],
    correta: 0
},
{
    pergunta: "Qual escritor é conhecido como o poeta dos escravos e autor de 'Navio Negreiro'?",
    respostas: [
        "Castro Alves",
        "Cruz e Sousa",
        "Olavo Bilac"
    ],
    correta: 0
},
{
    pergunta: "Em qual período literário se destaca a obra 'O Alienista', de Machado de Assis?",
    respostas: [
        "Romantismo",
        "Realismo",
        "Parnasianismo"
    ],
    correta: 1
},
{
    pergunta: "Quem é a autora de 'Quarto de Despejo', um relato sobre a vida nas favelas?",
    respostas: [
        "Clarice Lispector",
        "Adélia Prado",
        "Carolina Maria de Jesus"
    ],
    correta: 2
}
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

  // loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
            corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    }


    quizItem.querySelector('dl').appendChild(dt)
}
    quizItem.querySelector('dl dt').remove()    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
