# wechaty-angular
Wechaty Angular Web Component

# Refference

## Angular

1. [Angular University](https://blog.angular-university.io)
1. [THOUGHTRAM - EXPLORING ANGULAR 2 SERIES](http://blog.thoughtram.io/exploring-angular-2/)
1. [PGRADING APPS TO ANGULAR 2 USING NGUPGRADE](http://blog.thoughtram.io/angular/2015/10/24/upgrading-apps-to-angular-2-using-ngupgrade.html)

## Desktop App

1. [Angular2 and Electron - The definitive guide](https://www.xplatform.rocks/2016/02/14/angular2-and-electron-the-definitive-guide/)
2. ...

## Bundle Tool

1. [WebPack Tutorial](http://webpack.github.io/docs/tutorials/getting-started/)


## Testing

What's the relationship between [ProTractor](http://www.protractortest.org), Karma and Jasmine?

Simple.

1. Jasmine compare variable A and variable B, output wether it is as expected
1. Karma start one or many browsers, and run Jasmine inside browser, for Unit Testing
1. ProTractor start one or many browsers, and run Jasmine outside browser, for End to End Testing

### Unit Testing

What is a Unit testing?

Simple. It call functions in your code, then confirm the return is as expected.

1. Unit [Testing strategies with Angular 2 – Julie Ralph](YouTube https://www.youtube.com/watch?v=C0F2E-PRm44)
2.

### End to End Testing

What is End to End(E2E) testing?

Simple. It simulates user action to interactive with the browser.


1. [Protractor styleguide – Carmen Popoviciu and Andres Dominguez](https://www.youtube.com/watch?v=-lTGnYwnEuM)
2.

# Testing

```bash
npm run test
```

which is equals to run:

```bash
npm run unit
npm run e2e
```

## Unit Testing

Under directory test/unit (?)

## End to End Testing

Under directory test/e2e (?)

## Environment Setup

We must set Xvfb to run chrome/firefox in headless mode.

### Xvfb

```bash
$ Xvfb :99 -ac
$ export DISPLAY=:99
```

# Wechaty Test

```
$ npm test
```

Notice: if you use cloud9, you need to change the default shell from `dash` to `bash`, because npm run script use `ls *.{js,html}` blob, but dash seems not support this.

```shell
$ sudo ln -sf /bin/bash /bin/sh
```


https://github.com/jhades/angular2-library-example
http://blog.angular-university.io/how-to-create-an-angular-2-library-and-how-to-consume-it-jspm-vs-webpack/
https://github.com/preboot/angular2-webpack