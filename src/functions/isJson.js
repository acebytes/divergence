'use strict';
module.exports = function isJson(json) {
        const text = JSON.stringify(json);
        try{
            JSON.parse(text);
            return true;
        }
        catch (error){
            console.log('=================ERROR===================')
            return false;
        }
};