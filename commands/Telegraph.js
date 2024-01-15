
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
 * @author : naveeddogar <https://github.com/USMAN-SER>   
 * @description : Shark-Md ,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                             
 ========================================================
 **/
 
 
const { cmd }   = require('../lib');
const util = require('util');
const axios = require('axios');
cmd({
        pattern: "paste",
        desc: "create paste of text.",
        category: "user",
        filename: __filename,
    },
    async(Void, citel,text) => {
 let a = citel.quoted ? citel.quoted.text : citel.text;
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Shark-Md+Bot&author_name=USMAN-SER &content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);

