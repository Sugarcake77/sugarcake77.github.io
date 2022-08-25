$(document).ready(function () {
    
    //калькулятор
    function calculate() {
        let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
        let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
        $(".days .digit").text(days);
        $(".stoimost .digit").text(sum);
    }
    $("select").on("change", function () {
        calculate();
    });
    calculate();

    //плавный скролл якорей
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });
    
    //якоря
    $('a[href^="#"]').click(function () {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 600);
    });
    
    //анимация при скролле
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');

    elements.each((i, el) => {
        observer.observe(el);
    });


    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    //модальное окно в кейсах
    $('.image-link').magnificPopup({type:'image'});

    //загрузка картинок при скролле
    let optionsImg = {
        threshold: [0.5]
    };
    let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
    let elementsImg = $('.lazy_image');

    elementsImg.each((i, el) => {
        observerImg.observe(el);
    });


    function onEntryImg(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.src = change.target.getAttribute('data-src');
            }
        });
    }
    
    let isCounterStart = false
    let optionsCount = {
        threshold: [0.5]
    };
    let observerCount = new IntersectionObserver(onEntryCount, optionsCount);
    let elementsCount = $('.stat__container');

    elementsCount.each((i, el) => {
        observerCount.observe(el);
    });


    function onEntryCount(entry) {
        entry.forEach(change => {
            if (change.isIntersecting && !isCounterStart) {
                isCounterStart = true
                $('.count').each(function () {
                    $(this).prop('counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        });
    }
    
    
});