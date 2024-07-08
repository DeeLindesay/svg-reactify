export default (name, svg) => `import React from 'react';

const SVG = ${svg};

export default function SVG${name}Icon (props: any) {

    return React.createElement('span', props, SVG);
};

SVG${name}Icon.displayName = 'svg-${name}',
SVG${name}Icon.defaultProps = {
    className: 'icon icon-${name}'
};
`;
