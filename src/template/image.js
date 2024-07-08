export default (name, svg) => `Import React from 'react';

const SVG = ${svg};

export default function SVG${name}Icon (props: any) {

    return SVG;
}

SVG${name}Icon.displayName = 'svg-${name}';
`;
