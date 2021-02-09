$(() => {
    const $lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let letter of $lettersArr) {
        const $letter = ('<div>' + letter + '</div>');
        // $($letter).addClass('letter');
        // console.log($letter.hasClass('class'));
        $('.letters').append($letter);

    }


})