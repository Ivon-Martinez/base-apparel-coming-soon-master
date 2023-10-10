class mensajeError {
    constructor(mensaje){
    this.mensaje=mensaje;
    }
  }

  const myMensaje=new mensajeError("Please provide a valid email");
  
  function validateEmail(emailId)
  {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailId.value.match(mailformat))
    {document.form1.text1.focus();
    return true;
    }
    else{
      document.getElementById("demo").innerHTML=myMensaje.mensaje;
      return false;
    }
    
  }