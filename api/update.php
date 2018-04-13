<?php

if (!array_key_exists('key', $_REQUEST)) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Missing safety key.'
    ]);
    exit;
} elseif ($_REQUEST['key'] !== '3.1415') {
    http_response_code(401);
    echo json_encode([
        'error' => 'Invalid safety key.'
    ]);
    exit;
} elseif (!array_key_exists('user', $_REQUEST)) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Missing user.'
    ]);
    exit;
} elseif (!array_key_exists('path', $_REQUEST)) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Missing filepath.'
    ]);
    exit;
}

$user = $_REQUEST['user'];
$path = $_REQUEST['path'];
$now = time();
$expiration = 172800;

try {
    // connect
    $m = new MongoClient();
    // select a database
    $db = $m->cmg;
    // select a collection (analogous to a relational database's table)
    $collection = $db->devhub;

    // Remove expired entries.
    $files = $collection->find();
    foreach ($files as $file) {
        $diff = $now - $file['time'];
        if ($diff >= $expiration) {
            $collection->remove([
                '$id' => $file['$id']
            ]);
        }
    }

    // Update the entry for this user and file.
    $files = $collection->find([
        'user' => $user,
        'path' => $path
    ]);
    if ($files->count() > 0) {
        // Bump the timestamp for this user and file.
        foreach ($files as $file) {
            $file['time'] = $now;
            $collection->save($file);
        }
    } else {
        // Create new entry for this user and file.
        $collection->insert([
            'user' => $user,
            'path' => $path,
            'time' => $now
        ]);
    }
} catch (Exception $err) {
    http_response_code(500);
    echo $err;
    exit;
}
