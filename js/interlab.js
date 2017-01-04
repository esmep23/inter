var cotizacion = [];
var total= 0;
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
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("error" + errorThrown)
  }
});

//CLICK ANALIZO LA BUSQUEDA DE PDF
$( "#consultoPdf" ).click(function() {
var inAppBrowserRef;
      alert(1);
            arg0 = $('#orden').val();
            arg1 = $('#clave').val();
            if(( arg0 ) && (arg1)){
              alert(arg0 + '  -  ' +arg1);
              //cordova.InAppBrowser.open("http://interlab.com.ec/app/movil/pdf.php?arg0="+arg0+"&arg1="+arg1, '_blank', 'location=yes');
              cordova.InAppBrowser.open("http://interlab.com.ec/app/movil/pdf.php?arg0=7777111&arg1=21099", '_blank', 'location=yes');
            }else{
              alert("Ingrese parametros correctos", "INTERLAB");
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
myApp.onPageBeforeInit('cotizador', function (page) {
    myApp.closePanel();

    /*$(".agregar-examenes").click(function() {
      $(".search-letter").css('display','block');
    });

    $(".close-letter").click(function() {
      $(".search-letter").css('display','none');
    });*/

    $(".letter").click(function() {

      $(".examenes .list-group li").css('display', 'none');

      //alert($(this).text());
      letra_buscar = $(this).text();
      //oculto abecedario
      myApp.closeModal('.popup-letras');
      myApp.popup('.popup-23');
      $('.popup-overlay').removeClass('modal-overlay-visible');

      var exist = $( ".examenes .list-group li" ).hasClass( letra_buscar);
      if(exist == false){
         $(".no-hay-letras").css('display','block');
      }else{
        $(".examenes .list-group li."+letra_buscar).css('display','block');
        $(".no-hay-letras").css('display','none');
      }
    });



    
    $(".btnBuscador").click(function() {
      myApp.closeModal('.popup-letras');
      myApp.popup('.popup-23');
      $('.popup-overlay').removeClass('modal-overlay-visible');
      $(".examenes .list-group li").css('display', 'block');
      
    });

    $(document).on('change', '#cbox', function() {
      var examen = $(this).val();
      var cadena = examen.split("|");
      //Agrego a mi listado
      /*
       --------------------------------
       --------------------------------
      */
      $(".pagina-cotizacion").css('display','block');

      if (this.checked){
        //ID agregar a objeto
        cotizacion.push(examen);
        console.log(cotizacion);
        actualizoMiLista();
        //precio ir sumando
        var precio = cadena[3];
        total = Number(total) + Number(precio);
        $('.valor_de_Examenes').html('$'+total);
        //alert(total);
      } else {
      //Elimino de mi listado
      /*
        --------------------------------
        --------------------------------
      */
        //ID agregar a objeto

        //precio ir sumando
        var precio = cadena[3];
        total = Number(total) - Number(precio);
        $('.valor_de_Examenes').html('$'+total);
        //alert(total);
      }

    });

   
    

});



//
myApp.onPageInit('cotizador', function (page) {
    actualizoMiLista();
    $('.valor_de_Examenes').html('$'+total);
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

    mapa('-2.166035', '-79.911245', 'Laboratorio Principal', '19', 'Diagonal a C.C. San Marino Shopping. | 04-2594010 | Lunes a <b>Domingo</b> - Atención 24 horas');

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
  $('.cargo_cotizador .miLista').empty();
      for (var ele in cotizacion) {
        var lista = cotizacion[ele];
        var exa = lista.split("|");
        if(exa[1]  == id){
          
          cotizacion.splice(ele, 1);
          $('.id-'+id).prop('checked', false);
          console.log(ele);
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
  //$(".examenes").css('display','none');
}

