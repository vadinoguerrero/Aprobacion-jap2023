let empezar = document.getElementsByClassName("empezar");
let renglon = document.getElementsByClassName("renglon");
let container= document.getElementsByClassName("container");
let texto = document.getElementsByClassName("texto");
let icon = document.getElementsByClassName("material-icons")
let nro = document.getElementsByClassName("nro")
let promedio = document.getElementsByClassName("promedio")
let evidencias = document.getElementsByClassName("evidencias")
let ingles = document.getElementsByClassName("ingles")
let comptrans = document.getElementsByClassName("comptrans")
let alumno = {}
let pregunta =



empezar[0].addEventListener("click", function(){
    container[0].classList.value = "container"
    empezar[0].classList.value = "empezar hidden"
    renglon[0].focus()
    pregunta = 1

})

icon[0].addEventListener("click", inicializarPreguntas)
renglon[0].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      inicializarPreguntas()
    }})

function cambioPregunta(){
    nro[0].innerHTML=`${pregunta}/11`
    renglon[0].value=""
    renglon[0].focus()
}
function inicializarPreguntas(){
    if(renglon[0].value!=""){
        switch (pregunta) {
            case 1:
            alumno.nombre= renglon[0].value
            texto[1].innerHTML="Ingrese el apellido del alumno"
            pregunta=2
            cambioPregunta()
            break;
      
            case 2:
            alumno.apellido= renglon[0].value
            texto[1].innerHTML="Ingrese el departamento del alumno"
            pregunta=3
            cambioPregunta()
            break;
      
            case 3:
            alumno.departamento= renglon[0].value
            texto[1].innerHTML="Ingrese el puntaje del alumno en la evaluación de Fundamentos de Programación"
            pregunta=4
            cambioPregunta()
            break;
      
            case 4:
            alumno.puntfundprog= renglon[0].value
            texto[1].innerHTML="Ingrese el puntaje del alumno en la evaluación de Programación Imperativa"
            pregunta=5
            cambioPregunta()
            break;
      
            case 5:
            alumno.puntprogimp= renglon[0].value
            texto[1].innerHTML="Ingrese el puntaje del alumno en la evaluación de Programación Orientada a Objetos"
            pregunta=6
            cambioPregunta()
            break;
      
            case 6:
            alumno.puntorientobj= renglon[0].value
            texto[1].innerHTML="Ingrese si el alumno cargó la evidencia en la evaluación de Fundamentos de Programación (Si o No)"
            pregunta=7
            cambioPregunta()
            break;
      
            case 7:
            alumno.evidfundprog= renglon[0].value.toLowerCase()
            texto[1].innerHTML="Ingrese si el alumno cargó la evidencia en la evaluación de Programación Imperativa (Si o No)"
            pregunta=8
            cambioPregunta()
            break;
        
            case 8:
            alumno.evidprogimp= renglon[0].value.toLowerCase()
            texto[1].innerHTML="Ingrese si el alumno cargó la evidencia en la evaluación de Programación Orientada a Objetos (Si o No)"
            pregunta=9
            cambioPregunta()
            break;
    
            case 9:
            alumno.evidorientobj= renglon[0].value.toLowerCase()
            texto[1].innerHTML="Ingrese el puntaje promedio del alumno en Inglés (Ingresar 100 en caso de haber exonerado)"
            pregunta=10
            cambioPregunta()
            break;
    
            case 10:
            alumno.puntingles= renglon[0].value
            texto[1].innerHTML="Ingrese si el alumno hizo las 10 lecciones de Competencias transversales (Si o No)"
            pregunta=11
            cambioPregunta()
            break;
    
            case 11:
            alumno.comptrans= renglon[0].value.toLowerCase()
            console.log(alumno)
            pregunta=0
            renglon[0].value=""
            texto[1].classList.value = "texto hidden"
            renglon[0].classList.value = "renglon hidden"
            nro[0].classList.value = "nro hidden"
            icon[0].classList.value = "material-icons hidden"
            container[0].style.height="60vh"
            texto[1].classList.value = "texto"
            promedio[0].classList.value="promedio"
            evidencias[0].classList.value="evidencias"
            ingles[0].classList.value="ingles"
            comptrans[0].classList.value="comptrans"
            icon[1].classList.value = "material-icons"
            icon[1].style.top= "52vh"

            analizarResultados();

            break;
    }}
    else{
        console.log("La respuesta no puede estar vacía")
    }
}



function analizarResultados(){
let resultado


alumno.promedio = (alumno.puntfundprog / 100 * 30) + (alumno.puntprogimp / 100 * 50) + (alumno.puntorientobj /100 * 20);

if(alumno.promedio<50){promedio[0].innerHTML=`Promedio: ${alumno.promedio}  😔`}
if(alumno.promedio>=50 && alumno.promedio<=59.99){promedio[0].innerHTML=`Promedio: ${alumno.promedio}  😐`}
if(alumno.promedio>=60){promedio[0].innerHTML=`Promedio: ${alumno.promedio}  🙂`}
if(alumno.evidfundprog=="si" && alumno.evidprogimp=="si" && alumno.evidorientobj=="si"){evidencias[0].innerHTML="Entrega de las evidencias:    🙂"}else{evidencias[0].innerHTML="Entrega de las evidencias:    😔"}
if(alumno.puntingles>50){ingles[0].innerHTML="Inglés:  🙂"} else{ingles[0].innerHTML="Inglés: 😔"}
if(alumno.comptrans=="si"){comptrans[0].innerHTML="Competencias transversales:   🙂"}else{comptrans[0].innerHTML="Competencias transversales:   😔"}




if(alumno.puntingles < 50 || alumno.comptrans == "no" || alumno.promedio < 50){
    resultado= "reprobado"
}

if(resultado!="reprobado"){
    
    if(alumno.promedio >= 60){
        resultado= "aprobado con examen supervisado"
        if(alumno.evidfundprog=="si" && alumno.evidprogimp=="si" && alumno.evidorientobj=="si"){
        resultado = "aprobado directamente"
        } 
    }

    if(alumno.promedio<60){
        resultado = "reprobado"
        if(alumno.evidfundprog=="si" && alumno.evidprogimp=="si" && alumno.evidorientobj=="si"){
            resultado = "aprobado con examen supervisado"
        }        
    }
}


texto[1].innerHTML= `El alumno ${alumno.nombre} ${alumno.apellido} del departamento de ${alumno.departamento}, ha ${resultado} la fase 1 de Jóvenes a Programar 2023`

  
}

icon[1].addEventListener("click", function(){
    location.reload();
})