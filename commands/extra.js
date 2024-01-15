/**
========================================================
   _____ _    _          _____  _  __           __  __ _____  
  / ____| |  | |   /\   |  __ \| |/ /          |  \/  |  __ \ 
 | (___ | |__| |  /  \  | |__) | ' /   ______  | \  / | |  | |
  \___ \|  __  | / /\ \ |  _  /|  <   |______| | |\/| | |  | |
  ____) | |  | |/ ____ \| | \ \| . \           | |  | | |__| |
 |_____/|_|  |_/_/    \_\_|  \_\_|\_\          |_|  |_|_____/ 
 
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : Shark-Md                                                                    
 * @author : USMAN-SER <https://github.com/USMAN-SER>   
 * @description : Shark-Md ,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                             
 ========================================================
 **/

 
const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "user",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('Please quote any text to get link.')
        let data = await pastebin.createPaste(citel.quoted.text, "Secktor-Pastebin")
        citel.reply('_Here is your link._\n'+data)
    }
);
