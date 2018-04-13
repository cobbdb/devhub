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
}

try {
    // connect
    $m = new MongoClient();
    // select a database
    $db = $m->cmg;
    // select a collection (analogous to a relational database's table)
    $collection = $db->devhub;

    // Return the entire devhub db as json.
    $cursor = $collection->find();
    $res = [
        'users' => []
    ];
    foreach ($cursor as $file) {
        $user = $file['user'];
        $record = [
            'path' => $file['path'],
            'time' => $file['time']
        ];

        if (!array_key_exists($user, $res['users'])) {
            $res['users'][$user] = [];
        }
        array_push($res['users'][$user], $record);
    }
    echo json_encode($res);
} catch (Exception $err) {
    http_response_code(500);
    echo $err;
    exit;
}
