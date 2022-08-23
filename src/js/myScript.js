$(document).ready(function () {

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

    $('a[href^="#"]').click(function () {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 600);
    });

        var windowHeight = $(window).height();

        $(document).on('scroll', function () {
            $('.section').each(function () {
                var self = $(this),
                    height = self.offset().top + self.height() / 2 - windowHeight / 2;
                if ($(document).scrollTop() >= height) {
                    self.addClass('green');
                }
            });
        });
    
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
    
        $('.image-link').magnificPopup({type:'image'});
});


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