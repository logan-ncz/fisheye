class MaClass {
    constructor(test){
        this.mavariable = test ;
    }

    afficher(){
        console.log(this.mavariable)
    }
}

let InstanceDeMaClass = new MaClass('Thomas')
let InstanceDeMaClass2 = new MaClass('Logan')
InstanceDeMaClass.afficher()
InstanceDeMaClass2.afficher()
console.log(InstanceDeMaClass2)


function AfficherName(name){
    console.log(name)
}

AfficherName('Thomas et logan')


MyObject = {
    afficher(name){
        console.log(name)
    }
}

MyObject.afficher('Hello World')






//FActory Methode
function MaFactoryMethode(name){
   
    let mavariable = name

    function affiche(){
        console.log(this.mavariable)
    }

    return {
        mavariable,
        affiche
    }
}


let ObjetDeFactory = MaFactoryMethode('Thomas et logan')
ObjetDeFactory.affiche()



//Afficher mes photogrape (datas)
//Changer mes data en fonction du filtre