<?php
    require_once('db-conexion.php');

    $id_user = uniqid();
    $sql_users = $cnnPDO->prepare("INSERT INTO usuarios (id, nombre, telefono, correo) VALUES (:id, :nombre, :telefono, :correo)");
    $sql_users->bindParam(':id', $id_user);
    $sql_users->bindParam(':nombre', $_POST['nombre']);
    $sql_users->bindParam(':telefono', $_POST['telefono']);
    $sql_users->bindParam(':correo', $_POST['correo']);
    $sql_users->execute();

    // Procesar las fotos
    $fotos = $_FILES["fotos"];
    $foto_nombres = array();
    foreach ($fotos["tmp_name"] as $key => $tmp_name) {
        $foto_nombre = $fotos["name"][$key];
        $foto_nombres[] = $foto_nombre;
        move_uploaded_file($tmp_name, "img/" . $foto_nombre);
    }
    $fotos_serializadas = serialize($foto_nombres); // Guardar los nombres de las fotos en formato serializado

    $id_invitacion = uniqid();
    $sql_invitacion = $cnnPDO->prepare("INSERT INTO invitaciones (id, idUsuario, evento, festejados, fecha, ubicacion, fotos, indicaciones) VALUES (:id, :idUsuario, :evento, :festejados, :fecha, :ubicacion, :fotos, :indicaciones)");
    $sql_invitacion->bindParam(':id', $id_invitacion);
    $sql_invitacion->bindParam(':idUsuario', $id_user);
    $sql_invitacion->bindParam(':evento', $_POST['evento']);
    if ($_POST['evento'] == 'boda') {
        $festejados = $_POST['novio'] . ' y ' . $_POST['novia'];
    } else {
        $festejados = $_POST['festejado'];
    }
    $sql_invitacion->bindParam(':festejados', $festejados);
    $sql_invitacion->bindParam(':fecha', $_POST['fecha']);
    $sql_invitacion->bindParam(':ubicacion', $_POST['ubicacion']);
    $sql_invitacion->bindParam(':fotos', $fotos_serializadas);
    $sql_invitacion->bindParam(':indicaciones', $_POST['indicaciones']);
    $sql_invitacion->execute();

    header('Location: ../index.html');
?>