<?php

$m = new MongoClient();
$db = $m->cmg;
$devs = $db->users;

$cursor = $collection->find([
    'online' => true
]);

foreach ($cursor as $document) {
    echo var_dump($document) . '<br/>';
    $document['fresh'] = false;
    $collection->save($document);
}
