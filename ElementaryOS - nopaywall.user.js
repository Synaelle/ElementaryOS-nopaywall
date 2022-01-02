// ==UserScript==
// @name         ElementaryOS - Remove paywall
// @namespace    https://github.com/Synaelle/ElementaryOS-nopaywall
// @version      0.1
// @description  It removes the fake paywall on ElementaryOS website
// @author       Synaelle
// @match        https://elementary.io/*
// @icon         https://elementary.io/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //I don't think three "duplicate" lines of commands is worth an array
    document.getElementById("payment-trust").style.display = 'none';
    document.getElementById("choice-buttons").style.display = 'none';
    document.getElementById("pay-what-you-want").style.display = 'none';
    document.getElementById("amount-twenty").value = '0';
    document.getElementById('translate-purchase').innerHTML = document.getElementById('translate-download').innerHTML;
}

)();