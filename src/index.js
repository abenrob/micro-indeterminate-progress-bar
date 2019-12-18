class mipb {
    constructor(_options) {
        this.visible = false;
        const defaults = {
            bg: "transparent", //background color for the bar
            fg: "#f00", // foreground color for the bar
            frame: 2, // how many seconds the animation should take
            selector: "body", // where to append the bar
            height: 3 // bar height in px
        };
        const options = {
            ...defaults,
            ..._options
        };
        // has the stylesheet been appended already?
        const existing = document.getElementById("mipb-stylesheet");
        if (existing == null) {
            // create and append stylesheet
            const linkElement = document.createElement("link");
            linkElement.setAttribute("id", "mipb-stylesheet");
            linkElement.setAttribute("rel", "stylesheet");
            linkElement.setAttribute("type", "text/css");
            const cssString = `.mipb-outer{position:absolute;top:0;right:0;left:0;height:${
                options.height
            }px;display:none;overflow:hidden}.mipb-outer.show{display:block}.mipb-outer>div{position:absolute;top:0;right:0;left:0;height:${
                options.height
            }px;transform:translateX(-100%);animation:mipb-animation ${
                options.frame
            }s cubic-bezier(.4,0,.2,1) infinite}@keyframes mipb-animation{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`;
            linkElement.setAttribute(
                "href",
                "data:text/css;charset=UTF-8," + encodeURIComponent(cssString)
            );
            document.head.appendChild(linkElement);
        }
        // create the progress container
        this.element = document.createElement("div");
        this.element.style.backgroundColor = options.bg;
        if (options.style) {
            for (let [key, value] of Object.entries(options.style)) {
                this.element.style[key] = value
            }
        }

        // create the animated progress bar
        const throbber = document.createElement("div");
        throbber.style.backgroundColor = options.fg;

        // add bar to container
        this.element.appendChild(throbber);
        this.element.classList.add("mipb-outer");

        // add the entire thing to the target caontainer
        document.querySelector(options.selector).appendChild(this.element);
    }
    // is the bar currently visible ?
    isVisible() {
        return this.visible;
    }
    // hide the bar
    hide() {
        this.visible = false;
        this.element.classList.remove("show");
    }
    // show the bar
    show() {
        this.visible = true;
        this.element.classList.add("show");
    }
    // toggle bar visible/non-visible
    toggle() {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    }
}

export default mipb;