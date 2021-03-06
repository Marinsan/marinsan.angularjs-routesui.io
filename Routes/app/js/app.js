﻿var routerApp = angular.module('routerApp', ['ui.router', 'core', 'validationApp', 'ngAnimate', 'ngMaterial', 'ngMessages', 'dx', 'ngStorage', 'ngCookies', 'ngMap']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/logindb');

     $stateProvider

    
      // Vistes del routeui

         // Antic Login

   //     .state('login', {
   //         url: '/login',
   //         templateUrl: 'templates/user/login.html',
   //         controller: 'LoginController as vm',    
   //     })
    
        .state('phone', {
            url: '/phone',
            views: {
                "": {
                    templateUrl: 'templates/phones/partial-phone.html',
                   
                },

                'Phones@phone':
                {
                    templateUrl: 'templates/phone-list/partial-phone-list.html',
                    controller: 'PhoneController', 
                },
                
                'Details@phone': {
                    
                    templateUrl: 'templates/phone-detail/partial-phone-detail.html',
                    controller: 'DetailController',
                   
                }
            },
            params: {
                telefonSeleccionat: {}
            },
            
        })

    
    .state('form', {
        url: '/form',
        templateUrl: 'templates/forms/partial-form.html',
        
       
    })

    .state('formng', {
        url: '/formNgMessages',
        templateUrl: 'templates/forms/partial-form-ngmessages.html',
      
        
    })
    .state('formMaterial', {
        url: '/formMaterial',
        templateUrl: 'templates/forms/partial-form-material.html',
        
        })
    .state('help', {
        url: '/help',
        templateUrl: 'templates/help.html',
       
        })
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        
         })
     .state('contact', {
         url: '/contact',
         templateUrl: 'templates/contact.html',
         
        })
    .state('taula', {
        url: '/taula',
        templateUrl: 'templates/data-devextrem/data-grid.html',
        controller: 'GridController',
        
    })
        .state('taulaapi', {
            url: '/taula_api',
            templateUrl: 'templates/data-devextrem/data-grid-api.html',
            controller: 'GridController2',
           
        })
    .state('Taula_db', {
        url: '/Employee',
        templateUrl: 'templates/taula-db.html',
        controller: 'TaulaController'
       
    })
    .state('mapa', {
        url: '/mapa',
        templateUrl: 'templates/map.html',

    })
    .state('todo', {
        url: '/todo',
        templateUrl: 'templates/todo.html',

    })
    .state('Customers', {
        url: '/Customers',
        templateUrl: 'templates/data-db/data-customers.cshtml',

    })
    .state('LoginDB', {
        url: '/logindb',
        templateUrl: 'templates/user/Login-db.html',

    })

});

routerApp.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {

        $rootScope.globals = $cookieStore.get('globals') || {};

        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {

            // comentat ja que amb el nou login no actua correctament

        //    if ($location.path() !== '/logindb' && !$rootScope.globals.currentUser) {
        //        $location.path('/logindb');
        //    }
        })
  

    }
]);

routerApp.run(function ($rootScope, $location) {
    $rootScope.location = $location;
});

// Controlador llista telefons

