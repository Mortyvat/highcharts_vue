<?php

namespace Modules\Database;

class Connection
{
    protected $connection;

    public function __construct(\PDO $connection){
        $this->connection = $connection;
    }
    
    /**
     * Vrati hodnotu prvniho sloupce v prvnim radku recordsetu.
     * Narozdil od getDBFieldValue v pripade chyby funkce generuje vyjimku.
     */
    
    public function getField(string $sql, array $inputarr = [])
    {
        $rs = $this->connection->prepare($sql);
        
        $rs->execute($inputarr);
        
        $result = $rs->fetchColumn();
        
        return ($result != '' || $result != null) ? $result : null;
    }
    
    /**
     * Vraci jednoradkovy recordset jako pole.
     */
    public function getFields(string $sql, array $inputarr = [])
    {
        $rs = $this->connection->prepare($sql);
        
        $rs->execute($inputarr);
        
        $result = $rs->fetch(\PDO::FETCH_ASSOC);
        
        $count = count($result);
        
        return ($count != 0) ? $result : null;
    }
    
    /**
     * Pole indexovane podle prvniho sloupce s hodnotami druheho sloupce.
     */
    public function getArrayAssoc(string $sql, array $inputarr = []): Array
    {
        $rs = $this->connection->prepare($sql);
        
        $rs->execute($inputarr);
        
        $result = $rs->fetchAll(\PDO::FETCH_KEY_PAIR);
        
        $count = count($result);
        
        return ($count != 0) ? $result : null;
    }
    
    /**
     * Vstupni pole rozsirene o dalsi polozky
     * indexovane podle prvniho sloupce s hodnotami druheho sloupce.
     */
    public function getArrayAssocTo(string $sql, array $array, array $inputarr = []): Array
    {
            return $array + $this->getArrayAssoc($sql,$inputarr);
    }
    
    /**
     * Vrati hodnotu prvniho sloupce jako viceradkovy recordset (jako pole).
     */
    public function getArray(string $sql, array $inputarr = []): array
    {
        $array_asoc = $this->getArrayAssoc($sql, $inputarr);
        return array_values($array_asoc);
    }
    
    /**
	 * Dvourozmerne pole indexovane od nuly.
	 * napr.: [0]['u_id']=123, [0]['u_fullname']= Marny, Tomas(123), ...
	 */
    public function getArray2d(string $sql, array $inputarr = []): array
    {
        $rs = $this->connection->prepare($sql);
        
        $rs->execute($inputarr);
        
        $result = $rs->fetchAll(\PDO::FETCH_ASSOC);
        
        $count = count($result);
        
        return ($count != 0) ? $result : null;
    }
    
    /**
     * Dvourozmerne pole indexovane podle prvniho sloupce.
     * napr.: [123]['u_id']=123, [123]['u_fullname']= Marny, Tomas(123), ...
     */
    public function getArrayAssoc2d(string $sql, string $index, array $inputarr = []): Array
    {
        $rs = $this->connection->prepare($sql);
        
        $rs->execute($inputarr);
        
        $result = $rs->fetchAll(\PDO::FETCH_ASSOC);
        
        foreach ($result as $key => $data){
            $result[$data[$index]] = $result[$key];
            unset($result[$key]);
        }
        
        $count = count($result);
        
        return ($count != 0) ? $result : null;
    }
    
    public function query(string $sql, $inputarr)
    {
        $rs = $this->connection->prepare($sql);
        
        $rs->execute($inputarr);
    }
    
    public function lastInsertId(string $name = null)
    {
        return $this->connection->lastInsertId($name);
    }
}