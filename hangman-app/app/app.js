




$(() => {
    // create alphabet
    const $lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];




    for (let letter of $lettersArr) {

        const $letter = $('<div>' + letter + '<div>').addClass('letter');
        $('.letters').append($letter);
        console.log($letter.text())
    }


    // add clicked letters to word div

    $('.letter').one('click', (e) => {
        $(e.currentTarget).addClass('letter-selected');
        const $wordLetter = $(e.currentTarget);
        $wordLetter.clone().appendTo($('#word')).removeClass().addClass('word-letter');
    })




})