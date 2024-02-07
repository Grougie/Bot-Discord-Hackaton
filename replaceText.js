function replaceBR(text) {
    return text.replace(/<br\s*\/?>/g, '\n');
}
 
module.exports = {replaceBR};
