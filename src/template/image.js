export default (name, svg) => `Import React from 'react';

const SVG = ${svg}

function SVGComponent(props: any) {

    return SVG;
}

SVGComponent.displayName = 'svg-${name}';

module.exports = SVGComponent`;
