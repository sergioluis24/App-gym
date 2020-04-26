// Variables globales
let activity_value;
let rutina=[];
let data_db
let estate = document.querySelector('#estate');
// Funciones
const guardar_db = (rutina) =>{
    localStorage.setItem('rutina',JSON.stringify(rutina));
    
}
const load_alerts = () =>{
    data_db= JSON.parse(localStorage.getItem('rutina'));
    alerts.innerHTML = ``
    data_db.forEach(element => {
        if(element.estado==='false'){

            alerts.innerHTML += `
          <div class="alert danger-color my-3 d-flex text-white" role="alert">
          <div class="mr-auto">
            <i class="fas fa-child mr-2"></i>
            <b class="">${element.actividad}</b>
            <span class="ml-2">-${element.estado==="false"?"No completado":"Completado"}</span>
          </div>                
          <div class="ml-auto">
          <i class="fas fa-check"></i><i class="far fa-trash-alt ml-2"></i>
          </div>
         </div>
          `

          }else{
              
            alerts.innerHTML += `
          <div class="alert success-color my-3 d-flex text-white" role="alert">
          <div class="mr-auto">
            <i class="fas fa-child mr-2"></i>
            <b class="">${element.actividad}</b>
            <span class="ml-2">-${element.estado==="false"?"No completado":"Completado"}</span>
          </div>                
          <div class="ml-auto">
          <i class="fas fa-check"></i><i class="far fa-trash-alt ml-2"></i>
          </div>
         </div>
          `
          

          }
    });
    return;
}
//Clases
class Rutina{
    
    constructor(actividad){
        this.actividad = actividad;
        this.estado = 'false';
    }
}
// Eventos
let envio;
let formUI = document.querySelector('#form');
let activityUI = document.querySelector('#activity');
let alerts = document.querySelector('#alerts');
let load_page = document.addEventListener('DOMContentLoaded',()=>{
let valid =[];
valid = JSON.parse(localStorage.getItem('rutina'));
 if(valid==null){
    console.log('No hay nada bro')
 }else{
     rutina = JSON.parse(localStorage.getItem('rutina'));
     alerts.innerHTML = ``
      rutina.forEach(element => {
          if(element.estado==='false'){

            alerts.innerHTML += `
          <div class="alert danger-color my-3 d-flex text-white" role="alert">
          <div class="mr-auto">
            <i class="fas fa-child mr-2"></i>
            <b class="">${element.actividad}</b>
            <span class="ml-2">-${element.estado==="false"?"No completado":"Completado"}</span>
          </div>                
          <div class="ml-auto">
          <i class="fas fa-check"></i><i class="far fa-trash-alt ml-2"></i>
          </div>
         </div>
          `

          }else{
              
            alerts.innerHTML += `
          <div class="alert success-color my-3 d-flex text-white" role="alert">
          <div class="mr-auto">
            <i class="fas fa-child mr-2"></i>
            <b class="">${element.actividad}</b>
            <span class="ml-2">-${element.estado==="false"?"No completado":"Completado"}</span>
          </div>                
          <div class="ml-auto">
          <i class="fas fa-check"></i><i class="far fa-trash-alt ml-2"></i>
          </div>
         </div>
          `
          

          }
          
      });
 }



});
formUI.addEventListener('submit',(e)=>{
    e.preventDefault()
    activity_value = activityUI.value;
    rutina.push(new Rutina(activity_value));
    formUI.reset();
    guardar_db(rutina);
    load_alerts();
})

alerts.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log(e.path['0'].childNodes['1'].childNodes['3'].innerHTML);
     let text_activity;
     let crud = e.target.className;
     let index_;
      if(crud ==="fas fa-check" || crud === "far fa-trash-alt ml-2"){
          text_activity = e.path['2'].childNodes['1'].childNodes['3'].innerHTML;
           if(crud === "far fa-trash-alt ml-2"){
               rutina.forEach((element,index)=> {
                   if(element.actividad === text_activity){
                       index_ = index;
                   }
               });
               rutina.splice(index_,1);
               guardar_db(rutina);
               load_alerts();
           }
           if(crud ==="fas fa-check"){
            rutina.forEach((element,index)=> {
                if(element.actividad === text_activity){
                    element.estado = 'Hecho';
                    guardar_db(rutina);
                    load_alerts();
     
                }
            });

           }
       }
    // console.log(crud);
    // if(){}
    // console.log(e.path['0'].childNodes['1'].childNodes['3'].innerHTML)
    //
});