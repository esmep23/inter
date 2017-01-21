$( document ).ready(function() {
    console.log( "ready!" );
    $(".popup-overlay").click(function() {
      myApp.closePanel();
    });

    $(".panel-menu .list-block li").click(function() {
      console.log(this.className);
      $(".panel-menu .list-block li").removeClass('itemActivo');
      $(this).addClass('itemActivo');

    });

    
});

var cotizacion = [];
var total= 0;
var examen;
var cadena;
var precio=0;
var _cletraA=0;
var _cletraB=0;
var _cletraC=0;
var _cletraD=0;
var _cletraE=0;
var _cletraF=0;
var _cletraG=0;
var _cletraH=0;
var _cletraI=0;
var _cletraJ=0;
var _cletraK=0;
var _cletraL=0;
var _cletraM=0;
var _cletraN=0;
var _cletraO=0;
var _cletraP=0;
var _cletraQ=0;
var _cletraR=0; 
var _cletraS=0; 
var _cletraT=0; 
var _cletraU=0; 
var _cletraV=0; 
var _cletraW=0; 
var _cletraX=0; 
var _cletraY=0; 
var _cletraZ=0;

var url = "http://interlab.com.ec/wp-json/posts";
$.ajax({
  url: url,
  dataType: "json",
  success: function (data, textStatus, jqXHR) { 
    for (noti in data) {

      //Cambio Formato de Fecha
      var str = data[noti]['date'];
      var res = str.split("T");
      //console.log(res[0]);
      var mesok=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      var mes = res[0].split("-");
      agruparFecha = mes[2]+' de '+mesok[mes[1]-1]+' '+mes[0];
      //console.log(agruparFecha);
      data[noti]['date'] = agruparFecha;

      data[noti]['excerpt'] = limitar(data[noti]['title']);

    }
    myApp.params.template7Data['noticias'] = data;
    // Load page from about.html file to main View:

  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("error" + errorThrown)
  }
});

var urlExamenes = "http://interlab.com.ec/facebook/cotizador/php/examenes2.php";
$.ajax({
  url: urlExamenes,
  dataType: "json",
  success: function (data, textStatus, jqXHR) { 
    myApp.params.template7Data['cotizador'] = data;
    myApp.params.template7Data['index'] = data;
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("error" + errorThrown)
  }
});
/*
var urlSucursales = "http://interlab.com.ec//facebook/locales/php/listado_sucursales2.php"

$.ajax({
  url: urlSucursales,
  dataType: "json",
  success: function (data, textStatus, jqXHR) { 
    myApp.params.template7Data['sucursales'] = data;
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("error" + errorThrown)
  }
});
*/
//CLICK ANALIZO LA BUSQUEDA DE PDF
$( "#consultoPdf" ).click(function() {
  var inAppBrowserRef;
  arg0 = $('#orden').val();
  arg1 = $('#clave').val();
  if(( arg0 ) && (arg1)){

    $('.preload').css('display','block');
    $.ajax({
    url: 'http://interlab.com.ec/app/movil/respuesta_servidor.php',
    dataType: "text",
    data: {arg0: $('#orden').val(), arg1: $('#clave').val()},
    success: function (data, textStatus, jqXHR) { 
      console.log(data);
      if(data == 0){
        $('.preload').css('display','none');
        myApp.alert("Sus resultado de Exámenes aún no están disponibles. Recuerde que el tiempo aproximado es 24H", "INTERLAB");
      }
      if(data == 1){
        $('.preload').css('display','none');
        //alert(1);
        
        construURL = 'http://interlab.com.ec/app/movil/pdf.php?arg0='+arg0+'&arg1='+arg1;
        //alert(construURL);
        //cordova.InAppBrowser.open(construURL, '_blank', 'location=yes');
        window.open(construURL, '_system', 'location=no')
        //alert(2);
      }
      //cordova.InAppBrowser.open("http://interlab.com.ec/app/movil/pdf.php?arg0=7777111&arg1=21099", '_blank', 'location=yes');
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("error" + errorThrown)
      }
    });
    
  }else{
    myApp.alert("Por favor complete los campos", "INTERLAB");
  }


});

