$(document).ready(
        function() {
            $('img').hide();
            $.datepicker.regional[ "fr" ].minDate = 0;
            $.datepicker.regional[ "fr" ].showOtherMonths= true;
            $.datepicker.regional[ "fr" ].selectOtherMonths= true;
            $("#datepicker").datepicker($.datepicker.regional[ "fr" ]);
        }

);


$(window).load(
        function() {
            $('img').fadeIn(1500);
        }

);
