function replaceBR(text) {
    // "Ersetzen Sie <br> und <br /> durch \n
    return text.replace(/<br\s*\/?>/g, '\n');
}
 
module.exports = {replaceBR};
