# 🧮 Painel Automático de Tabuadas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Projeto educacional desenvolvido para gerar automaticamente todas as tabuadas de 1 a 10 em um painel organizado e estilizado.

O sistema utiliza estruturas de repetição aninhadas (`while`) para criar dinamicamente múltiplos cartões contendo cada tabuada.

---

## 🎯 Objetivo

Este projeto tem como finalidade:

- Praticar estrutura de repetição `while`
- Trabalhar loops aninhados
- Manipular o DOM dinamicamente
- Utilizar template strings
- Criar layout com Flexbox
- Desenvolver organização visual com CSS

---

## 🧠 Funcionamento do Sistema

Ao clicar no botão **"Gerar Tabuada"**, o sistema:

1. Inicia um contador de 1 até 10
2. Para cada número, cria um cartão (`card`)
3. Dentro de cada cartão, executa outro `while` de 1 até 10
4. Exibe todas as multiplicações do número correspondente
5. Insere tudo dinamicamente na `div` de resultado

---

## 💻 Lógica Utilizada

```javascript
function gerarTabuada() {

  let resultadoFinal = "";
  let numero = 1;

  while (numero <= 10) {
    resultadoFinal += `<div class='card'>`;
    resultadoFinal += `<h3>Tabuada do ${numero}</h3>`;

    let multiplicador = 1;

    while (multiplicador <= 10) {
      resultadoFinal += `${numero} x ${multiplicador} = ${numero * multiplicador} <br>`;
      multiplicador++;
    }

    resultadoFinal += `</div>`;
    numero++;
  }

  document.getElementById("resultado").innerHTML = resultadoFinal;
}
```

---

## 🔎 O que o código faz

- Utiliza dois loops `while`
- O primeiro controla o número base (1 até 10)
- O segundo calcula a multiplicação de 1 até 10
- Cria cartões dinamicamente usando template strings
- Insere todo o conteúdo no HTML com `innerHTML`

---

## 🧮 Resultado Gerado

O sistema exibe:

- Tabuada do 1 até a tabuada do 10
- Cada tabuada organizada em um cartão
- Layout responsivo com efeito hover

Exemplo de um dos cartões:

```
Tabuada do 5
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

## 📂 Estrutura do Projeto

```
📁 painel-tabuadas-js
│
├── index.html   → Estrutura da página
├── style.css    → Estilização e layout com Flexbox
├── script.js    → Lógica com while aninhado
└── settings.json → Configuração do Live Server
```

---

## 🎨 Layout

O projeto possui:

- Container centralizado
- Fundo em tom verde
- Cartões estilizados para cada tabuada
- Efeito hover com animação de escala
- Layout com Flexbox
- Interface organizada e moderna

---

## 🛠️ Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Estrutura de repetição `while`  
- Loops aninhados  
- Template Strings  
- Manipulação do DOM  
- Flexbox  

---

## 📚 Conceitos Trabalhados

- Estruturas de repetição
- Loops aninhados
- Operadores matemáticos
- Manipulação dinâmica de conteúdo
- Organização visual com CSS
- Interatividade com `onclick`

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/painel-tabuadas-js.git
```

2. Abra o arquivo `index.html` no navegador.

Ou utilize a extensão **Live Server** no VS Code.

---

## 👩‍💻 Autora

Rafaela Oliveira  
Estudante de Desenvolvimento de Sistemas  

---

## 📜 Licença

Projeto desenvolvido para fins educacionais.
