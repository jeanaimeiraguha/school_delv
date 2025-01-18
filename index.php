<?php
$request = $_SERVER['REQUEST_METHOD'];
$endpoint = basename($_SERVER['PHP_SELF'], '.php');

switch ($endpoint) {
    case 'register':
        include 'register.php';
        break;
    case 'login':
        include 'login.php';
        break;
    case 'contact':
        include 'contact.php';
        break;
    case 'getPrograms':
        include 'getPrograms.php';
        break;
    case 'getAdmissions':
        include 'getAdmissions.php';
        break;
    default:
        echo json_encode(['message' => 'Endpoint not found']);
}
?>
