const f = document.getElementById("formu")

f.addEventListener("submit", function(e){
    e.preventDefault();

const n1= Number(document.getElementById("val1").value)

    const n2= Number(document.getElementById("val2").value)

    const soma = n1+n2

    document.getElementById("Resultado").textContent=soma
})
