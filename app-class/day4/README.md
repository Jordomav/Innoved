# Day 4

Now that we have a likes page lets create a __info__ page.

Once again lets modify the `js/app.js`:
```javascript
$urlRouterProvider.otherwise('/likes');

$stateProvider
      .state('myApp', {
        abstract: true,
        templateUrl: 'js/menu/menu.html',
        controller: 'menuController',
        controllerAs: 'menu'
      })
    .state('myApp.home', {
            url: '/home',
            views: {
              menuContent: {
                templateUrl: 'js/home/home.html',
                controller: 'homeController',
                controllerAs: 'home'
              }
            }
          })
          .state('myApp.likes', {
                  url: '/likes',
                  views: {
                    menuContent: {
                      templateUrl: 'js/likes/likes.html',
                      controller: 'likesController',
                      controllerAs: 'likes'
                    }
                  }
                })
          .state('myApp.info', {
                url: '/info',
                views: {
                    menuContent: {
                        templateUrl: 'js/info/info.html',
                        controller: 'infoController',
                        controllerAs: 'info'
                    }
                });
```

And of course we need to also create a `/info` folder with a `info.html` and a `info.controller.js` in the `js/` folder.

Our `info.controller.js` should look like this:
```javascript
angular.module('app')
  .controller('infoController', infoController);

function infoController() {

  

}
```

And our `info.html`:
```html
<ion-view title="Info" class="info">
  <ion-content padding="true">
    
  </ion-content>
</ion-view>
```

Now we are going to create a card that will contain facts about us, such as our birthday and favorite color.
So on the `info.html` lets add this
```html
<div class="list card">
  <div class="item item-body">
    <img class="full-image" src="img/me.jpg">
    <p>Born- August 1962</p>
    <p>Favorite Color- Red</p>
    <p>Favorite Subject- Science</p>
  </div>
</div>
```

Now that we have added a card about us lets add some more info to it.

With all that lets take the rest of the time to let everyone work on their different pages and add more info to the `info.html` and `likes.html`.