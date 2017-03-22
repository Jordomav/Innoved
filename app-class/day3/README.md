# Day 3

## Creating our first view
Let's create a home page.
Again we need to create a `home/` folder, in there lets create a `home.html` and a `home.controller.js`

On the `home.html` page lets put:
```
<ion-view title="Home" class="home">
  <ion-content padding="true">
    <h1>Hello World!</h1>
  </ion-content>
</ion-view>
```

On the `home.controller.js`:
```javascript
angular.module('app')
  .controller('homeController', homeController);

function homeController() {

  

}
```

Finally we will need to update the `js/app.js` to account for our new view:
```javascript
$urlRouterProvider.otherwise('/home');

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
          });
```

Now if we go back to the emulator we will see the home page displayed. Of course now we will need to update now our `menu` to allow us to navigate to it.
Lets add the following line to the `menu.html`
`<ion-item menu-close ui-sref="myApp.home">Home</ion-item>`

Now that we have the menu and home page displaying lets add some stuff to the home page.

On the `home.html` lets put our names.

```html
<ion-view title="Home" class="home">
  <ion-content padding="true">
    <h1 class="myName">Jordan's App</h1>
  </ion-content>
</ion-view>
```


Now that we have our names showing lets make it look nice, lets change the name color to our favorite color:
In our `www/css/styles.css` lets add this:
```css
.myName {
    color: blue;
}
```

And now your name should be there in your favorite color!

Since this is an app about us lets take a break and take some pictures.

To get our pictures to show we need to add them to the `www/img/` folder:
Lets call it `me.jpg`, so it should be here `www/img/me.jpg`

To show our pictures lets add the following tag to the `home.html`

```html
<ion-view title="Home" class="home">
  <ion-content padding="true">
    <h1 class="myName">Jordan's App</h1>
    <img src="img/me.jpg" style="width: 100%;">
  </ion-content>
</ion-view>
```

Now we have both our name and picture shown on the home screen!
