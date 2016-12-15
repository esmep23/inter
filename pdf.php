<?php
/*-
$url = 'http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/';
$data = array('arg0' => '7777111', 'arg1' => '21099');

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-Disposition: attachment; filename=resultados.pdf",
        'method'  => 'POST',
        'content' => $data,
        'usuario' => 'userinterlab', 
        'clave' => 'inter$18l@b'
    ),
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
var_dump($result);
*/
/*
$login = 'userinterlab';
$password = 'inter$18l@b';
$request = 'arg0=7777111&arg1=21099';

$CurlConnect = curl_init();
curl_setopt($CurlConnect, CURLOPT_URL, 'http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/');

curl_setopt($CurlConnect, CURLOPT_POST, 1);
curl_setopt($CurlConnect, CURLOPT_RETURNTRANSFER, true );
curl_setopt($CurlConnect, CURLOPT_POSTFIELDS, $request);
curl_setopt($CurlConnect, CURLOPT_USERPWD, $login.':'.$password);

$Result = curl_exec($CurlConnect);

header('Content-Disposition: attachment; filename="resultados.pdf"');
header('Content-Length: '.strlen($Result));
echo $Result;
*/


function curl_post($url,$post_elements,$header)
{
	$curl = curl_init();

	if( count($post_elements) > 0 )
	{
		$elements = array();
		foreach ($post_elements as $name=>$value)
		{
			$elements[] = "{$name}=".urlencode($value);
		}
		curl_setopt($curl, CURLOPT_POST, true);
                                               //curl_setopt($curl, CURLOPT_POSTFIELDS, join("&",$elements) );
		curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($post_elements) );
	}

	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_REFERER, '');
	curl_setopt($curl, CURLOPT_HTTPHEADER, $header);

	$result = curl_exec ($curl);


	if(curl_exec($curl) === false)
	{
		echo 'Curl error: ' . curl_error($ch);
	}
	else
	{
		echo 'Operación completada sin errores';
	}

	curl_close($curl);
	return $result;
}

$url      = "http://181.39.15.91:8080/WsInterlab/rest/seguridad/obtenerResultadosPDF/";
$header = [
"usuario: userinterlab",
'clave: inter$18l@b'
];

$response = curl_post($url, ['arg0' => '7777111', 'arg1' => '21099'], $header);

//header('Content-Disposition: attachment; filename="resultados.pdf"');
//header('Content-Length: '.strlen($response));
echo $response;

?>

