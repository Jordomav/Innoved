# Day 3

### Creating the Likes/Dislikes page

Again we need to create a `likes/` folder, in there lets create a `likes.html` and a `likes.controller.js`

On the `likes.html` page lets put:
```html
<ion-view title="Likes/Dislikes" class="likes">
  <ion-content padding="true">
    <h1>Spider-Man's Likes and Dislikes</h1>
  </ion-content>
</ion-view>
```

On the `likes.controller.js`:
```javascript
angular.module('app')
  .controller('likesController', likesController);

function likesController() {

  

}
```

Finally we will need to update the `js/app.js` to account for our new view:
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
                });
```

Now if we go back to the emulator we will see the likes page displayed. Of course now we will need to update now our `menu` to allow us to navigate to it.
Lets add the following line to the `menu.html`
`<ion-item menu-close ui-sref="myApp.likes">Likes/Dislikes</ion-item>`

Now that we have that all done lets start adding some likes and dislikes on the `likes/likes.html`:
```html
<ion-view title="Likes/Dislikes" class="likes">
  <ion-content padding="true">
    <h1>Spider-Man's Likes and Dislikes</h1>
    <div class="list">
        <div class="item item-divider">Likes</div>
        <p class="item">Crime Fighting</p>
        <p class="item">Mary Jane</p>
        <p class="item">Web Swinging</p>
        <div class="item item-divider">Dislikes</div>
        <p class="item">Criminals</p>
        <p class="item">Green Goblin</p>
        <p class="item">Stealing</p>
    </div>
  </ion-content>
</ion-view>
```

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
    <h1>Here I am</h1>
  </ion-content>
</ion-view>
```