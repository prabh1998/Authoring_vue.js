<?php
    require('connect.php');

    function getUser($conn) {

        $getData = 'SELECT * FROM users';

        $runQuery = $conn->query($getData);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //PUSH EACH ROW OF DATA INTO OUR ARRAY TO MAKE IT EASY TO ITERATE OVER
            $result[] =$row;
        }  
        return $result;
    
    }
