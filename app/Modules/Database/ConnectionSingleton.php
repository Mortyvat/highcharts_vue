<?php

namespace Modules\Database;

require_once 'Connection.php';

class ConnectionSingleton{
    
    private static $conn;
    
    public static function connect(): \Modules\Database\Connection
    {
        
        if(!empty(self::$conn)){
            return self::$conn;
        }
        
        try {
            $dbh = new \PDO("sqlsrv:Server=localhost;Database=experience;ConnectionPooling=0", 'retia', 'ReDat3_Pass');
            
            self::$conn = new \Modules\Database\Connection($dbh);
            
            return self::$conn;
            
        } catch (\PDOException $e) {
            print "Error! : " . $e->getMessage() . "<br/>";
            die();
        }
        
    }
    
}