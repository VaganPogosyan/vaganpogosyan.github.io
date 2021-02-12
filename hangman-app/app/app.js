$(() => {
    // ***** create alphabet
    const $lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // add alphabet with letters to click on
    for (let letter of $lettersArr) {
        const $letter = $('<div>' + letter + '<div>').addClass('letter');
        $('.letters').append($letter);
    }

    let $count = 0;

    // function RESET GAME
    const resetGame = () => {
        $('.hidden-letter').remove();
        $('.hidden-space').remove();
        $('.word-letter').remove();
        $('.missed-letter').remove();
        startGame();
        $('#image').attr('src', 'style/img/Hangman_Empty.jpg');
    }

    // array with hidden words (names of famous actors)
    const $wordsArr = ['BRAD PITT', 'AL PACINO', 'MONICA BELUCCI', 'JENNIFER ANISTON', 'ANNE HATHAWAY', 'DENZEL WASHINGTON', 'MATHEW MCCONAUGHEY', 'JOAQUIN PHOENIX', 'LUPITA NYONGO', 'RYAN REYNOLDS', 'HUGH JACKMAN', 'SCARLET JOHANSSON', 'LEONARDO DICAPRIO', 'CHADWICK BOSEMAN'];

    // function START
    const startGame = (e) => {
        $('.letter').removeClass('letter-selected');
        $('#start').addClass('start-clicked');
        // ***** add empty border-bottoms for each letter of the hidden word

        // declare a random index for the array of hidden words
        const $randomIndex = Math.floor(Math.random() * $wordsArr.length);

        // add the hidden word to the div #word with hiding the space between actor's first and last names
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

        // remove word from the array so it won't show up again as next hidden word
        $wordsArr.splice($randomIndex, 1);

        // count of clicks should start from 0 everytime function startGame is executed
        $count = 0;
        // console.log($count);

        // user can click on a letter only once
        $('.letter').one('click', (e) => {
            $(e.currentTarget).addClass('letter-selected');
            const $wordLetter = $(e.currentTarget);
            const $actor = $('.hidden-letter');
            for (i = 0; i < $actor.length; i++) {
                // if the clicked letter equals to any letter form hidden word show that letter in the word
                if ($wordLetter.text() === $actor.text()[i]) {
                    $($actor[i]).removeClass('hidden-letter').addClass('word-letter');
                }
            }

            // if amount of shown letters equals to the amount of letters in the hidden word without the space - user wins
            if ($('#word div').length === $('.word-letter').length + 1) {
                setTimeout(() => { alert('Good job! To play again hit "Reset".') }, 100);
            }

            // array of images that will switch each time the user clicks on a wrong letter
            const $hangmanImages = ['style/img/Hangman_1.jpg', 'style/img/Hangman_2.jpg', 'style/img/Hangman_3.jpg', 'style/img/Hangman_4.jpg', 'style/img/Hangman_5.jpg', 'style/img/Hangman_6.jpg', 'style/img/Hangman_loose.jpg'];

            // if the hidden word doesn't "include" the clicked letter image shanges to the next in the array
            // every mistake adds up to variable "$count" so we could count how many mistakes user did
            if ($actor.text().includes($wordLetter.text()) === false) {
                console.log($count);
                if ($count === 0) {
                    $('#image').attr('src', $hangmanImages[0]);
                    $count = $count + 1;
                    return;
                } else if ($count === 1) {
                    $('#image').attr('src', $hangmanImages[1]);
                    $count = $count + 1;
                    return;
                } else if ($count === 2) {
                    $('#image').attr('src', $hangmanImages[2]);
                    $count = $count + 1;
                    return;
                } else if ($count === 3) {
                    $('#image').attr('src', $hangmanImages[3]);
                    $count = $count + 1;
                    return;
                } else if ($count === 4) {
                    $('#image').attr('src', $hangmanImages[4]);
                    $count = $count + 1;
                    return;
                } else if ($count === 5) {
                    $('#image').attr('src', $hangmanImages[5]);
                    $count = $count + 1;
                    return;
                } else if ($count === 6) {
                    // if user makes 7 mistakes he looses the game
                    $('#image').attr('src', $hangmanImages[6]);
                    setTimeout(() => { alert('You Lost. Hit the "Reset" button to reset the game.') }, 100);
                    // show all the letters user didn't guess
                    $('.hidden-letter').removeClass('hidden-letter').addClass('missed-letter');
                    // $count = 0;
                    return;
                }
            };
        });
        // buttons RESET 
        $('#reset').on('click', resetGame);
    };

    // buttons START 
    $('#start').one('click', startGame);
});