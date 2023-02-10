'use strict';


document.cookie = "cookies=none";
document.cookie = "sameSite=strict";

(function ($) {

            "use strict";
        let words = document.querySelectorAll(".word");
        words.forEach((word) => {
            let letters = word.textContent.split("");
            word.textContent = "";
            letters.forEach((letter) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });
        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";
        let rotateText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
            // rotate out letters of current word
            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out";
                }, i * 80);
            });
            // reveal and rotate in letters of next word
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });
            currentWordIndex =
                currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };
        rotateText();
        setInterval(rotateText, 4000);

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__thumb img').on('click', function () {
        $('.product__details__thumb .pt__item').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.big_img').attr('src');
        if (imgurl != bigImg) {
            $('.big_img').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change

    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    	--------------------- */

    

    $(".product__details__thumb").niceScroll({
        cursorborder: "",
        cursorcolor: "rgba(0, 0, 0, 0.5)",
        boxzoom: false
      });

      if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
        
})(jQuery);
