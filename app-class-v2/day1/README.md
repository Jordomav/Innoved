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

1. Go to this GitHub repo and download [this file](https://github.com/Jordomav/Innoved/archive/master.zip).
2. Unzip the file on your Desktop.
3. Now lets open back up the command line and type in `cd innoved-app`.
4. Now lets install all our dependencies:
    - The Ionic Framework uses a dependency manager.
        - [Node Package Manager](https://www.npmjs.com/), or NPM for short.
            - To install all __NPM__ dependencies run the command `npm install`.
                    
## The directory structure:

```
innoved-blank/
    resources/
    src/
        app/
            app.component.ts
            app.html
            app.module.ts
            app.scss
            main.ts
        assets/
            icon/
                favicon.ico
            imgs/
                logo.png
        pages/
            README.md
        .editorconfig
        .gitignore
        config.xml
        ionic.config.json
        package.json
        tsconfig.json
        tslint.json
```

The only files that we will be working with:

- The entire `src/pages` folder.
- The `src/app/app.component.ts` and `src/app/app.module.ts` files.
- The `src/assets/imgs` folder.

# Starting up our app!
Since we are using __TypeScript__ (hereafter referred to as __TS__) it needs to be complied down. Our computers also need to run a few things in order for us to be able to view and edit the application (That is normally ran on a phone). To do this we simply have to follow a few basic steps.

1. Open up a Command Prompt.
    - Click on the windows logo on the bottom left of the screen and type in 'cmd' and then click enter.
2. Next we need to navigate to the project folder:
    - Type in `cd Desktop/name-app` and click enter.
3. Download dependencies:
    - Ionic has a lot of its own dependencies and, like we talked above, those are managed with NPM. So type in `npm install` and watch the magic. 
4. Start up the compiler and emulator:
    - Type in the command `ionic serve` and click enter.
    - This should run a long string of commands before eventually launching an Internet Explorer window.
        - Close this because Internet Explorer is a terrible browser for development (and quite honestly a terrible browser in general).
    - Now open up Chrome and in the url put `http://localhost:8100/`
5. Next you should see an window that says error and that it cannot find name rootPage
    - Do not worry if you got this error then you're on the same page as everyone else. :)

# Jumping into some code
Now that we have our application up and running lets take a look at some of the code that is already pre-created.

1. `app/app.component.ts`
    - For every single page we add we will need to import the pages component.
    - For every single page that we add to our application we will be creating a component file that will look much like this one.
    - The `import { someModule } from 'some/source'`
        - The concept of the __import__ function is to allow us to pull in assets from other files. Instead of having all our code on one page (which is a very poor convention) we can now separate out all our code.
        - Lets use the first line as an example `import { Component, ViewChild } from '@angular/core'`
            - This is allowing us to __import__ the __Component__ component and the __ViewChild__ component __from__ __angular__ (Which is what ionic is built on).
    - The `@Component`
        ```
        @Component({
          templateUrl: 'some-template.html'
        })
        ```
        - This tells our application that this file is a component and that it is going to contain some metadata that our page may need.
    - The `export class`
        ```
        export class SomeModule {
        
            constructor() {
            
            }
        }
        ```
        - This is where we are defining the class\module that our file will contain, it is with this that the __import__ statement is using.
2. `app/app.module.ts`
    - The `app.module.ts` is a unique file, meaning that we will not be recreating this file but simply adding to it.
    - Just like with the component, for every single page we add we will need to import the pages component.
        - For example: `import { HomePage } from '../pages/home/home'`
    ```
    @NgModule({
      declarations: [
        MyApp,
        ** Whenever we import a new page we also need to add whatever we imported here **
      ],
      imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
      ],
      bootstrap: [IonicApp],
      entryComponents: [
        MyApp,
        ** and here **
      ],
      providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
      ]
    })
    ```