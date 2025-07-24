let regex = new RegExp("\b(?:(?:[a-zA-Z]{2,})\x01+|(?:[a-z]{3,})(?:asdf|qwer|zxcv|qaz|wsx|edc|rfv|tgb|yhn|ujm|ik,|ol\.|pl;|poi|lkj|mnb|vcx|bnm)|([a-z])\x03{2,}|(.{2,4})\x04+)\b");

exports.checkMash = function(item) {
    let lowerCase  = item.toLowerCase();
    return regex.test(lowerCase);
}