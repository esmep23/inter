// A $( document ).ready() block.
$( document ).ready(function() {
    //console.log( "ready!" );
    //noticasWP();
});

function noticasWP(){
  
    $.ajax({
      url: 'http://interlab.com.ec/wp-json/posts',
      type: "GET",
      cache: true,
      dataType: "json",
      success: function(response){  
        console.log(response);
        if(response!=null && response!='' && response!='[]'){ 
          
          $.each(response,function(key,value){ 
            
            id = value.ID;
            title = value.title;
            content = value.content;
            excerpt = value.excerpt;
            date = value.date;
            imagen = value.featured_image['guid'];
            categorias = value.terms['category'].taxonomy;

              var list =
                '<li onclick="avanzo('+id+')" >'
                + '<div class="item-link item-content" >'
                + '<div class="item-media"><img src="'+imagen+'" width="80"></div>'
                + '<div class="item-inner">'
                  + '<div class="item-title-row">'
                      + '<div class="item-title">'+ title +'</div>'
                        //+ '<div class="item-after">$15</div>'
                      + '</div>'
                    //+ '<div class="item-subtitle">'+categorias+'</div>'
                  + '<div class="item-text">'+excerpt+'</div>'
                +  '</div>'
                +  '</div>'
                +'</li>';
              $('#noticias_blog').append(list);

            
          });
        }             
      },
      complete : function(){
        console.log('complete');
      },
      error : function(error){     
        console.log(error);
      }
    });   
 }

 function avanzo(id){
  //alert(id);
  mainView.router.loadPage('noticia.html');
    $.ajax({
      url: 'http://interlab.com.ec/wp-json/posts/',
      type: "GET",
      cache: true,
      dataType: "json",
      success: function(response){  
        console.log(response);
        if(response!=null && response!='' && response!='[]'){ 
          
          
          $.each(response,function(key,value){ 
            if(value.ID == id){
              title = value.title;
              content = value.content;
              date = value.date;
              imagen = value.featured_image['guid'];
              var contenidoNoticia = '<div class="imagenes"><img src="'+imagen+'" /></div> '
              +'<div class="">'+date+'</div> '
              +'<div class="">'+title+'</div>'
              +'<div class="">'+content+'</div> ';
              //alert(contenidoNoticia);
              $('#noticia ul').append(contenidoNoticia);
                
              
            }

            
          });
        }             
      },
      complete : function(){
        console.log('complete');
      },
      error : function(error){     
        console.log(error);
      }
    });   
   
 }


