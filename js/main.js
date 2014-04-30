$(document).ready(
        function() {

            $('img').css("visibility", "hidden");

            $.datepicker.regional[ "fr" ].minDate = 1;
            $.datepicker.regional[ "fr" ].showOtherMonths = true;
            $.datepicker.regional[ "fr" ].selectOtherMonths = true;
            $("#datepicker").datepicker($.datepicker.regional[ "fr" ]);
            
            $( "#radio, #radio2" ).buttonset();
            
            $("#form").submit(function(){
                alert('ok');
                return false;
            });
            
            $('#demarre_complet').click(function(){
                 $('#details_check_demarrage').hide();
                if( $(this).is(':checked') ){
                    $('#details_check_demarrage').show();
                }
            });

        }
);


$(window).load(
        function() {
            $('img').css("visibility", "visible");
            $('img').hide();
            $('img').fadeIn(1500);
            make_canvas({id: "c1", w: 800, h: 600});

            //run program
            t = setInterval(function() { //doc javascript
                ctx.clearRect(0, 0, $('#canvas').width(), $('#canvas').height()); //efface le canvas entier toute les x seconde, principe du dessin animé qui défile

                //Affichage :
                affiche_pos({x: 1, y: 10}); //ds fonction.js
                affiche_heure({x: 154, y: 13});
                affiche_tournois({x: 0, y: 150});
                //drawRotatedImage(img_hourglass, {x:180,y:40}, --angle2%360);

            }, refresh); //boucle toute les x secondes

            //event
            $('#canvas').mousemove(function(e) { // on rempli notre global cursor avec le e.offsetX de l'event mousemove a chaque fois que la page detect un mouvmt souris dans le canvas
                cursor.x = e.offsetX;
                cursor.y = e.offsetY;
            });

            $("#slider").slider({
                value: 4,
                min: 4,
                max: 32,
                step: 4,
                slide: function(event, ui) {
                    $("#amount").val(ui.value);
                }
            }).width(200);
            $("#amount").val($("#slider").slider("value"));

        }
);
