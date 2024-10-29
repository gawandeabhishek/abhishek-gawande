import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="h-[92vh] flex justify-center items-center">
      {children}
    </div>
  );
};

export default layout;
