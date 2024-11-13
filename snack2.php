<?php

function snack2(string $str): int
{
    $strWords = explode(" ", $str);

    foreach ($strWords as $word) {
        if (strlen($word) >= 5) {
            strrev($word);
        }
    }

    $newStr = implode(" ", $strWords);
    return $newStr; // your code here
}
