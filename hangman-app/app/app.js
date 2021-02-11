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
        $('.missed-letter').remove();
        startGame();
        $('#image').attr('src', 'style/img/Hangman_Empty.jpg');
    }


    const $wordsArr = ['BRAD PITT', 'AL PACINO', 'MONICA BELUCCI', 'JENNIFER ANISTON', 'ANNE HATHAWAY', 'DENZEL WASHINGTON', 'MATHEW MCCONAUGHEY', 'JOAQUIN PHOENIX', 'LUPITA NYONGO', 'RYAN REYNOLDS', 'HUGH JACKMAN', 'SCARLET JOHANSSON', 'LEONARDO DICAPRIO', 'CHADWICK BOSEMAN'];

    // function START
    const startGame = (e) => {
        $('.letter').removeClass('letter-selected');
        $('#start').addClass('start-clicked');
        // ***** add empty border-bottoms for each letter of the hidden word


        const $randomIndex = Math.floor(Math.random() * $wordsArr.length);

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

        // remove word from the array so it won't show up as a next hidden word
        $wordsArr.splice($randomIndex, 1);
        console.log($wordsArr);

        let $count = 0;
        $('.letter').one('click', (e) => {
            $(e.currentTarget).addClass('letter-selected');
            const $wordLetter = $(e.currentTarget);
            const $actor = $('.hidden-letter');

            for (i = 0; i < $actor.length; i++) {
                if ($wordLetter.text() === $actor.text()[i]) {
                    $($actor[i]).removeClass('hidden-letter').addClass('word-letter');
                }
            }

            const $hangmanImages = ['style/img/Hangman_1.jpg', 'style/img/Hangman_2.jpg', 'style/img/Hangman_3.jpg', 'style/img/Hangman_4.jpg', 'style/img/Hangman_5.jpg', 'style/img/Hangman_6.jpg', 'style/img/Hangman_loose.jpg'];

            if ($actor.text().includes($wordLetter.text()) === false) {
                if ($count === 0) {
                    $('#image').attr('src', $hangmanImages[0]);
                    $count++;
                } else if ($count === 1) {
                    $('#image').attr('src', $hangmanImages[1]);
                    $count++;
                } else if ($count === 2) {
                    $('#image').attr('src', $hangmanImages[2]);
                    $count++;
                } else if ($count === 3) {
                    $('#image').attr('src', $hangmanImages[3]);
                    $count++;
                } else if ($count === 4) {
                    $('#image').attr('src', $hangmanImages[4]);
                    $count++;
                } else if ($count === 5) {
                    $('#image').attr('src', $hangmanImages[5]);
                    $count++;
                } else if ($count === 6) {
                    $('#image').attr('src', $hangmanImages[6]);
                    setTimeout(() => { alert('You Lost') }, 100);
                    $('.hidden-letter').removeClass('hidden-letter').addClass('missed-letter');
                    $count === 0;
                }
            };


        });
        // $('#image').attr('src', 'style/img/Hangman_1.jpg');




    };

    // buttons RESET 
    $('#reset').on('click', resetGame);

    // buttons START 
    $('#start').one('click', startGame);


    // if text inside of letter === text inside of hidden-letter turn class hidden-letter to word-letter


});