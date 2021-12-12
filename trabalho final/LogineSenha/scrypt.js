function mostrarsenha( ){
   
   let inputnome = document.querySelector( "#nome" );
   let ret = document.querySelector( "#NomedoUsuario" );
   let textNovo = document.createTextNode( `Bem vindo ${ ret.value } )`);
   let divnova = document.createElement ("div");
   s
   divnova.appendChild( textNovo );
   document.body.appendChild( divnova );
    
   let ret2 = document.querySelector( "#senhaUsuario" );
   let inputsenha = ret2.value;
   const senha = "ola";
   console.log( inputsenha )
   let lk = "Clic Aki";
   if( inputsenha == senha ){
    
    window.location.href = "src/trabalhofinal.html";
   
   }
   else{
    alert("Senha incorreta")
    
   }
}
let botaooK = document.querySelector( "#enviar" );

botaooK.onclick = mostrarsenha;

// console.log( botaooK );
// botaooK.onclick = mostrarsenha;
// var senhaUsuario = document.getElementById( "senhaUsuario" );
// console.log( senhaUsuario );
