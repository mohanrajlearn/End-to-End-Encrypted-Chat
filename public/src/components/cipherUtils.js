const crypto = require('crypto');

export function encrypt(text, key){
    var iv = key.slice(0, 16);
    var cipher = crypto.createCipheriv('aes-256-cbc',key, {iv: iv})
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
  }
  // d6F3Efeq
export function decrypt(text, key){
    var iv = key.slice(0, 16);
    var decipher = crypto.createDecipheriv('aes-256-cbc',key,  {iv: iv})
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }