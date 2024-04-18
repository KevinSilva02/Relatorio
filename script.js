const btnGenerate = document.getElementById("#generate-pdf")
const btnEdit = document.getElementById("#edit")
const btnPdf = document.getElementById("#pdf")

function limpaInput() {
    palavra.value = ""
    inicio.value = ""
    fim.value = ""
    data.value = ""
    endereco.value = ""
    responsavel.value = ""
    louvores.value = ""
    resumo.value = ""
    membros.value = ""
    acolhedores.value = ""

}

btnGenerate.addEventListener("click", () => {
    

    const divPalavra = document.querySelector('#divPalavra')
    const divInicio = document.querySelector('#divInicio')
    const divFim = document.querySelector('#divFim')
    const divData = document.querySelector('#divData')
    const divEnd = document.querySelector('#divEnd')
    const divResponsavel = document.querySelector('#divResponsavel')
    const divLouvor = document.querySelector('#divLouvor')
    const idResumo = document.querySelector('#divResumo')
    const divCasa = document.querySelector('#divMembros')
    const divAco = document.querySelector('#divAcolhedores')


    
    const palavra = document.querySelector('#palavra')
    const inicio = document.querySelector('#inicio')
    const fim = document.querySelector('#fim')
    const data = document.querySelector('#data')
    const endereco = document.querySelector('#endereco')
    const responsavel = document.querySelector('#responsavel')
    const louvores = document.querySelector('#louvores')
    const resumo = document.querySelector('#resumo')
    const membros = document.querySelector('#membros')
    const acolhedores = document.querySelector('#acolhedores')

    
    const contPalavra = document.createTextNode(palavra.value)
    const contInicio = document.createTextNode(inicio.value)
    const contFim = document.createTextNode(fim.value)
    const contData = document.createTextNode(data.value)
    const contEnd = document.createTextNode(endereco.value)
    const contResponsavel = document.createTextNode(responsavel.value)
    const contLouvor = document.createTextNode(louvores.value)
    const contResumo = document.createTextNode(resumo.value)
    const contCasa = document.createTextNode(membros.value)
    const contAcolhedores = document.createTextNode(acolhedores.value)
    
    

    divPalavra.appendChild(contPalavra)
    divInicio.appendChild(contInicio)
    divFim.appendChild(contFim)
    divData.appendChild(contData)
    divEnd.appendChild(contEnd)
    divResponsavel.appendChild(contResponsavel)
    divLouvor.appendChild(contLouvor)
    idResumo.appendChild(contResumo)
    divCasa.appendChild(contCasa)
    divAco.appendChild(contAcolhedores)

    

    const content = document.querySelector('.main-pdf')
    

    const cont = document.querySelector('.main')

    cont.className = 'main-pdf'

    

    content.className = 'show'
    

    
    const options = {
        margin: [10, 10, 10, 10],
        filename: "Relatorio.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: 'mm', format: "a4", orientation: 'portrait'}
    }
    
    
    //html2pdf().set(options).from(content).save();
    
    //limpaInput()
    
    //setTimeout(function(){location.reload()}, 2000)
    
    
})

btnEdit.addEventListener("click",() => {
    location.reload()
})

btnPdf.addEventListener("click", () => {
    const content = document.querySelector('.show')

    const options = {
        margin: [10, 10, 10, 10],
        filename: "Relatorio.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: 'mm', format: "a4", orientation: 'portrait'}
    }

    html2pdf().set(options).from(content).save();
})


