# Day 2

Since we are making an application on a computer we will be using Google Chrome's phone emulator. First we need to serve the app though.
1. Open up the terminal and type in `cd ~/Desktop/innoved-app/` then type in the command `gulp`
    - __Gulp__ allows us to take the files we have and make them usable for apps
2. Open up another terminal and type in `cd ~/Desktop/innoved-app/` then type in the command `ionic serve`
    - __Ionic Serve__ allows us to run the applications on our computer


## Creating the menu
Lets create a new folder called `menu` inside of the `www/js/` folder. In here we need to create two files a `menu.html` and a `menu.controller.js`.

- The `menu.html` is what is going to house our code that will be displayed.
    - Lets put the following code:
```
<ion-side-menus>
  <ion-side-menu-content>
    <ion-nav-bar class="bar-stable">
      <ion-nav-back-button></ion-nav-back-button>
      <ion-nav-buttons side="left">
        <button class="button button-icon button-clear ion-navicon" menu-toggle="left"></button>
      </ion-nav-buttons>
    </ion-nav-bar>
    <ion-nav-view name="menuContent"></ion-nav-view>
  </ion-side-menu-content>
  <ion-side-menu side="left">
    <ion-content>
      <ion-list>
        
      </ion-list>
    </ion-content>
  </ion-side-menu>
</ion-side-menus>

```

- The `menu.controller.js` is going to contain the code that will allow us to manipulate the __html__.
    - Lets put the following code:
```
angular.module('app')
  .controller('menuController', menuController);

function menuController() {
  
}
```

## How apps work
Before we show the menu lets take a break from the computers and discuss how apps work

## Displaying the menu
Now that we have a better understanding of how apps work lets create our main __state__, this state will act as the main state. All other states will be __sub-states__ of this menu state.

To create our menu we will need to write the following code on the `js/app.js` file:
```
 $stateProvider
      .state('myApp', {
        abstract: true,
        templateUrl: 'js/menu/menu.html',
        controller: 'menuController',
        controllerAs: 'menu'
      });
```

- `templateUrl` is what tells the JavaScript where the HTML we wrote will be housed.
- `controller` is, as the name implies, is what controls our state
- `controllerAs` allows us to reference the controller in more simple language
