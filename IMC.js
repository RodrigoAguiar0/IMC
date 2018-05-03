function calcularIMC() {

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let idade = document.getElementById("idade").value;
    let imc = peso/((altura / 100)*(altura / 100));
    let resultado = "Seu IMC é " + imc.toFixed(2) + ".";
    let mensagemAdicional;

    if(idade < 20){
        mensagemAdicional = "Nossa, mas você é jovem mesmo. Consulte seu médico, esse IMC pode não estar correto pra você.";
    } else if (20 <= idade < 60){
        mensagemAdicional = "Wow, você tem a idade ideal para o cálculo IMC."
    }else{
        mensagemAdicional = "Você parece ser uma pessoa experiente, e com isso o seu IMC muda um pouco. Consulte seu médico."
    }

    if(18.5 < imc){
        resultado += " Seu imc está muito baixo! Procure um médico para controlar seu peso."
    } else if (18.5 <= imc <= 24.9){
        resultado += " Seu imc está normal. Mantenha a dieta, está indo bem!"
    }else if (25 <= imc <29.9){
        resultado += " Tome cuidado! Você está acima do peso, fale com seu médico para controlar seu peso"
    }

    document.getElementById("imc").innerHTML = resultado;
    document.getElementById("mensagemAdicional").innerText = mensagemAdicional;
}
