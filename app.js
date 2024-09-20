/* FOOTER */
function limitWords(textarea) {
    const maxWords = 100;
    let words = textarea.value.split(/\s+/).filter(word => word.length > 0);

    if (words.length > maxWords) {
        words = words.slice(0, maxWords);
        textarea.value = words.join(' ');
    }
}