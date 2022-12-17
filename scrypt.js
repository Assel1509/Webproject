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

<script>
  var slideIndex = 0;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n-1);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 0;
    }    
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}   
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 50000);
    }
  </script> 
