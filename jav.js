let calculo="2.97"
let contador = 3

solicitarUsuario()


function Brian(){
    
    alert("Necesitamos comprobar que no eres un robot")
     let calculo = prompt("Cuanto m2 son 1,22 x 2,44 ")
    
      if (calculo==="2.97"){
        return FuncionesCompletas()
      }
        else {
          alert("DISLOGIN SECURITY")
          return solicitarUsuario()

        }


             

      
    

    
}

function solicitarUsuario() {
    let nombreIngresado =prompt ("Hola bienvenido a Droguerias S.A || Ingrese su usuario")
   
   
  let codigo = prompt("Ingrese Su codigo")

  



  if (nombreIngresado==="Brian" && codigo==="2718") {
     return Brian()
     
    }  
 

  else
  { (nombreIngresado!="Brian")
    alert("Hola " + nombreIngresado + " Eres invitado")
    
    return newUser
    

 }
    


 }



 function newUser(){
    
    let quimico = prompt ("Que Productos deseas comprar? \n 1 - Fosfato \n 2 - Potacio \n 3 - Mercurio \n 4 - Titanio ")
    
    if (quimico==="3"){
        alert("NO TIENES AUTORIZACION")
        return newUser()
    }
    else if (quimico==="1") {
        let quimico="Fosfato"
      let cantidad = prompt ("Perfecto Indica los GR")
     alert("Perfecto Encargaste " + cantidad + "gr "+ " de " +  quimico + " te lo enviaremos pronto")
    }

    else if (quimico==="2") {
        let quimico="Potacio"
      let cantidad = prompt ("Perfecto Indica los GR")
     alert("Perfecto Encargaste " + quimico +  "gr "+  cantidad + " te lo enviaremos pronto")
    }
   
    else if (quimico==="4") {
        let quimico="Titanio"
      let cantidad = prompt ("Perfecto Indica los GR")
     alert("Perfecto Encargaste " + quimico +  "gr "+  cantidad + " te lo enviaremos pronto")
    }
    
    
}
 
newUser()

 function FuncionesCompletas(){
  let quimico = prompt ("Que Productos deseas comprar? \n 1 - Fosfato \n 2 - Potacio \n 3 - Mercurio \n 4 - Titanio ")

if (quimico==="3" ){
  alert("Eres el unico autorizado")
  let quimico="Mercurio"
  let cantidad = prompt ("Perfecto Indica los GR")
  alert("Perfecto Encargaste " + cantidad + "gr "+ " de " +  quimico + " te lo enviaremos pronto ")
 
}
else if (quimico==="1") {
  let quimico="Fosfato"
let cantidad = prompt ("Perfecto Indica los GR")
alert("Perfecto Encargaste " + cantidad + "gr "+ " de " +  quimico + " te lo enviaremos pronto")
}

else if (quimico==="2") {
  let quimico="Potacio"
let cantidad = prompt ("Perfecto Indica los GR")
alert("Perfecto Encargaste " + quimico +  cantidad + " te lo enviaremos pronto")
}

else if (quimico==="4") {
  let quimico="Titanio"
let cantidad = prompt ("Perfecto Indica los GR")
alert("Perfecto Encargaste " + quimico +  cantidad + " te lo enviaremos pronto")
}


}















