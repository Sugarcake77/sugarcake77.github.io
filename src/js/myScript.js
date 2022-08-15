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
});

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
            Counter: $(this).data('value')
        }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {                      
            $(this).text(this.Counter.toFixed(2));
        }
    });
});