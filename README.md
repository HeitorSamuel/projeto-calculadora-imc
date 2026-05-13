# ⚖️ Calculadora de IMC

Este é um projeto de uma **Calculadora de Índice de Massa Corporal (IMC)** desenvolvida para web. O objetivo é fornecer uma ferramenta simples e intuitiva para que usuários possam monitorar sua saúde básica através da relação entre peso e altura.

---

## 🚀 Sobre o Projeto

O projeto consiste em uma interface moderna e responsiva onde o usuário insere seu peso e altura. A aplicação processa esses dados e retorna não apenas o valor numérico do IMC, mas também a classificação de saúde correspondente (Abaixo do peso, Peso normal, Obesidade, etc.), seguindo os padrões da Organização Mundial da Saúde (OMS).

---

## 🛠️ Funcionalidades

- **Cálculo de IMC Real-time:** Processamento imediato ao clicar no botão.
- **Validação de Campos:** O sistema impede cálculos com campos vazios ou valores inválidos (como números negativos ou zero).
- **Classificação de Saúde:** Exibe mensagens dinâmicas baseadas no resultado.
- **Limpeza de Dados:** Botão dedicado para resetar o formulário e preparar para um novo cálculo.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela (computadores e celulares).
- **Feedback Visual:** Uso de cores para destacar resultados que exigem atenção.

---

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias fundamentais da web:

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização avançada com Flexbox, sombras internas e gradientes.
* **JavaScript (Vanilla):** Lógica de cálculo, manipulação do DOM e validações.

---

## 🎨 Layout

O design foi pensado para ser limpo e profissional, utilizando:
* Fundo com degradê linear.
* Inputs customizados com foco suave.
* Botões com efeitos de transição e *hover*.

---

## ⚙️ Como usar o projeto

1.  Faça o download ou clone este repositório.
2.  Abra o arquivo `index.html` em qualquer navegador moderno.
3.  Insira sua **Altura** (ex: 1.75).
4.  Insira seu **Peso** (ex: 70).
5.  Clique em **CALCULAR** para ver o resultado.
6.  Use o botão **LIMPAR** para realizar uma nova consulta.

---

## 📝 Regras de Negócio (Cálculo)

O cálculo é baseado na fórmula oficial:
`IMC = peso / (altura * altura)`

| IMC | Classificação |
| :--- | :--- |
| Menor que 18.5 | Abaixo do Peso |
| Entre 18.5 e 24.9 | Peso Normal |
| Entre 25.0 e 29.9 | Sobrepeso |
| Entre 30.0 e 34.9 | Obesidade Grau I |
| Entre 35.0 e 39.9 | Obesidade Grau II |
| Maior que 40.0 | Obesidade Grau III |

---

Desenvolvido por Heitor Samuel
