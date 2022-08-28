// BLOQUE CLASES //

class Contenido{
    constructor(nombre,categoria,genero,tipo, img){
        this.nombre = nombre
        this.categoria = categoria
        this.genero = genero
        this.tipo = tipo
        this.img = img
    }
}

class Dato{
    constructor(email, pass){
        this.email = email
        this.pass = pass
    }
}

class Administrador extends Dato{
    constructor(email,pass){
        super(email,pass)
    }
}

class Usuario extends Dato{
    constructor(email,pass){
        super(email,pass)
    }
}

const administrador1 = new Administrador("admin1@capibara.com","1234")

const usuario1 = new Usuario("usuario@capibara.com","1234")

