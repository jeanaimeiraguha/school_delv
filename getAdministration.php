<?php
include 'db.php';

$sql = "SELECT * FROM admissions";
$result = $conn->query($sql);

$admissions = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $admissions[] = $row;
    }
    echo json_encode($admissions);
} else {
    echo json_encode([]);
}
?>
