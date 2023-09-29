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