console.log(myApp.template7Data);
//mainView.router.load({pageName: 'noticias'});
/*
************************************************************************************************************************************************
*****HOME - NOTICIAS****************************************************************************************************************************
************************************************************************************************************************************************
*/
myApp.onPageBeforeInit('noticias', function (page) {
    myApp.closePanel();
});

/*
************************************************************************************************************************************************
*****COTIZADOR****************************************************************************************************************************
************************************************************************************************************************************************
*/
/*
var mySearchbar = myApp.searchbar('.searchbar', {
  onSearch: function(s){
  alert(1);
  },
  searchList: '.list-block-search',
  searchIn: '.item-title',
  customSearch: true,
  onClear: function(s){
    alert('Clear!!!');
  }
});

$('.list-block-search').on('clearSearch', function(){
  console.log('x');
})
*/
myApp.onPageBeforeInit('cotizador', function (page) {

    $('.cotizadorDown').css('display','none');
    $(".examenes").css('display','none'); 


    
    myApp.closePanel();

    $('.searchbar-input').keypress(function() {
      $(".menuletters").css('display','none');
      $(".popup-23 .examenes.list-block li").css('display', 'block');
      $('.popup-23 .examenes.list-block li').removeAttr('style');
    });

    $('.searchbar-cancel').click(function() {
      $(".menuletters").css('display','block');
      $(".examenes").css('display','none');
      $(".popup-23 .examenes.list-block li").css('display', 'none');
    });

    $(".agregar-examenes").click(function() {

      //Cambio icono
      $('.cotizadorUp').css('display','none');
      $('.cotizadorDown').css('display','block');
        setTimeout(function(){
          $('.popup-overlay').removeClass('modal-overlay-visible');
        },100);

    });

    $(".close-popup").click(function() {
      $('.cotizadorUp').css('display','block');
      $('.cotizadorDown').css('display','none');
    });


    $(".letter").click(function() {

      $(".popup-23 .examenes.list-block li").css('display', 'none');

      letra_buscar = $(this).text();
      //oculto abecedario
      //myApp.closeModal('.popup-letras');
      //myApp.popup('.popup-23');
      //$('.popup-overlay').removeClass('modal-overlay-visible');
      $(".menuletters").css('display','none');
      $(".examenes").css('display','block'); 

      var exist = $( ".examenes.list-block li" ).hasClass( letra_buscar);
      if(exist == false){
         $(".no-hay-letras").css('display','block');
      }else{
        $(".examenes.list-block li."+letra_buscar).css('display','block');
        $(".no-hay-letras").css('display','none');
      }
    });


    $(document).on('change', '#cbox', function() {
      examen = $(this).val();
      cadena = examen.split("|");
      //Agrego a mi listado
      /*
       --------------------------------
       --------------------------------
      */

      $(".pagina-cotizacion").css('display','block');

      if (this.checked){
        //ID agregar a objeto
        console.log(examen);
        console.log('si exite? '+cotizacion.indexOf(examen));
        if( cotizacion.indexOf(examen) >= 0  ){}else{
          cotizacion.push(examen);
          //precio ir sumando
          precio = cadena[3];
          total = Number(total) + Number(precio);
          $('.valor_de_Examenes .texto').html('$'+total.toFixed(2));
        }
        console.log(cotizacion);

        actualizoMiLista();
        //alert(total);


        //sumo letra
        switch (cadena[0]) {
          case "A":
            _cletraA++;
            //console.log(_cletraA);            //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
            break;
          case "B":
            _cletraB++;
            //console.log(_cletraB);
            break;
          case "C":
            _cletraC++;
            //console.log(_cletraC);
            break;
          case "D":
            _cletraD++;
            //console.log(_cletraD);
            break;
          case "E":
            _cletraE++;
            //console.log(_cletraE);
            break;
          case "F":
            _cletraF++;
            //console.log(_cletraF);
            break;
          case "G":
            _cletraG++;
            //console.log(_cletraG);
            break;
          case "H":
            _cletraH++;
            //console.log(_cletraH);
            break;
          case "I":
            _cletraI++;
            //console.log(_cletraI);
            break;
          case "J":
            _cletraJ++;
            //console.log(_cletraJ);
            break;
          case "K":
            _cletraK++;
            //console.log(_cletraK);
            break;
          case "L":
            _cletraL++;
            //console.log(_cletraL);
            break;
          case "M":
            _cletraM++;
            //console.log(_cletraM);
            break;
          case "N":
            _cletraN++;
            //console.log(_cletraN);
            break;
          case "O":
            _cletraO++;
            //console.log(_cletraO);
            break;
          case "P":
            _cletraP++;
            //console.log(_cletraP);
            break;
          case "Q":
            _cletraQ++;
            //console.log(_cletraQ);
            break;
          case "R":
            _cletraR++;
            //console.log(_cletraR);
            break;
          case "S":
            _cletraS++;
            //console.log(_cletraS);
            break;
          case "T":
            _cletraT++;
            //console.log(_cletraT);
            break;
          case "U":
            _cletraU++;
            //console.log(_cletraU);
            break;
          case "V":
            _cletraV++;
            //console.log(_cletraV);
            break;
          case "W":
            _cletraW++;
            //console.log(_cletraW);
            break;
          case "X":
            _cletraX++;
            //console.log(_cletraX);
            break;
          case "Y":
            _cletraY++;
            //console.log(_cletraY);
            break;
          case "Z":
            _cletraZ++;
            //console.log(_cletraZ);
            break;
        }

      } else {
      //Elimino de mi listado
      /*
        --------------------------------
        --------------------------------
      */
        //ID agregar a objeto

        //precio ir sumando
        precio = cadena[3];
        total = Number(total) - Number(precio);
        $('.valor_de_Examenes .texto').html('$'+total.toFixed(2));
        //alert(total);
      }

    });

   
    

});



