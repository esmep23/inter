
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

var urlExamenes = "http://interlab.com.ec/facebook/cotizador/php/examenes.php";
$.ajax({
  url: urlExamenes,
  dataType: "json",
  success: function (data, textStatus, jqXHR) { 
    myApp.params.template7Data['examenes'] = data;
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

    $( ".consultoPdf" ).click(function() {

      $.ajax({
            url: 'http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/',
            method: 'post',
            crossDomain: true,
            data: {
                arg0 : $('#orden').val(),
                arg1 : $('#clave').val()
            },
            headers: {
                "usuario": 'userinterlab', 
                "clave": 'inter$18l@b',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            },
            dataType: 'json',
            success: function(res, status, xhr) { 
                xhr.getResponseHeader("Content-Disposition", "attachment; filename=resultados.pdf");
                return res.build();
            },
            error: function(error){
                console.log(error);
            }
        });
    });

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