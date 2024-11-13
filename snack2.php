<?php

function spinWords(string $str): string
{
    $strWords = explode(" ", $str);
    $newStrWords = [];

    foreach ($strWords as $word) {
        if (strlen($word) >= 5) {
            $newStrWords[] = strrev($word);
        } else {
            $newStrWords[] = $word;
        }
    }

    $newStr = implode(" ", $newStrWords);
    return $newStr; // your code here
}