//
myApp.onPageInit('cotizador', function (page) {
    actualizoMiLista();
    $('.valor_de_Examenes .texto').html('$'+total.toFixed(2));

    
});
/*
************************************************************************************************************************************************
*****TALENTO HUMANO*****************************************************************************************************************************
************************************************************************************************************************************************
*/
myApp.onPageBeforeInit('talentohumano', function (page) {
    myApp.closePanel();
});
/*
************************************************************************************************************************************************
*****SUCURSALES*********************************************************************************************************************************
************************************************************************************************************************************************
*/
myApp.onPageBeforeInit('sucursales', function (page) {
    myApp.closePanel();

    mapa('-2.1694135', '-79.8963321', 'Laboratorio Principal', '19', 'Diagonal a C.C. San Marino Shopping. | 04-2594010 | Lunes a <b>Domingo</b> - Atención 24 horas');

});
/*
************************************************************************************************************************************************
*****INDEX***********************************************************************************************************************************
************************************************************************************************************************************************
*/
myApp.onPageBeforeInit('index', function (page) {
    myApp.closePanel();

//Orden es 7777111 y la Clave 21099
});

/*
************************************************************************************************************************************************
*****FUNCION ADICIONAL MAPA*********************************************************************************************************************
************************************************************************************************************************************************
*/
function mapa(latitud, longitud, ubicacion, zoom, infor){
    $("#map").googleMap({
      zoom: 18,
      type: "ROADMAP",
      url: 'http://www.tiloweb.com',
    });
    $("#map").addMarker({
      coords: [latitud, longitud],
      title: ubicacion,
      text: infor 
    });
}


