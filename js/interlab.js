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
var globalLetras=0;

/*
--------------------------------------------------------------------------------
TINYURL
--------------------------------------------------------------------------------
*/
var apiKey = 'AIzaSyAKpFDcKIy374CFA7c4TZ13AOd1hXKUegw';
function load() {
  gapi.client.setApiKey(apiKey);
  gapi.client.load('urlshortener', 'v1', showInputs);
}
function showInputs() {
  //document.getElementById('requestFields').style.display = '';
}

function makeRequest() {
  function writeResponse(resp) {
  var responseText;
  if (resp.code && resp.data[0].debugInfo == 'QuotaState: BLOCKED') {
    responseText = 'Invalid API key provided. Please replace the "apiKey" value with your own.';
  } else {
    responseText = 'Short URL is: ' + resp.id;
  }
  //var infoDiv = document.getElementById('info');
  //infoDiv.innerHTML = '';
  //infoDiv.appendChild(document.createTextNode(responseText));
  //alert(responseText);
  pDf(responseText);
}
  //var longUrl = document.getElementById('longUrl').value;
  var longUrl = 'https:\/\/docs.google.com\/gview?embedded=true&url=http:\/\/181.39.15.90\/ConsultaWeb\/pdf\/print_2621709.PDF';
  console.log(longUrl);
  var request = gapi.client.urlshortener.url.insert({
    'longUrl': longUrl
  });
  request.execute(writeResponse);
}

/*
--------------------------------------------------------------------------------
TINY URL
--------------------------------------------------------------------------------
*/
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

var urlCiudades = "http://interlab.com.ec/app/movil/actions/ciudades.php"

    $.ajax({
      url: urlCiudades,
      dataType: "json",
      success: function (data, textStatus, jqXHR) { 
        //myApp.params.template7Data['sucursales'] = data;

        if(data!=null && data!='' && data!='[]'){ 
              
              $.each(data,function(key,value){ 
                id = value.id;
                ciudad = value.ciudad;
                $('#ciudad').append('<option value="'+id+'">'+ciudad+'</option>');
              });
            }   

      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("error" + errorThrown)
      }
    });

var urlSucursales = "http://interlab.com.ec/app/movil/actions/sucursales.php";
$.ajax({
  url: urlSucursales,
  dataType: "json",
  success: function (data, textStatus, jqXHR) { 
    
    myApp.params.template7Data['sucursales']=data;
    
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("error" + errorThrown)
  }
});


