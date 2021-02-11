$(() => {
    // ***** create alphabet
    const $lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let letter of $lettersArr) {
        const $letter = $('<div>' + letter + '<div>').addClass('letter');
        $('.letters').append($letter);
    }

    // function RESET
    const resetGame = () => {
        $('.hidden-letter').remove();
        $('.hidden-space').remove();
        $('.word-letter').remove();
        startGame();
    }

    // function START
    const startGame = (e) => {
        $('#start').addClass('start-clicked');
        // ***** add empty border-bottoms for each letter of the hidden word
        const $wordsArr = ['BRAD PITT', 'AL PACINO', 'MONICA BELUCCI', 'JENNIFER ANISTON', 'ANNE HATHAWAY', 'DENZEL WASHINGTON', 'MATHEW MCCONAUGHEY', 'JOAQUIN PHOENIX', 'LUPITA NYONGO', 'RYAN REYNOLDS', 'HUGH JACKMAN', 'SCARLET JOHANSSON', 'LEONARDO DICAPRIO', 'CHADWICK BOSEMAN'];

        const $randomIndex = Math.floor(Math.random() * $wordsArr.length);

        // ***** add clicked letters to word div
        // $('.letter').one('click', (e) => {
        //     $(e.currentTarget).addClass('letter-selected');
        //     const $wordLetter = $(e.currentTarget);
        //     $wordLetter.clone().appendTo($('#word')).removeClass().addClass('word-letter');
        // });


        if ($('#word') !== '') {
            // get element from the array
            const $actor = $wordsArr[$randomIndex];
            for (i = 0; i < $actor.length; i++) {
                const $hiddenLetter = $('<div>' + $actor[i] + '</div>');
                if ($actor[i] === ' ') {
                    $($hiddenLetter).addClass('hidden-space');
                    $('#word').append($hiddenLetter);
                } else {
                    $($hiddenLetter).addClass('hidden-letter');
                    $('#word').append($hiddenLetter);
                };
            };
        };


        $('.letter').one('click', (e) => {
            $(e.currentTarget).addClass('letter-selected');
            const $wordLetter = $(e.currentTarget);
            const $actor = $('.hidden-letter');
            for (i = 0; i < $actor.length; i++) {
                if ($wordLetter.text() === $actor.text()[i]) {
                    $($actor[i]).removeClass('hidden-letter').addClass('word-letter');
                    console.log($actor);
                } else {
                    console.log('sup');
                }
            }
        });



        // buttons RESET 
        $('#reset').on('click', resetGame);

    };

    // buttons START 
    $('#start').one('click', startGame);


    // if text inside of letter === text inside of hidden-letter turn class hidden-letter to word-letter


});