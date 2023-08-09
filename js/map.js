;(function() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
                center: [50.452119, 30.509209],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'г. Киев, Шевченковский район 8A'
            }, {
              
                iconLayout: 'default#image',
                iconImageHref: '../img/commom/marker.svg',
                iconImageSize: [40, 63],
                iconImageOffset: [-50, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'A custom placemark icon with contents',
                balloonContent: 'This one — for Christmas',
                iconContent: '12'
            }, {
            });
    
        myMap.geoObjects
            .add(myPlacemark)
    });
    
})();