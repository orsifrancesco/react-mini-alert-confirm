# react-mini-alert-confirm

[![NPM version](https://img.shields.io/npm/v/react-mini-alert-confirm.svg?style=flat)](https://www.npmjs.com/package/react-mini-alert-confirm)

Just a simple and easy to configure alert/confirm for React.

## Installation

```bash
$ npm i react-mini-alert-confirm
```

## Examples

```jsx

    import ReactMiniAlertConfirm from 'react-mini-alert-confirm';
    // import 'react-mini-alert-confirm/build/index.css';   // <!-- CSS file (optional, if you want to customize the popup)
    // import 'react-mini-alert-confirm/build/index.scss';  // <!-- SCSS file (optional)

    if("yourConditionIsTrueShowsTheAlert") {

        <ReactMiniAlertConfirm />

    }

    <ReactMiniAlertConfirm
    show={true}                                             // <-- optional, true/false
    text="I'm a text"                                       // <-- optional, text of the alert/confirm
    ico="error"                                             // <-- optional, ok/error
    callback={                                              // <-- optional, if available it is a confirm dialog box
        () => console.log("I'm a confirm dialog box")
    }
    />

```

## Demo

[Just a example project where you can see react-mini-alert-confirm in action..](https://passwordonce.com)

## License

Licensed under MIT