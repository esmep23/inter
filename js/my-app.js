Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

var cotizacion = [];
var total= 0;
var $$ = Dom7;

var myApp = new Framework7({
    precompileTemplates: false,
    template7Pages: true,
    template7Data: {
        cars: [
            {
                vendor: 'Volkswagen',
                model: 'Passat',
                power: 152,
                speed: 280,
                weight: 1400,
                color: 'black',
                year: 2012,
                description: ''
            },
            {
                vendor: 'Skoda',
                model: 'Superb',
                power: 152,
                speed: 260,
                weight: 1600,
                color: 'white',
                year: 2013,
                description: ''
            },
            {
                vendor: 'Ford',
                model: 'Mustang',
                power: 480,
                speed: 320,
                weight: 1200,
                color: 'red',
                year: 2014,
                description: ''
            },
        ],
        talentohumano : {
            general :[
                {
                    nombre: 'Dr. Jorge Macías Loor',
                    cargo : 'Gerente General y Director Técnico',
                    imagen : 'http://interlab.com.ec/wp-content/uploads/bfi_thumb/3-2zopmkesc2q3xwwcwth1q8.png'
                },
                {
                    nombre: 'Dra. Vicenta Cevallos Carofilis',
                    cargo: 'Sub Directora Técnica',
                    imagen : 'http://interlab.com.ec/wp-content/uploads/bfi_thumb/2-2zopmjwoywlctpwvdcqfb4.png'
                },
                {
                    nombre: 'Dr. Wilson Bajaña Granja',
                    cargo: 'Director de Calidad',
                    imagen : 'http://interlab.com.ec/wp-content/uploads/bfi_thumb/1-2zopmjnnabiz9mf4lmd43k.png'
                },
                {
                    nombre: 'Dra. Mariana León García',
                    cargo: 'Especialista en Patología Clínica',
                    imagen : 'http://interlab.com.ec/wp-content/uploads/bfi_thumb/4-2zopmkscuyboa24z2f10jk.png'
                }
            ],
            administracion:[
                {
                    nombre:'DR. JOSÉ GUEVARA AGUIRRE',
                    cargo:'PRESIDENTE'
                },
                {
                    nombre:'DR. JORGE MACÍAS LOOR',
                    cargo:'GERENTE GENERAL Y DIRECTOR TÉCNICO'
                },
                {
                    nombre:'LCDA. TATIANA GUERRERO',
                    cargo:'GERENTE ADMINISTRATIVA'
                },
            ],
            laboratorio:[
                {
                    nombre:'DR. JORGE MACÍAS LOOR',
                    cargo:'DOCTOR EN MEDICINA Y CIRUGÍA. ESPECIALISTA EN PATOLOGÍA CLÍNICA.'
                },
                {
                    nombre:'DRA. VICENTA CEVALLOS CAROFILIS',
                    cargo:'DOCTORA EN MEDICINA Y CIRUGÍA. ESPECIALISTA EN PATOLOGÍA CLÍNICA. ESPECIALISTA EN BIOTECNOLOGÍA. DIPLOMADO SUPERIOR EN DOCENCIA SUPERIOR'
                },
                {
                    nombre:'DR. WILSON BAJAÑA GRANJA',
                    cargo:'DOCTOR EN MEDICINA Y CIRUGÍA. ESPECIALISTA EN PATOLOGÍA CLÍNICA. MAGISTER EN GERENCIA DE SERVICIOS DE SALUD.'
                },
                {
                    nombre:'DR. FRANCISCO ALTAMIRANO MACÍAS',
                    cargo:'DOCTOR EN MEDICINA Y CIRUGÍA. ESPECIALISTA EN PATOLOGÍA CLÍNICA. ESPECIALISTA EN BIOTECNOLOGÍA. DIPLOMADO EN DOCENCIA Y EVALUACIÓN DE EDUCACIÓN SUPERIOR.'
                },
                {
                    nombre:'DRA. MARIANA LEÓN GARCÍA',
                    cargo:'DOCTORA EN MEDICINA Y CIRUGÍA. ESPECIALISTA EN PATOLOGÍA CLÍNICA. ESPECIALISTA EN GERENCIA DE SERVICIOS DE SALUD.'
                },
                {
                    nombre:'DRA.RUTH ZÚÑIGA FERAUD',
                    cargo:'DOCTORA EN MEDICINA Y CIRUGÍA. ESPECIALISTA EN PATOLOGÍA CLÍNICA. DIPLOMADO EN GERENCIA HOSPITALARIA. EGRESADA DE MAESTRÍA DE BIOQUÍMICA CLÍNICA'                 },
            ],
            quimica:[
                {
                    nombre: 'Q.F. VERÓNICA ALBÁN MORA',
                    cargo: 'QUÍMICA FARMACÉUTICA, EGRESADA DE MAESTRÍA EN BIOQUÍMICA CLÍNICA'
                },
                {
                    nombre: 'Q.F. Ma. AUXILIADORA ÁLAVA CORNEJO',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'Q.F. Ma. MERCEDES ARAY ANDRADE',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'Q.F. JANET ARBOLEDA CARRIÓN',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'DRA. NELLY BAQUERIZO BORBOR',
                    cargo: 'DOCTORA EN QUÍMICA Y FARMACIA.'
                },
                {
                    nombre: 'DRA. GERMANIA CARRILLO ZAPATA',
                    cargo: 'DOCTORA EN QUÍMICA Y FARMACIA.'
                },
                {
                    nombre: 'DRA. MARÍA CORNEJO MEDINA',
                    cargo: 'DOCTORA EN QUÍMICA Y FARMACIA. DIPLOMADO Y ESPECIALIDAD EN AUDITORÍA Y CONTROL DE CALIDAD. MAGISTER EN GESTIÓN DE CALIDAD'
                },
                {
                    nombre: 'Q.F.ARELIS FARIÑO GAMBOA',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'Q.F.JULIA GUASCO GARCÍA',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'Q.F. PATRICIA JIMÉNEZ ESCOBAR',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'Q.F. MÓNICA VELA MORILLO',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'Q.F. MAGALI CORONEL CORREA',
                    cargo: 'QUÍMICA FARMACÉUTICA. MSC. GABRIELA MARTÍNEZ VALDÉZ QUÍMICA FARMACÉUTICA. MÁSTER EN BIOTECNOLOGÍA. INGENIERÍA GENÉTICA Y BIOLOGÍA MOLECULAR.'
                },
                {
                    nombre: 'Q.F. Ma. DEL PILAR PALMA PINCAY',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                },
                {
                    nombre: 'Q.F. VÍCTOR VEGA HALL',
                    cargo: 'QUÍMICO FARMACÉUTICO.'
                },
                {
                    nombre: 'Q.F. KARLA YAGUANA CHAMBA',
                    cargo: 'QUÍMICA FARMACÉUTICA.'
                }
            ],
            biologia:[
                {
                    nombre: 'MARAY ALONSO RODRÍGUEZ'
                }
            ],
            labclinico:[
                {
                    nombre: 'JEFFERSON AGUILAR PEÑAFIEL'
                },
                {
                    nombre: 'LEONARDO CALDERÓN FRANCO'
                },
                {
                    nombre: 'PRISCILLA FRANCO SALAZAR'
                },
                {
                    nombre: 'MARAY ALONSO RODRÍGUEZ'
                },
                {
                    nombre: 'MARJORIE LÓPEZ ARIAS'
                },
                {
                    nombre: 'YESSICA ANCHUNDIA VERA'
                },
                {
                    nombre: 'CECILIA LOQUÍ SOLEDISPA'
                },
                {
                    nombre: 'DIANA ARMIJOS BURGOS'
                },
                {
                    nombre: 'WILFRIDO MARCILLO MARCILLO'
                },
                {
                    nombre: 'MIRTHA ARREAGA MACANCELA'
                },
                {
                    nombre: 'MIGUEL MENDOZA JAIME'
                },
                {
                    nombre: 'RONNY ASCENCIO YAGUAL'
                },
                {
                    nombre: 'CARLOS CASTRO CHAVEZ'
                },
                {
                    nombre: 'ALEXANDRA NAVARRETE SANTANA'
                },
                {
                    nombre: 'ANA BARRERA REA'
                },
                {
                    nombre: 'VICTORIA ORTIZ ROGEL'
                },
                {
                    nombre: 'YULAN BONILLA ZAMORA'
                },
                {
                    nombre: 'LOURDES PATIÑO QUINTANA'
                },
                {
                    nombre: 'TANIA CASTRO PERALTA'
                },
                {
                    nombre: 'SHIRLEY PEÑAFIEL HERAS'
                },
                {
                    nombre: 'MARÍA CEDEÑO REYES'
                },
                {
                    nombre: 'Ma. MERCEDES RODAS MEDINA'
                },
                {
                    nombre: 'NADIA CHAGCHA ALVARADO'
                },
                {
                    nombre: 'JOICE TIXE ESPINOZA'
                },
                {
                    nombre: 'SOLANGE CHÁVEZ DELGADO'
                },
                {
                    nombre: 'ZULLY MONCADA TRIANA'
                },
                {
                    nombre: 'JHONNY PIGUAVE MERO'
                },
                {
                    nombre: 'KARÍN CEPEDA ARMENDÁRIZ'
                },
                {
                    nombre: 'MARLY MOREIRA ZAMBRANO'
                }
            ],
            tecnologoLabClin:[
                {
                    nombre: 'KATHERINE TOAPANTA MERA'
                },
                {
                    nombre: 'LUISA TRIANA LINO'
                },
                {
                    nombre: 'ADRIANA VERA RUIZ'
                },
                {
                    nombre: 'SANDRA VEAS DELGADO'
                },
                {
                    nombre: 'TERESITA SALAZAR VELÁQUEZ'
                },
                {
                    nombre: 'LOURDES RUIZ QUIJIJE'
                },
                {
                    nombre: 'MONICA GUERRERO RUIZ'
                },
                {
                    nombre: 'LUISANA GRANDA ALVARADO'
                },
                {
                    nombre: 'SUSANA HERMIDA LÓPEZ'
                },
                {
                    nombre: 'JENNY MARTÍNEZ MUÑOZ'
                },
                {
                    nombre: 'EDWARD CASTRO CARRANZA'
                },
                {
                    nombre: 'VICTOR BACILIO PANCHANA'
                },
                {
                    nombre: 'JESSICA ROMERO GUERRERO'
                },
                {
                    nombre: 'GUILLERMO VILLAFUERTE GALAN'
                },
                {
                    nombre: 'ARACELY GANCHOZO REYES'
                }
            ],
            flebotomistas:[
                {
                    nombre: 'MIGUEL MOLINA'
                },
                {
                    nombre: 'LOLA QUEZADA BAQUERIZO'
                }
            ],
            tomademuestra:[
                {
                    nombre: 'LCDO. GUILLERMO BURGOS MACÍAS'
                },
                {
                    nombre: 'LCDA. HIPATIA ESPINOZA LASTRA'
                },
                {
                    nombre: 'LCDA. BÁRBARA FRANCO LEÓN'
                },
                {
                    nombre: 'LCDO. ROBERTO GUERRERO DELGADO'
                },
                {
                    nombre: 'LCDO. LUIS LÚA MARTÍNEZ'
                },
                {
                    nombre: 'LCDO. EYDER QUIÑÓNEZ VÁSQUEZ'
                },
                {
                    nombre: 'LCDO. CÉSAR ROSADO ÁVILA'
                },
                {
                    nombre: 'LCDO. NORMAN ALEJANDRO SARCHE'
                },
                {
                    nombre: 'LCDO. ALEJANDRO VALLADARES ZAMBRANO'
                },
                {
                    nombre: 'LCDA. LILY VÉLEZ GERMAN'
                },
                {
                    nombre: 'LCDA. BERTHA NICOLA ZAMBRANO'
                },
            ]

        }, 
        sucursales:{
            norte:[
                {
                    local: 'Laboratorio Principal',
                    direccion: 'Diagonal a C.C. San Marino Shopping.',
                    latitud: '-2.1694135',
                    longitud: '-79.8963321',
                    zoom: '19',
                    telefono: '04-2594010',
                    horario: '<b>LU-DO:</b> Atención 24 horas'
                },
                {
                    local: 'Sucursal Kennedy Vieja',
                    direccion: 'Cdla. Kennedy Vieja, frente a Clinica Kennedy.',
                    latitud: '-2.1731949',
                    longitud: '-79.8993265',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 203 | Cel.: 092161884',
                    horario: '<b>LU-VI:</b> 07:00 - 19:00 horas, <b>SA:</b> 07:00 - 12:00 horas, <b>DO:</b> 07:00 - 12:00 horas'
                },
                {
                    local: 'Sucursal Kennedy Norte',
                    direccion: 'Cdla. Kennedy Norte, Edif. Udimef 1.',
                    latitud: '-2.1610843',
                    longitud: '-79.8995827',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 210 | Cel.: 094902114',
                    horario: '<b>LU-VI:</b> 07:00 - 13:00 horas y 14:00 - 16:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                },
                {
                    local: 'Sucursal Alborada',
                    direccion: 'Cdla. Alborada, C.C. Gran Albocentro.',
                    latitud: '-2.1346957',
                    longitud: '-79.9029631',
                    zoom: '18',
                    telefono: '04-2594010 - Ext.: 205 | Cel.: 092161835',
                    horario: '<b>LU-VI:</b> 06:00 - 19:00 horas, <b>SA:</b> 06:30 - 13:00 horas'
                },
                {
                    local: 'Sucursal Miraflores',
                    direccion: 'Cdla. Miraflores, junto a Clínica Rendón.',
                    latitud: '-2.1636915',
                    longitud: '-79.9194882',
                    zoom: '16',
                    telefono: '04-2594010 - Ext.: 206 | Cel.: 092161799',
                    horario: '<b>LU-VI:</b> 06:00 - 18:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                },
                {
                    local: 'Sucursal Adace',
                    direccion: 'Cdla. Adace, Calle Abel Romero Castillo # 11 y Calle C.',
                    latitud: '-2.1578377',
                    longitud: '-79.8906411',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 208 | Cel.: 091718473',
                    horario: 'No hay atención.'
                },
                {
                    local: 'Sucursal OmniHospital',
                    direccion: 'Abel Castillo 212 Torre Medica II Edificio de Especialidades Medicas local 3 (Planta Baja) Omnihospital.',
                    latitud: '-2.157182',
                    longitud: '-79.891369',
                    zoom: '16',
                    telefono: '04-5940100 - Ext.: 212 Telf.: 04-2109300 Telf.: 04-2109301',
                    horario: '<b>LU-VI:</b> 07:00 - 13:00 horas y 14:00 - 17:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                }
            ],
            centro:[
                {
                    local: "Sucursarl PP Gómez",
                    direccion: 'P.P. Gómez, cerca de la Maternidad Sotomayor.',
                    latitud: '-2.1971893',
                    longitud: '-79.8881973',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 201 | Cel.: 092161482',
                    horario: '<b>LU-VI:</b> 07:00 - 13:00 horas y 14:00 - 17:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                },
                {
                    local: 'Sucursal Mendiburo',
                    direccion: 'Mendiburo 241 entre Baquerizo Moreno y General Córdova.',
                    latitud: '-2.1875674',
                    longitud: '-79.8809392',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 209 | Cel.: 099429761',
                    horario: '<b>LU-VI:</b> 06:30 - 14:30 horas'
                }
            ],
            sur:[
                {
                    local: 'Sucursal Noguchi',
                    direccion: 'Noguchi 2700 y Cañar esq.',
                    latitud: '-2.2141471',
                    longitud: '-79.8902738',
                    zoom: '17',
                    telefono: 'Telf: 04-2594010 - Ext.: 2042',
                    horario: '<b>LU-VI:</b> 06:00 - 19:00 horas, <b>SA:</b> 06:00 - 13:00 horas'
                }
            ],
            samborondon:[
                {
                    local: 'Sucursal Entreríos',
                    direccion: 'Cdla. Entreríos, Edif. Lubricorp.',
                    latitud: '-2.1480549',
                    longitud: '-79.8647839',
                    zoom: '16',
                    telefono: '04-2594010 - Ext.: 202 | Cel.: 0992161450',
                    horario: '<b>LU-VI:</b> 06:00 - 18:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                },
                {
                    local: 'Edifio Xima',
                    direccion: 'Cdla. Los Arcos, Edificio Xima. Local Interno No. 7 planta baja.',
                    latitud: '-2.1386628',
                    longitud: '-79.867893',
                    zoom: '17',
                    telefono: '4-2594010 Ext. 213',
                    horario: '<b>LU-VI:</b> 07:00 - 15:00 horas'
                }
            ],
            lajoya: [
                {
                    local: 'Sucursal La Joya',
                    direccion: 'C.C. La Piazza La Joya.',
                    latitud: '-2.0494099',
                    longitud: '-79.9147385',
                    zoom: '15',
                    telefono: '04-2594010 - Ext.: 211',
                    horario: '<b>LU-VI:</b> 06:00 - 16:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                }                
            ],
            duran:[
                
                {
                    local: 'Sucursal Centro Durán',
                    direccion: 'Atahualpa 204 y Venezuela esq.',
                    latitud: '-2.1796686',
                    longitud: '-79.8542273',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 207 | Cel.: 0992161670',
                    direccion: '<b>LU-VI:</b> 07:00 - 13:00 horas y 14:00 - 16:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                }
            ],
            milagro:[
                {
                    local: 'Laboratorio Interlab Milagro',
                    direccion: 'Calle Vargas Torres entre Olmedo y Calle Primera.',
                    latitud: '-2.1377176',
                    longitud: '-79.5819997',
                    zoom: '14',
                    telefono: '04-2594010 - Ext.: 281 Telf.: 04-2975968',
                    direccion: '<b>LU-VI:</b> 07:00 - 19:00 horas, <b>SA:</b> 07:00 - 19:00 horas'
                }
            ],
            portoviejo:[
                {
                    local: 'Laboratorio Interlab Portoviejo',
                    direccion: 'Rocafuerte entre Quiroga y Bolívar.',
                    latitud: '-1.0573807',
                    longitud: '-80.4488918',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 221 Telf.: 05-2636732',
                    direccion: '<b>LU-VI:</b> 07:00 - 23:00 horas, <b>SA - DO:</b> 07:00 - 17:00 horas'
                },
                {
                    local: 'Sucursal Medical Plaza',
                    direccion: 'Medical Plaza: Av. Manabí entre Tenis Club y La Libertad.',
                    latitud: '-1.0507219',
                    longitud: '-80.4621285',
                    zoom: '17',
                    telefono: ' 05-2638390',
                    direccion: '<b>LU-VI:</b> 07:00 - 12:00 horas y 14:00 - 17:00 horas, <b>SA:</b> 07:00 - 12:00 horas'
                },
                {
                    local: 'Sucursal Jorge Washington',
                    direccion: 'Av. Jorge Washington Y América.',
                    latitud: '-1.0617201',
                    longitud: '-80.4670755',
                    zoom: '17',
                    telefono: '052932061',
                    horario: '<b>LU-VI:</b> 07:00 - 12:00 horas y 14:00 - 17:00 horas'
                }
            ],
            manta:[
                {
                    local: 'Laboratorio Interlab Manta',
                    direccion: 'Calle 18 e/ Av 37 y 38.',
                    latitud: '-1.0507219',
                    longitud: '-80.4621285',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 241 Telf.: 05-2626058',
                    direccion: '<b>LU-VI:</b> 07:00 - 19:00 horas, <b>SA:</b> 07:00 - 17:00 horas, <b>DO:</b> 07:00 - 13:00 horas'
                },
                {
                    local: 'Sucursal Jocay',
                    direccion: 'Av. 4 de noviembre, y calle J 16.',
                    latitud: '-0.9685672',
                    longitud: '-80.7050085',
                    zoom: '16',
                    telefono: '<b>LU-VI:</b> 07:00 - 12:00 horas',
                    horario: ''
                }
            ],
            machala:[
                {
                    local: 'Laboratorio Interlab Machala',
                    direccion: 'Cdla. La Carolina Lote 5 Mz. LC4.',
                    latitud: '-3.2684605',
                    longitud: '-79.9592789',
                    zoom: '14',
                    telefono: '04-2594010 - Ext.: 261 Telf.: 07-2984955',
                    direccion: '<b>LU-VI:</b> 07:00 - 00:00 horas, <b>SA:</b> 07:00 - 17:00 horas, <b>DO:</b> 07:00 - 15:00 horas'
                },
                {
                    local: 'Sucursal Cdla. Bellavista',
                    direccion: 'Cdla. Bellavista entre callejón 5to norte y Kleber Franco a 1 1/2 cuadra del Hosp. Teofilo Dávila',
                    latitud: '-3.2684605',
                    longitud: '-79.9592789',
                    zoom: '14',
                    telefono: '7-2936887',
                    horario: '<b>LU-VI:</b> 07:00 - 18:00 horas, <b>SA:</b> 07:00 - 15:00 horas'
                }

            ],
            quevedo:[
                {
                    local: 'Laboratorio Interlab Quevedo',
                    direccion: 'Cdla. Progreso, calle Primera Lote 4 Mz. B.',
                    latitud: '-1.0383133',
                    longitud: '-79.475216',
                    zoom: '17',
                    telefono: '04-2594010 - Ext.: 301 Telf.: 05-2754543',
                    direccion: '<b>LU-VI:</b> 07:00 - 19:00 horas, <b>SA:</b> 07:00 - 15:00 horas, '
                }
            ]
        }          
    }
});

var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    precompileTemplates: true,
});


        


//console.log(myApp.template7Data);

$$('.panel-left').on('opened', function () {
    //myApp.alert('Left panel opened!');
    //$('.pageC').css('display', 'block');
    $('.popup-overlay').addClass('modal-overlay-visible');
});
$$('.panel-left').on('close', function () {
    //myApp.alert('Left panel is closing!');
    //$('.pageC').css('display', 'none');
    $('.popup-overlay').removeClass('modal-overlay-visible');
});



/*


myApp.init();




function collect() {
  var ret = {};
  var len = arguments.length;
  for (var i=0; i<len; i++) {
    for (p in arguments[i]) {
      if (arguments[i].hasOwnProperty(p)) {
        ret[p] = arguments[i][p];
      }
    }
  }
  return ret;
}


myApp.onPageBeforeInit('cotizador', function (page) {

    myApp.closePanel();

   var alfabeto=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
   var pL = 0;

  $('#examenes').append('<li class="list-group-title">A</li>');
   $.ajax({
      url: 'http://interlab.com.ec/facebook/cotizador/php/examenes.php',
      type: "GET",
      cache: true,
      dataType: "json",
      success: function(response){  
        console.log(response);
        if(response!=null && response!='' && response!='[]'){ 
          
          $.each(response,function(key,value){ 
            id = value.id;
            alergia = value.alergia;
            nombre = value.nombre;
            letter = value.letter;
            valor = value.valor;
            var $item = '<li class="item-content">'
            +'<div class="item-inner">'
            +'<div class="item-title">'+unescape(nombre)+'</div>'
            +'<div class="item-after">'+valor+'  <i class="ion-plus-round" onclick="agregar('+id+', '+valor+')"></i></div>'
            +'</div>'
            +'</li>';
            $('#examenes').append($item);
            if(letter != alfabeto[pL]){
                pL++;
                $item = '<li class="list-group-title">'+alfabeto[pL]+'</li>';
                $('#examenes').append($item);
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
})

function agregar(item, precio){
    
    cotizacion.push(item);
    //suma valor de productos cotizados.
    total = parseInt(total) + parseInt(precio);
    $('#total_examenes').html('<h1>'+total.toFixed(2)+'</h1>');
    alert('Valor Agregado');
    
}



*/