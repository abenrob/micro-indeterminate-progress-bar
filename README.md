# micro-indeterminate-progress-bar
miniature library for adding an indeterminate progress bar

Only need a simple progress bar to show that something is loading/downloading? 

## Installation
Include in script tag:

```
<script src="dist/mipb.min.js"></script>
```

this exposes the global `mipb` class

## Use
```
var pBar = new mipb(options)
```

this instantiates the progress bar, and appends a micro-snippet of css to the document `<head>`

### Options
```
defaults = {
    bg: "transparent", //background color for the bar
    fg: "#f00", // foreground color for the bar
    frame: 2, // how many seconds the animation should take
    selector: "body", // where to append the bar
    height: 3 // bar height in px
};
```

### show bar
```
pBar.show()
```

### hide bar
```
pBar.hide()
```

### toggle bar
```
pBar.toggle()
```