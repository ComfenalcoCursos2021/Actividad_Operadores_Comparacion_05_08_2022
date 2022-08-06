<?php
    // Crear un dos input numericos y input submit, 
    // con check butons selecionar 
    // que tipo de operador 'Comparacion' va usar, enviar los 
    // datos por el JS Y resivirlos en el PHP,
    // realizar la operacion selecionada y visualizarlo
    // en el HTML5
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    $_DATA = ($_SERVER["REQUEST_METHOD"] == "POST") 
            ? json_decode(file_get_contents("php://input"), true)
            : (array) ["num1"=> 0 , "num2" => 0];
    extract($_DATA);
    unset($_DATA);




    print_r(json_encode((object) [
        "Mensaje" => (string) "Actividad de operador de comparacion",
        "Servidor" => $_SERVER["HTTP_HOST"],
        "Data" => "$num1 - $num2"
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG))
?>