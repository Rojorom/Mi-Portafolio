const almac = document.querySelector('.almac');

almac.addEventListener('click',function(){
    document.getElementById('barra').classList.toggle('active');
});


function writing(str){
  let arrFromStr = str.split('');   //split tranforma el string en Array
  let i = 0;
  let printStr = setInterval(function(){

  //  document.body.style.fontSize = '';
   document.querySelector('.text').innerHTML += arrFromStr[i];
   i++;
   if (i === arrFromStr.length){
    clearInterval(printStr);
    // document.body.style.fontSize = '60px';
    // document.body.style.color = 'steelblue';
   }
  },100);
 };
 writing('Ve unos de los proyectos personales. "La gente Genial desarrolla con Nosotros " ');


 function writingII(str){
  let arrFromStr = str.split('');   //split tranforma el string en Array
  let i = 0;
  let printStr = setInterval(function(){

   document.body.style.fontSize = '';
   document.querySelector('.slogan').innerHTML += arrFromStr[i];
   i++;
   if (i === arrFromStr.length){
    clearInterval(printStr);
    // document.body.style.fontSize = '60px';
    // document.body.style.color = 'steelblue';
   }
  },70);
 };
 writingII('solicita tu pagina 100% personalizada y adaptable a cualquier dispositivo o  cualquier aplicacion al mejor precio del mercado ;) " ');
