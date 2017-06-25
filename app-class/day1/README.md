# Day 1

## What's your favorite App?

### Difference between mobile apps and mobile games:
Get into group and have some go remote (To get the idea of mobile games vs mobile apps).

- Angry Birds is a mobile game.
    - In mobile games, as the name implies, you are playing a game.
- Instagram is a mobile app.
    - In mobile apps, you are interacting with the internet and/or displaying information.

## What will we be doing?
In this class we will be making a mobile app. The app will be an 'All about me' application. This app will contain information about your hobbies, likes and dislikes.

## Getting used to the command line:
The command line is how computers work. What we see is simply just a nice interface for us to interact with. Lets open up the command line and mess around.

- Typing in the command `ls` will list out all the folders and files where you currently are.
- The command `cd`, or 'change directory', will allow you to navigate the computer
- The command `touch` will allow you to create a file, for example `touch index.html`
- The command `mkdir`, or 'make directory', allows you to create a new folder. For example, `mkdir stlyes`.
- Lets try these commands out
    - Type in the command `cd ~/Desktop`
    - Then type in `dir`
    - Now lets create a new file, type in `echo some-text  > index.html`
    - Next lets make a new folder, type in `mkdir stlyes`
    
## Lets install the project:

1. Go to this Google Drive and download [this file](https://www.google.com/drive/).
2. Unzip the file on your Desktop.
3. Now lets open back up the command line and type in `cd innoved-app`.
4. Now lets install all our dependencies:
    - The Ionic Framework uses two dependency managers.
        - [Bower](https://bower.io/).
            - To install all __Bower__ dependencies run the command `bower update`.
        - [Node Package Manager](https://www.npmjs.com/), or NPM for short.
            - To install all __NPM__ dependencies run the command `npm install`.
                    
## The directory structure:

```
innoved-app/
    hooks/
    resources/
    scss/
    www/
        css/
            app.css
            ionic.app.css
            ionic.app.min.css
            style.css
        img/
            ionic.png
        js/
            app.js
        index.html
        manifest.json
        service-worker.js
    .bowerc
    .editorconfig
    .gitignore
    bower.json
    config.xml
    gulpfile.js
    ionic.config.json
    package.json
```

The only files that we will be working with:

- The entire `www/js/` folder.
- The `www/css/style.css` file.
- The `www/img/` folder.
   
# Creating the menu
Lets create a new folder called `menu` inside of the `www/js/` folder. In here we need to create two files a `menu.html` and a `menu.controller.js`.

- The `menu.html` is what is going to house our code that will be displayed.
   - Lets put the following code:
```html
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
```javascript
angular.module('app')
 .controller('menuController', menuController);

function menuController() {
 
}
```