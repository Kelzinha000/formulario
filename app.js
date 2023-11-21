function validaFormulario(){
    const nome = document.getElementById("nome").value;  // preste atenção no value, pois sem ele, o que irá aparecer no console.log é a linha do trecho de codigo 
    const email = document.querySelector('#email').value;
    const senha = document.getElementById("senha").value;

    // validação dos campos preenchidos 
    
      if(nome === ''|| email === '' || senha === ''){
      alert(`Por favor, insira suas informações!`)
     }

     const emailRegex = /^[^\s@]+@[^s@]+\.[^\s@]+$/

     if(!emailRegex.test(email)){
    alert("Por favor, insira um e-email válida")
     }

    //validação da senha
    if(senha.length > 8){
       alert("Limite de caracteres excedido")
    }else {
        alert("Cadrastro realizado com sucessso")
    }
}