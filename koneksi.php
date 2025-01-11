<?php
// Membuat koneksi ke database
$conn = mysqli_connect('localhost', 'root', '', 'contact_db') or die('Connection failed: ' . mysqli_connect_error());

// Proses pengiriman formulir
if (isset($_POST['send'])) {
    // Mengambil data dari formulir
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $number = mysqli_real_escape_string($conn, $_POST['number']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    // Query untuk menyimpan data
    $query = "INSERT INTO `contact_form` (name, email, number, message) VALUES ('$name', '$email', '$number', '$message')";

    // Eksekusi query
    if (mysqli_query($conn, $query)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Error: " . mysqli_error($conn) . "'); window.location.href = 'index.html';</script>";
    }
}

// Menutup koneksi
mysqli_close($conn);
?>
