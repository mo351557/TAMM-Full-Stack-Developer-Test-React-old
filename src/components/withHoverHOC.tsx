import React, { useState } from 'react';

/* Higher order function */
const withHoverHOC = (WrappedComponent: React.FC<any>) => {
  const WithHover: React.FC<any> = () => {
    const [textHover, setHover] = useState(false);
    const [textColor, setTextColor] = useState('#888');
    return (
      <WrappedComponent
        textColor={textColor}
        textHover={textHover}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setTextColor('Green')}
      />
    );
  };

  return WithHover;
};

export default withHoverHOC;
