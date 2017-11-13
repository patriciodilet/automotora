var Promise = require('bluebird');

module.exports = {
    searchHotels: function (destination, checkInDate, checkOutDate) {
        return new Promise(function (resolve) {

            // Filling the hotels results manually just for demo purposes
            var hotels = [];
            for (var i = 1; i <= 6; i++) {
                hotels.push({
                    name: 'Auto ' + i,
                    location: destination,
                    rating: Math.ceil(Math.random() * 5),
                    numberOfReviews: Math.floor(Math.random() * 5000) + 1,
                    priceStarting: Math.floor(Math.random() * 2000000) + 80,
                    image: 'http://chatxbot.com/demos/enlacemercado/auto' + i + '.jpg',
                    moreImages: [
                        'http://chatxbot.com/demos/enlacemercado/auto6.jpg',
                        'http://chatxbot.com/demos/enlacemercado/auto5.jpg',
                        'http://chatxbot.com/demos/enlacemercado/auto4.jpg',
                        'http://chatxbot.com/demos/enlacemercado/auto3.jpg'
                    ]
                });
            }

            hotels.sort(function (a, b) { return a.priceStarting - b.priceStarting; });

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(hotels); }, 1000);
        });
    }
};