routerApp.controller('PhoneController', function($scope, $stateParams) {
    $scope.phones = [
{
    "age": 0,
    "id": "motorola-xoom-with-wi-fi",
    "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
    "name": "Motorola XOOM\u2122 with Wi-Fi",
    "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
    "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope",
    "android": {
        "os": "Android 3.0",
        "ui": "Honeycomb"
    },
    "availability": [
        ""
    ],
    "battery": {
        "standbyTime": "336 hours",
        "talkTime": "24 hours",
        "type": "Other ( mAH)"
    },
    "camera": {
        "features": [
            "Flash",
            "Video"
        ],
        "primary": "5.0 megapixels"
    },
    "connectivity": {
        "bluetooth": "Bluetooth 2.1",
        "cell": "",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 b/g/n"
    },
    "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
    "display": {
        "screenResolution": "WXGA (1200 x 800)",
        "screenSize": "10.1 inches",
        "touchScreen": true
    },
    "hardware": {
        "accelerometer": true,
        "audioJack": "3.5mm",
        "cpu": "1 GHz Dual Core Tegra 2",
        "fmRadio": false,
        "physicalKeyboard": false,
        "usb": "USB 2.0"
    },
    "id": "motorola-xoom-with-wi-fi",
    "images": [
        "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "img/phones/motorola-xoom-with-wi-fi.1.jpg",
        "img/phones/motorola-xoom-with-wi-fi.2.jpg",
        "img/phones/motorola-xoom-with-wi-fi.3.jpg",
        "img/phones/motorola-xoom-with-wi-fi.4.jpg",
        "img/phones/motorola-xoom-with-wi-fi.5.jpg"
    ],
    "name": "Motorola XOOM\u2122 with Wi-Fi",
    "sizeAndWeight": {
        "dimensions": [
            "249.1 mm (w)",
            "167.8 mm (h)",
            "12.9 mm (d)"
        ],
        "weight": "708.0 grams"
    },
    "storage": {
        "flash": "32000MB",
        "ram": "1000MB"
    }
},
{
    "age": 1,
    "id": "motorola-xoom",
    "imageUrl": "img/phones/motorola-xoom.0.jpg",
    "name": "MOTOROLA XOOM\u2122",
    "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
    "additionalFeatures": "Front-facing camera. Sensors: proximity, ambient light, barometer, gyroscope.",
    "android": {
        "os": "Android 3.0",
        "ui": "Android"
    },
    "availability": [
        "Verizon"
    ],
    "battery": {
        "standbyTime": "336 hours",
        "talkTime": "24 hours",
        "type": "Other (3250 mAH)"
    },
    "camera": {
        "features": [
            "Flash",
            "Video"
        ],
        "primary": "5.0 megapixels"
    },
    "connectivity": {
        "bluetooth": "Bluetooth 2.1",
        "cell": "CDMA 800 /1900 LTE 700, Rx diversity in all bands",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 a/b/g/n"
    },
    "description": "MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
    "display": {
        "screenResolution": "WXGA (1200 x 800)",
        "screenSize": "10.1 inches",
        "touchScreen": true
    },
    "hardware": {
        "accelerometer": true,
        "audioJack": "3.5mm",
        "cpu": "1 GHz Dual Core Tegra 2",
        "fmRadio": false,
        "physicalKeyboard": false,
        "usb": "USB 2.0"
    },
    "id": "motorola-xoom",
    "images": [
        "img/phones/motorola-xoom.0.jpg",
        "img/phones/motorola-xoom.1.jpg",
        "img/phones/motorola-xoom.2.jpg"
    ],
    "name": "MOTOROLA XOOM\u2122",
    "sizeAndWeight": {
        "dimensions": [
            "249.0 mm (w)",
            "168.0 mm (h)",
            "12.7 mm (d)"
        ],
        "weight": "726.0 grams"
    },
    "storage": {
        "flash": "32000MB",
        "ram": "1000MB"
    }
},
{
    "age": 2,
    "carrier": "AT&T",
    "id": "motorola-atrix-4g",
    "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
    "name": "MOTOROLA ATRIX\u2122 4G",
    "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
    "additionalFeatures": "",
    "android": {
        "os": "Android 2.2",
        "ui": "MOTOBLUR"
    },
    "availability": [
        "AT&T"
    ],
    "battery": {
        "standbyTime": "400 hours",
        "talkTime": "5 hours",
        "type": "Lithium Ion (Li-Ion) (1930 mAH)"
    },
    "camera": {
        "features": [
            ""
        ],
        "primary": ""
    },
    "connectivity": {
        "bluetooth": "Bluetooth 2.1",
        "cell": "WCDMA 850/1900/2100, GSM 850/900/1800/1900, HSDPA 14Mbps (Category 10) Edge Class 12, GPRS Class 12, eCompass, AGPS",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 a/b/g/n"
    },
    "description": "MOTOROLA ATRIX 4G gives you dual-core processing power and the revolutionary webtop application. With webtop and a compatible Motorola docking station, sold separately, you can surf the Internet with a full Firefox browser, create and edit docs, or access multimedia on a large screen almost anywhere.",
    "display": {
        "screenResolution": "QHD (960 x 540)",
        "screenSize": "4.0 inches",
        "touchScreen": true
    },
    "hardware": {
        "accelerometer": true,
        "audioJack": "3.5mm",
        "cpu": "1 GHz Dual Core",
        "fmRadio": false,
        "physicalKeyboard": false,
        "usb": "USB 2.0"
    },
    "id": "motorola-atrix-4g",
    "images": [
        "img/phones/motorola-atrix-4g.0.jpg",
        "img/phones/motorola-atrix-4g.1.jpg",
        "img/phones/motorola-atrix-4g.2.jpg",
        "img/phones/motorola-atrix-4g.3.jpg"
    ],
    "name": "MOTOROLA ATRIX\u2122 4G",
    "sizeAndWeight": {
        "dimensions": [
            "63.5 mm (w)",
            "117.75 mm (h)",
            "10.95 mm (d)"
        ],
        "weight": "135.0 grams"
    },
    "storage": {
        "flash": "",
        "ram": ""
    }
}
    ]
    ;
    $scope.orderProp = 'age';
    $scope.phone = $stateParams.telefonSeleccionat;
    
})

// Controlador vista detalls telefons 

routerApp.controller('DetailController', function ($stateParams, $scope) {

    $scope.phone = $stateParams.telefonSeleccionat;
})