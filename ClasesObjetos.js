//--heredar  clase padre e hijo--
class tvd{
    constructor(){
        console.log("Soy una serie de vampiros, brujas y lobos");
    }
    Persprincipal1(){
        return "Damon";
    }
    Persprincipal2(){
        return "Elena"
    }
}
// clase hija, la palabra extends significa hereda
class TO extends tvd{
    constructor(){
        super(); //hereda lo del padre
        console.log("Y yo soy una serie que se basa en los antepasados de la serie anterior");
    }
    Persprincipal(){
        return "Klaus"
    }
}

const series=new TO();
console.log(series.Persprincipal1());
console.log(series.Persprincipal2());
console.log(series.Persprincipal());



// arreglo con dos objetos 

const animalitos={
    propietario:"Daniela",
    edadPropietario:18,
    animalitosqueposee:[{
        aniuno:"Max",
        anidos:"Pily",
        anitres:"Aron"
    },{
       anicuatro:"Polo",
       anicinco:"Ares"
    }]
}

console.log(animalitos.propietario+ ' '+ animalitos.edadPropietario+' '+ animalitos.animalitosqueposee[0].aniuno+' '+animalitos.animalitosqueposee[1].anicuatro)