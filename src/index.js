class mipb {
    constructor(_options) {
        this.visible = false;
        const defaults = {
            bg: "transparent",
            fg: "#f00",
            frame: 2,
            selector: "body",
            height: 3
        };
        const options = {
            ...defaults,
            ..._options
        };
        const existing = document.getElementById("mipb-stylesheet");
        console.log(existing);
        if (existing == null) {
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
        
        this.element = document.createElement("div");
        this.element.style.backgroundColor = options.bg;
        const throbber = document.createElement("div");
        throbber.style.position = "absolute";
        throbber.style.top = 0;
        throbber.style.right = 0;
        throbber.style.left = 0;
        throbber.style.height = `${options.height}px`;
        throbber.style.transform = "translateX(-100%)";
        throbber.style.backgroundColor = options.fg;
        this.element.appendChild(throbber);
        this.element.classList.add("mipb-outer");
        document.querySelector(options.selector).appendChild(this.element);
    }
    isVisible() {
        return this.visible;
    }
    hide() {
        this.visible = false;
        this.element.classList.remove("show");
    }
    show() {
        this.visible = true;
        this.element.classList.add("show");
    }
    toggle() {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    }
}

export default mipb;