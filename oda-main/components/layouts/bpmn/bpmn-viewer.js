ODA({ is: 'oda-bpmn-viewer', template: /*html*/`
    <style>
        @import "./dist/assets/diagram-js.css";
        :host {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
        }
    </style>
    <div ref="container"></div>
    `,
    props: {
        bpmn: Object,
        _diagramCss: false,
        _bpmnJs: false,
        url: {
            type: String,
            default: 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/url-viewer/resources/pizza-collaboration.bpmn',
            set(n) {
                this.fetchDiagram(n);
            }
        },
        diagramXML: {
            type: String,
            set(n) {
                this.bpmn.importXML(n);
            }
        }
    },
    observers: [
        function _libImportsIsReady(_diagramCss, _bpmnJs) {
            if(!this.bpmn && _diagramCss && _bpmnJs) {
                this.bpmn = new BpmnJS({ container: this.$refs.container });
                this.fetchDiagram(this.url);
            }
        }
    ],
    attached() {
        if(!this._diagramCssLib) {
            this._diagramCssLib = document.createElement('link');
            this._diagramCssLib.onload = () => {
                this._diagramCss = true;
            };
            this._diagramCssLib.rel = 'stylesheet';
            this._diagramCssLib.href = './dist/assets/diagram-js.css';
            this.appendChild(this._diagramCssLib);
        }

        if(!this._bpmnJsLib) {
            this._bpmnJsLib = document.createElement('script');
            this._bpmnJsLib.onload = () => {
                this._bpmnJs = true;
            };
            // viewer distro (without pan and zoom)
            // this._bpmnJsLib.src = './dist/bpmn-viewer.development.js';
            // viewer distro (with pan and zoom)
            this._bpmnJsLib.src = './dist/bpmn-navigated-viewer.development.js';
            this.appendChild(this._bpmnJsLib);
        }
    },
    async fetchDiagram(url) {
        if (url) {
            const response = await fetch(url);
            this.diagramXML = await response.text();
        }
    }
});