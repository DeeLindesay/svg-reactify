export default (name, svg) => `Import React from 'react';

const SVG = ${svg};

export default function SVGComponent (props: any) {

    return SVG;
}

SVGComponent.displayName = 'svg-${name}';
`;
