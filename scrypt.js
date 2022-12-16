<script type="text/javascript">
        ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [43.225807, 76.807849],
                zoom: 14
        });

        myPlacemark = new ymaps.Placemark([43.225807,76.807849], { hintContent:'OUR OFFICE'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }
    </script>
