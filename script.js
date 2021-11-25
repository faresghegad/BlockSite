// ==UserScript==
// @name         BlockSite for free
// @namespace    https://www.facebook.com/fares.ghegad.04
// @version      0.1
// @description  bloquer des domain de site web
// @author       Fares Ghegad
// @match        *
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMcbhvP9CrmDfXODm6xhHl-OUTVVIdzRaCA&usqp=CAU
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var site_web_par_defaut = "https://www.google.com/";
    var blacklist = [
        "youtube",
        ""
    ];
    var whitelist =[
        "youtube",
        "google"
    ];
    // black pour blocker les sites web sur le tableau blacklist
    // white pour blocker tout les sites web a par les site web sur tableau whitelist
    var type = "black";
    if(type == "black")
    {
        blacklist.forEach(element => {
            if(location.hostname.split('.')[1] == element)
            {
                location.replace(site_web_par_defaut);
                return;
            }
        });
    }
    else if(type == "white")
    {
        var block = true;
        whitelist.forEach(element => {
            if(location.hostname.split('.')[1] == element)
            {
                block = false;
            }
        });
        if(block)
        {
            location.replace(site_web_par_defaut);
            return;
        }
    }
})();