function eliminodeMiLista(id){
  //alert(id);
  $('.cargo_cotizador .miLista').empty();
      for (var ele in cotizacion) {
        
        var lista = cotizacion[ele];
        
        var exa = lista.split("|");
       
        if(exa[1]  == id){
          
          cotizacion.splice(ele, 1);
          $('.id-'+id).prop('checked', false);
          //console.log(ele);

          //precio ir restando
          precio = exa[3];
          total = Number(total) - Number(precio);
          $('.valor_de_Examenes .texto').html('$'+total.toFixed(2));

          //pregunto si ha objetos en una letra
          //sumo letra
            switch (exa[0]) {
              case "A":
                _cletraA=_cletraA-1;
                if(_cletraA == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraA);            //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
                break;
              case "B":
                _cletraB=_cletraB-1;
                if(_cletraB == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraB);
                break;
              case "C":
                _cletraC=_cletraC-1;
                if(_cletraC == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraC);
                break;
              case "D":
                _cletraD=_cletraD-1;
                if(_cletraD == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraD);
                break;
              case "E":
                _cletraE=_cletraE-1;
                if(_cletraE == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraE);
                break;
              case "F":
                _cletraF=_cletraF-1;
                if(_cletraF == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraF);
                break;
              case "G":
                _cletraG=_cletraG-1;
                if(_cletraG == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraG);
                break;
              case "H":
                _cletraH=_cletraH-1;
                if(_cletraH == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraH);
                break;
              case "I":
                _cletraI=_cletraI-1;
                if(_cletraI == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraI);
                break;
              case "J":
                _cletraJ=_cletraJ-1;
                if(_cletraJ == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraJ);
                break;
              case "K":
                _cletraK=_cletraK-1;
                if(_cletraK == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraK);
                break;
              case "L":
                _cletraL=_cletraL-1;
                if(_cletraL == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraL);
                break;
              case "M":
                _cletraM=_cletraM-1;
                if(_cletraM == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraM);
                break;
              case "N":
                _cletraN=_cletraN-1;
                if(_cletraN == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraN);
                break;
              case "O":
                _cletraO=_cletraO-1;
                if(_cletraO == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraO);
                break;
              case "P":
                _cletraP=_cletraP-1;
                if(_cletraP == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraP);
                break;
              case "Q":
                _cletraQ=_cletraQ-1;
                if(_cletraQ == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraQ);
                break;
              case "R":
                _cletraR=_cletraR-1;
                if(_cletraR == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraR);
                break;
              case "S":
                _cletraS=_cletraS-1;
                if(_cletraS == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraS);
                break;
              case "T":
                _cletraT=_cletraT-1;
                if(_cletraT == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraT);
                break;
              case "U":
                _cletraU=_cletraU-1;
                if(_cletraU == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraU);
                break;
              case "V":
                _cletraV=_cletraV-1;
                if(_cletraV == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraV);
                break;
              case "W":
                _cletraW=_cletraW-1;
                if(_cletraW == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraW);
                break;
              case "X":
                _cletraX=_cletraX-1;
                if(_cletraX == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraX);
                break;
              case "Y":
                _cletraY=_cletraY-1;
                if(_cletraY == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraY);
                break;
              case "Z":
                _cletraZ=_cletraZ-1;
                if(_cletraZ == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraZ);
                break;
            }

          
        }
       
      }
      actualizoMiLista();
}

function actualizoMiLista(){
  $('.cargo_cotizador .miLista').empty();
  for (var ele in cotizacion) {
    var lista = cotizacion[ele];
    var exa = lista.split("|");
    $('.cargoLetra-'+exa[0].toLowerCase()).css('display','block');
    $('.cargo_cotizador .cargoLetra-'+exa[0].toLowerCase()+' .listado-'+exa[0].toLowerCase()).append('<li class="item-content"><div class="item-inner"><div class="item-title">'+exa[2]+'</div><div class="item-after">'+exa[3]+'<div onclick="eliminodeMiLista('+exa[1]+')"><i class="fa fa-times" aria-hidden="true"></i></div></div></div></li>'); 
  }
  if (cotizacion.length === 0) {
  }else{
    $('.vacio_cotizacion').css('display','none');
  }

  //$(".examenes").css('display','none');
}



/*
************************************************************************************************************************************************
***** INTERLAB FUNCIONES   *********************************************************************************************************************
************************************************************************************************************************************************
*/

function limitar(texto){
  var cont;
  var caracteres = 40;
  //var texto = "Tecnología moderna en el diagnóstico y control del paciente con  VIH/SIDA";
  
  console.log(texto.length);
  if(texto.length > caracteres){
    texto = texto.substring(0, caracteres)+"...";
  }
  return texto
}