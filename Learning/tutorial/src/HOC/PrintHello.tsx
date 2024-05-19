import React, { useCallback } from "react";

const PrintHello =
  (ComposedComponent: React.FC<{ onClick: () => void }>) => () => {
    const onClick = useCallback(() => {
      console.log("hello");
    }, []);

    return <ComposedComponent onClick={onClick} />;
  };

export default PrintHello;
