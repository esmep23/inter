
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
      //alert($(this).text());
      letra_buscar = $(this).text();
      //oculto abecedario
      myApp.closeModal('.popup-letras');
      $(".examenes").css('display','block');
      $(".item-content").css('display','none');
      $(".pagina-cotizacion").css('display','none');
      $(".letra-"+letra_buscar).css('display','block');
    });

    
    $(".btnBuscador").click(function() {
      myApp.closeModal('.popup-letras');
      $(".examenes").css('display','block');
      $(".pagina-cotizacion").css('display','none');
      $(".item-content").css('display','block');
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





});
//Orden es 7777111 y la Clave 21099
    $( ".consultoPdf" ).click(function() {
      alert(0);
      window.open('http://interlab.com.ec/app/movil/pdf.php?arg0=7777111&arg1=21099', '_blank', 'location=yes');
      
/*
      $.ajax({
        url: 'http://interlab.com.ec/app/movil/pdf.php',
        type: "GET",
        cache: true,
        dataType: "json",
        data: "arg0=7777111&arg1=21099",
        success: function(response){
          alert(1);
        },
        error : function(error){     
          console.log(error);
        }
      });  */

/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/?arg0=7777111&arg1=21099",
  "method": "POST",
  "headers": {
    "authorization": "'Authorization', 'Basic'"+ btoa("userinterlab" + ":" + "inter$18l@b"),
    "cache-control": "no-cache",
    "postman-token": true,
    "Access-Control-Allow-Origin": "*"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/?arg0=7777111&arg1=21099",
  "method": "POST",
  "headers": {
    "authorization": "'Authorization', 'Basic'"+ btoa("userinterlab" + ":" + "inter$18l@b"),
    "cache-control": "no-cache",
    "postman-token": "61eca3d0-652e-8de7-d5d0-9bad513214c5",
    "content-disposition": "attachment; filename='resultados.pdf'",
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST'
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

  */    /*
      $.ajax({
        type: "POST",
        url: 'http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/',
        data: {
          arg0 : "7777111",
          arg1 : "21099"
        },
        header:{
          "Content-Disposition": "attachment; filename='resultados.pdf'",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST'
        },
        contentType: "application/json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa("userinterlab" + ":" + "inter$18l@b"));
        },
        success: function(res, status, xhr){
            xhr.getResponseHeader("Content-Disposition", "attachment; filename=resultados.pdf");
                  
                  return res.build();
        }
      });*/

   /*   $.ajax({
            url: 'http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/',
            method: 'post',
            crossDomain: true,
            params: {
                
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            },
            authorization:{
                "type": "Basic Auth",
                "usuario": 'userinterlab', 
                "clave": 'inter$18l@b',
            },
            dataType: 'json',
            success: function(res, status, xhr) { 
                alert(1);
                
                  
                  xhr.getResponseHeader("Content-Disposition", "attachment; filename=resultados.pdf");
                  
                  return res.build();
                
            },
            error: function(error){
                console.log(error);
            }
        });*/
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
  $(".examenes").css('display','none');
}

