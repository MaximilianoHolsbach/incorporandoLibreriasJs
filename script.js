// SCRIPT DE PAGINA DE INICIO DE SECION //

const formLog = document.getElementById("formLog")

// BLOQUE DE VALIDACION //

formLog.addEventListener('submit',(event)=>{
    event.preventDefault()
    const datosform = new FormData(event.target)
    const dato = new Dato(datosform.get("email").toLocaleLowerCase(),datosform.get("pass").toLocaleLowerCase())
    formLog.reset()
    if(dato['email']===administrador1['email'] && dato['pass']===administrador1['pass']){// REDIRIJO AL HTML SI LOS DATOS SON CORRECTOS
        window.location.href = 'admin.html'
    }else if(dato['email']===usuario1['email'] && dato['pass']===usuario1['pass']){// REDIRIJO AL HTML SI LOS DATOS SON CORRECTOS
        window.location.href = 'user.html'
    }else{// UTILIZO LIBRERIA DE SWEET ALERT PARA INFORMAR DEL ERROR EN LA CARGA DEL DATO
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Los datos ingresados son incorrectos',
          }) 
    }
})
