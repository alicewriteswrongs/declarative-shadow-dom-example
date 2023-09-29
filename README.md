# Declarative Shadow DOM Example

This small project contains a web component that uses [declarative shadow
DOM](https://developer.chrome.com/en/articles/declarative-shadow-dom/). This
lets it render some UI before the JS associated with it is loaded. Then the JS
renders some different UI based on whether or not it's "taking over" from an
instance which already had a declarative shadow root present in the html.

To run the project do:

```sh
npm i
npm start
```

Then you can gaze upon its unadulterated beauty:

<img width="537" alt="Screenshot 2023-09-29 at 9 50 53 AM" src="https://github.com/alicewriteswrongs/declarative-shadow-dom-example/assets/6207644/0cfed07f-756f-47f4-8353-60db899db3ab">
