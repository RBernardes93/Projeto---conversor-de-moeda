/* PROGRAMA CONVERSOR MOEDA  JAVASCRIPTS */



const convertButton = document.querySelector(".convert-button") /* primriro - mapear botao */
const currencySelect = document.querySelector(".currency-select")

function convertValues() { /* terceiro - criar a funçao */


    const inputCurrencyValue = document.querySelector(".input-value").value /* quarto - mapear o valor do Input */

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* Valor do Real */

    const currencyValueConverted = document.querySelector(".currency-value") /* Valor de outra moeda(Dolar ou Euro) */


    const dolarToday = 5.2 /* Valor do Dólar */
    const euroToday = 6.2 /* Valor do Dólar */

    const convertedValueDolar = inputCurrencyValue / dolarToday /* Funçao Matematica */
    const convertedValueEuro = inputCurrencyValue / euroToday /* Funçao Matematica */


    if (currencySelect.value == "dolar") { // se no select selecionado o valor do dólar, entre aqui.

        /* Valor convertido abaixo da bandeira do USA */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { /* (new Intl.NumberFormat => Ferramenta para formataçao de números), (en-US)=> Idioma e país */
            style: "currency",  /* Estilo Moeda */
            currency: "USD" /* Moeda do USA(Dólar) */
        }).format(convertedValueDolar)// valor a converter

    }

    if (currencySelect.value == "euro") { // se no select selecionado o valor do dólar, entre aqui.

        /* Valor convertido abaixo da bandeira do USA */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { /* (new Intl.NumberFormat => Ferramenta para formataçao de números), (en-US)=> Idioma e país */
            style: "currency",  /* Estilo Moeda */
            currency: "EUR" /* Moeda do USA(Euro) */
        }).format(convertedValueEuro) //valor a converter

    }


    /* colocar valor do Real abaixo da bandeira do Brasil*/
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", /* Estilo Moeda */
        currency: "BRL" /*Moeda do Brasil(Real) */
    }).format(inputCurrencyValue) //valor de entrada



    console.log(convertedValueDolar) /* quinto - mostrar valor convertido  */
    console.log(convertedValueEuro) /* quinto - mostrar valor convertido  */
    

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
   

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src ="./img.png/Dolar.png"
     
    }


    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img.png/Euro.png"
        
    
    }

    convertValues()


     
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) /* segundo - adcionar o evento (CLICK) */
