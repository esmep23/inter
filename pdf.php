<?php

header("Access-Control-Allow-Origin: *");
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_PORT => "8080",
    CURLOPT_URL => "http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/?arg0=".$_REQUEST['arg0']."&arg1=".$_REQUEST['arg1'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_HTTPHEADER => array(
      "authorization: Basic dXNlcmludGVybGFiOmludGVyJDE4bEBi",
      "cache-control: no-cache",
      "postman-token: 00ec2cd7-e728-b39b-4e2c-bc50ddec8244"
    ),
  ));

  header("Content-Type: application/pdf");
  /*para descargar
  header("Pragma: public");
  header("Expires: 0");
  header("Cache-Control: must-revalidate, post-check=0, pre-check=0"); 
  header("Content-Type: application/force-download");
  header("Content-Type: application/octet-stream");
  header("Content-Type: application/download");
  header("Content-Disposition: attachment;filename=resultado.pdf ");
  header("Content-Transfer-Encoding: binary ");
   para descargar*/
  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err)
  {
    echo "cURL Error #:" . $err;
  }
  else
  {
    echo $response;
  }


?>

