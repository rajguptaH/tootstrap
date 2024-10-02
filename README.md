# tootstrap.js

**tootstrap.js** is a jQuery plugin designed for creating highly customizable Bootstrap toast notifications. This plugin enables developers to display toast messages with ease and flexibility, offering options for different types, positions, colors, buttons, and callbacks.

## Features

- **Toast Types**: Supports `success`, `error`, `info`, `warning`
- **Positioning**: Display toasts at any corner (`top-left`, `top-right`, `bottom-left`, `bottom-right`)
- **Customizable Buttons**: Configure button text, icons, and add click callbacks for `OK` and `Cancel`
- **Auto-hide**: Automatically hide after a set duration
- **Custom Styling**: Modify background color, text color, margin, padding, etc.
- **Callbacks**: Handle `OK` and `Cancel` button actions

## Installation

### Include via CDN:
1. Include jQuery:
   - <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
2. Include tootstrap.js:
   - <script src="path/to/tootstrap.js"></script>
3. Include FontAwesome for button icons:
   - <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">

### Include Locally:
1. Download `tootstrap.js` and place it in your project directory.
2. Include the script in your HTML:
   - <script src="tootstrap.js"></script>

## Usage

### Basic Example:
```javascript
$("#myDiv").tootstrap({
    type: 'success',
    message: 'Your data has been saved!',
    title: 'Success',
    position: 'top-right',
    onOk: function() {
        alert('OK clicked');
    },
    onCancel: function() {
        alert('Cancel clicked');
    }
});
```
# Customization Options
 You can customize the toast notifications by passing an options object when calling tootstrap. Here's a full list of available options
| Option              | Type      | Description                                         | Default Value   |
|---------------------|-----------|-----------------------------------------------------|-----------------|
| `type`              | `string`  | Type of toast: `success`, `error`, `info`, `warning` | `info`          |
| `position`          | `string`  | Position of toast: `top-left`, `top-right`, `bottom-left`, `bottom-right` | `top-right`     |
| `message`           | `string`  | The content of the toast message                    | `'This is a toast message!'` |
| `title`             | `string`  | Title text displayed at the top of the toast         | `'Notification'` |
| `showCancelButton`  | `boolean` | Whether to show the cancel button                    | `true`          |
| `showOkButton`      | `boolean` | Whether to show the OK button                        | `true`          |
| `cancelButtonText`  | `string`  | Text for the cancel button                           | `'Cancel'`      |
| `okButtonText`      | `string`  | Text for the OK button                               | `'OK'`          |
| `cancelButtonIcon`  | `string`  | FontAwesome icon for the cancel button               | `'fa fa-times'` |
| `okButtonIcon`      | `string`  | FontAwesome icon for the OK button                   | `'fa fa-check'` |
| `onOk`              | `function`| Callback function for OK button click                | `function() {}` |
| `onCancel`          | `function`| Callback function for Cancel button click            | `function() {}` |
| `autoHide`          | `boolean` | Automatically hide the toast after a duration        | `true`          |
| `hideAfter`         | `number`  | Time in milliseconds before auto-hiding              | `3000`          |
| `margin`            | `string`  | Custom margin for the toast                          | `'1rem'`        |
| `padding`           | `string`  | Custom padding for the toast                         | `'1rem'`        |
| `backgroundColor`   | `string`  | Background color for the toast                       | `'#000000'`     |
| `textColor`         | `string`  | Text color for the toast                             | `'#ffffff'`     |

## Author

- **Name**: Raj Narayan Gupta
- **GitHub**: [Github](https://github.com/rajguptah)
- **Instagram**: [Instagram](https://instagram.com/raj__rr)
