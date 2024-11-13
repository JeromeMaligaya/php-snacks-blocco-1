<?php

function getCount(string $str): int
{
    $vowels = ['a', 'e', 'i', 'o', 'u'];
    $userWord = str_split($str);
    $vowelsCounter = 0;

    foreach ($userWord as $letter) {
        if (in_array($letter, $vowels)) {
            $vowelsCounter += 1;
        }
    }
    return $vowelsCounter; // your code here
}
