export default (name, svg) => `import React from 'react';

const SVG = ${svg};

export default function SVGComponent (props: any) {

    return React.createElement('span', props, SVG);
};

SVGComponent.displayName = 'svg-${name}',
SVGComponent.defaultProps = {
    className: 'icon icon-${name}'
};
`;
