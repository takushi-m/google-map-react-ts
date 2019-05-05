"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const google_map_react_1 = __importDefault(require("google-map-react"));
class Marker extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("span", null, "test marker")));
    }
}
const MarkerDesc = {
    size: { width: 62, height: 60 },
    origin: { x: 15 / 62, y: 1 },
    withText: true
};
const DEFAULT_ZOOM = 17;
class GoogleMapBlock extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this._onChildClick = (key, childProps) => {
            if (this.props.onChildClick) {
                this.props.onChildClick(key, childProps);
            }
        };
        this._onChildMouseEnter = (key, childProps) => {
            if (this.props.onMarkerHover) {
                this.props.onMarkerHover(key, childProps);
            }
        };
        this._onChildMouseLeave = () => {
            if (this.props.onMarkerHover) {
                this.props.onMarkerHover(-1, {});
            }
        };
    }
    render() {
        const Markers = this.props.markers &&
            this.props.markers.map((marker, index) => react_1.default.createElement(marker.Marker || this.props.Marker || Marker, Object.assign({ key: index }, marker, marker.markerDesc || this.props.markerDesc || MarkerDesc)));
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(google_map_react_1.default, { bootstrapURLKeys: { key: this.props.apikey }, defaultCenter: this.props.center, defaultZoom: this.props.zoom || DEFAULT_ZOOM, onChildClick: this._onChildClick, onChildMouseEnter: this._onChildMouseEnter, onChildMouseLeave: this._onChildMouseLeave }, Markers)));
    }
}
exports.default = GoogleMapBlock;
//# sourceMappingURL=google-map-block.js.map