//CLICK ANALIZO LA BUSQUEDA DE PDF
/*$( "#consultoPdf" ).click(function() {
*/
function pDf(url){

  var inAppBrowserRef;
  arg0 = $('#orden').val();
  arg1 = $('#clave').val();
  arg2 = $('#ciudad').val();
  if(( arg0 ) && (arg1) && (arg2)){

    $('.preload').css('display','block');
    $.ajax({
    url: 'http://interlab.com.ec/app/movil/respuesta_servidor.php',
    dataType: "text",
    data: {arg0: $('#orden').val(), arg1: $('#clave').val(), arg2: $('#ciudad').val()},
    success: function (data, textStatus, jqXHR) { 
      console.log(data);
      if(data == 0){
        $('.preload').css('display','none');
        myApp.alert("Sus resultado de Exámenes aún no están disponibles. Recuerde que el tiempo aproximado es 24H", "INTERLAB");
      }
      if(data == 1){
        $('.preload').css('display','none');
        //alert(1);
        
        //SIconstruURL = 'http://interlab.com.ec/app/movil/pdf.php?arg0='+arg0+'&arg1='+arg1+'&arg2='+arg2;
                //alert(construURL);
                //cordova.InAppBrowser.open(construURL, '_blank', 'location=yes');
        //SIwindow.open(construURL, '_system', 'location=no')
       
        //window.open(encodeURI('https://docs.google.com/gview?embedded=true&url=http://181.39.15.90/ConsultaWeb/pdf/print_2621709.PDF'), '_blank', 'location=yes,EnableViewPortScale=yes');
        window.open(encodeURI(url), '_blank', 'location=no,EnableViewPortScale=no');
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


};

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

    $('.searchbar-input').keyup(function() {
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
            globalLetras++;
            //console.log(_cletraA);            //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
            break;
          case "B":
            _cletraB++;
            globalLetras++;
            //console.log(_cletraB);
            break;
          case "C":
            _cletraC++;
            globalLetras++;
            //console.log(_cletraC);
            break;
          case "D":
            _cletraD++;
            globalLetras++;
            //console.log(_cletraD);
            break;
          case "E":
            _cletraE++;
            globalLetras++;
            //console.log(_cletraE);
            break;
          case "F":
            _cletraF++;
            globalLetras++;
            //console.log(_cletraF);
            break;
          case "G":
            _cletraG++;
            globalLetras++;
            //console.log(_cletraG);
            break;
          case "H":
            _cletraH++;
            globalLetras++;
            //console.log(_cletraH);
            break;
          case "I":
            _cletraI++;
            globalLetras++;
            //console.log(_cletraI);
            break;
          case "J":
            _cletraJ++;
            globalLetras++;
            //console.log(_cletraJ);
            break;
          case "K":
            _cletraK++;
            globalLetras++;
            //console.log(_cletraK);
            break;
          case "L":
            _cletraL++;
            globalLetras++;
            //console.log(_cletraL);
            break;
          case "M":
            _cletraM++;
            globalLetras++;
            //console.log(_cletraM);
            break;
          case "N":
            _cletraN++;
            globalLetras++;
            //console.log(_cletraN);
            break;
          case "O":
            _cletraO++;
            globalLetras++;
            //console.log(_cletraO);
            break;
          case "P":
            _cletraP++;
            globalLetras++;
            //console.log(_cletraP);
            break;
          case "Q":
            _cletraQ++;
            globalLetras++;
            //console.log(_cletraQ);
            break;
          case "R":
            _cletraR++;
            globalLetras++;
            //console.log(_cletraR);
            break;
          case "S":
            _cletraS++;
            globalLetras++;
            //console.log(_cletraS);
            break;
          case "T":
            _cletraT++;
            globalLetras++;
            //console.log(_cletraT);
            break;
          case "U":
            _cletraU++;
            globalLetras++;
            //console.log(_cletraU);
            break;
          case "V":
            _cletraV++;
            globalLetras++;
            //console.log(_cletraV);
            break;
          case "W":
            _cletraW++;
            globalLetras++;
            //console.log(_cletraW);
            break;
          case "X":
            _cletraX++;
            globalLetras++;
            //console.log(_cletraX);
            break;
          case "Y":
            _cletraY++;
            globalLetras++;
            //console.log(_cletraY);
            break;
          case "Z":
            _cletraZ++;
            globalLetras++;
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
myApp.onPageInit('index', function (page) {
  
    myApp.closePanel();

    var urlCiudades = "http://interlab.com.ec/app/movil/actions/ciudades.php"

    $.ajax({
      url: urlCiudades,
      dataType: "json",
      success: function (data, textStatus, jqXHR) { 
        //myApp.params.template7Data['sucursales'] = data;

        if(data!=null && data!='' && data!='[]'){ 
              
              $.each(data,function(key,value){ 
                id = value.id;
                ciudad = value.ciudad;
                $('#ciudad').append('<option value="'+id+'">'+ciudad+'</option>');
              });
            }   

      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("error" + errorThrown)
      }
    });


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
                globalLetras=globalLetras-1
                if(_cletraA == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraA);            //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
                break;
              case "B":
                _cletraB=_cletraB-1;
                globalLetras=globalLetras-1
                if(_cletraB == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraB);
                break;
              case "C":
                _cletraC=_cletraC-1;
                globalLetras=globalLetras-1
                if(_cletraC == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraC);
                break;
              case "D":
                _cletraD=_cletraD-1;
                globalLetras=globalLetras-1
                if(_cletraD == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraD);
                break;
              case "E":
                _cletraE=_cletraE-1;
                globalLetras=globalLetras-1
                if(_cletraE == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraE);
                break;
              case "F":
                _cletraF=_cletraF-1;
                globalLetras=globalLetras-1
                if(_cletraF == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraF);
                break;
              case "G":
                _cletraG=_cletraG-1;
                globalLetras=globalLetras-1
                if(_cletraG == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraG);
                break;
              case "H":
                _cletraH=_cletraH-1;
                globalLetras=globalLetras-1
                if(_cletraH == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraH);
                break;
              case "I":
                _cletraI=_cletraI-1;
                globalLetras=globalLetras-1
                if(_cletraI == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraI);
                break;
              case "J":
                _cletraJ=_cletraJ-1;
                globalLetras=globalLetras-1
                if(_cletraJ == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraJ);
                break;
              case "K":
                _cletraK=_cletraK-1;
                globalLetras=globalLetras-1
                if(_cletraK == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraK);
                break;
              case "L":
                _cletraL=_cletraL-1;
                globalLetras=globalLetras-1
                if(_cletraL == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraL);
                break;
              case "M":
                _cletraM=_cletraM-1;
                globalLetras=globalLetras-1
                if(_cletraM == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraM);
                break;
              case "N":
                _cletraN=_cletraN-1;
                globalLetras=globalLetras-1
                if(_cletraN == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraN);
                break;
              case "O":
                _cletraO=_cletraO-1;
                globalLetras=globalLetras-1
                if(_cletraO == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraO);
                break;
              case "P":
                _cletraP=_cletraP-1;
                globalLetras=globalLetras-1
                if(_cletraP == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraP);
                break;
              case "Q":
                _cletraQ=_cletraQ-1;
                globalLetras=globalLetras-1
                if(_cletraQ == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraQ);
                break;
              case "R":
                _cletraR=_cletraR-1;
                globalLetras=globalLetras-1
                if(_cletraR == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraR);
                break;
              case "S":
                _cletraS=_cletraS-1;
                globalLetras=globalLetras-1
                if(_cletraS == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraS);
                break;
              case "T":
                _cletraT=_cletraT-1;
                globalLetras=globalLetras-1
                if(_cletraT == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraT);
                break;
              case "U":
                _cletraU=_cletraU-1;
                globalLetras=globalLetras-1
                if(_cletraU == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraU);
                break;
              case "V":
                _cletraV=_cletraV-1;
                globalLetras=globalLetras-1
                if(_cletraV == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraV);
                break;
              case "W":
                _cletraW=_cletraW-1;
                globalLetras=globalLetras-1
                if(_cletraW == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraW);
                break;
              case "X":
                _cletraX=_cletraX-1;
                globalLetras=globalLetras-1
                if(_cletraX == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraX);
                break;
              case "Y":
                _cletraY=_cletraY-1;
                globalLetras=globalLetras-1
                if(_cletraY == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraY);
                break;
              case "Z":
                _cletraZ=_cletraZ-1;
                globalLetras=globalLetras-1
                if(_cletraZ == 0){
                  //Escondo la letras
                  $(".cargoLetra-"+exa[0].toLowerCase()).css('display','none');
                }
                //console.log(_cletraZ);
                break;
            }

          if(globalLetras == 0){

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
    $('.valor_de_Examenes .texto').html('$0.00');
    $('.vacio_cotizacion').css('display','block');
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