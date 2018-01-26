# Day 2

First of all we need to start up the application so we can see it. To open up a Command Prompt click on the windows logo in the bottom left and then type in __cmd__. When the prompt opens up type in `cd Desktop` and then `cd yourname-app`. Finally type in `ionic serve`.

## Updating our home page

Last session we got our home page up and running. Currently it is very basic, so lets add both a picture and our name to it.

On our `home/home.html` lets modify it to look like this:
```html
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <h1 class="text-center">Jordan's App</h1>
  <img src="assets/imgs/me.jpg" alt="me" style="width: 100%;">
  <div class="content-padding">
    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iste labore obcaecati! Aliquam, aliquid, dolorum eligendi exercitationem explicabo ipsam modi nemo perspiciatis porro quam recusandae, saepe sequi suscipit veniam vitae?</p>
  </div>
</ion-content>
```

If we go back and look at our app it should be updated but our image will not be there. This is because we currently don't have an image to display. Lets go get one.
Once we have an image lets add it to `src/assets/imgs/` and be sure its called `me.jpg`.

Going back to your app you will see that it now shows your image!

Lets go take a look at the [Ionic Documentation](https://ionicframework.com/docs/components/) to see about all the things that we can do with Ionic out of the box.

To keep things simple lets make a list. which you can see an example of [here](https://ionicframework.com/docs/components/#lists). So lets add a `list/` folder and then a `list.html` `list.ts` and `list.scss`.

First lets code out our `list.ts` to look like this:
```typescript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController) {

  }

}
```

Next lets do our `list.html`:
```html
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Lists</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <h1 class="text-center">My lists!</h1>
</ion-content>
```

After that we need to update our `app/app.module.ts`:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```

And then finally add it to our `app/app.component.ts` so we can navigate to the new page:
```typescript
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Lists', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
```

If we go back to our app we can see that our list page is there. Now lets finally update our list page to actually show a list.
```html
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <h1 class="text-center">Jordan's Likes/Dislikes</h1>
    <ion-list>
      <ion-list-header>Likes</ion-list-header>
      <ion-item>Code</ion-item>
      <ion-item>Technology</ion-item>
      <ion-item>Comics</ion-item>
      <ion-list-header>Dislikes</ion-list-header>
      <ion-item>Foo</ion-item>
      <ion-item>Bar</ion-item>
      <ion-item>Baz</ion-item>
    </ion-list>
</ion-content>
```