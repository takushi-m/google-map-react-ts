import React from 'react';
interface IGoogleMapBlockProps {
    apikey: string;
    center: any;
    zoom?: number;
    markers?: any[];
    markerDesc?: any;
    Marker?: any;
    onChildClick?: (key: any, childProps: any) => void;
    onMarkerHover?: (key: any, childProps: any) => void;
}
declare class GoogleMapBlock extends React.Component<IGoogleMapBlockProps> {
    _onChildClick: (key: any, childProps: any) => void;
    _onChildMouseEnter: (key: any, childProps: any) => void;
    _onChildMouseLeave: () => void;
    render(): JSX.Element;
}
export default GoogleMapBlock;
