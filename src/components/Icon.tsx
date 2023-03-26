import React, { ReactElement } from "react";

const Icon = (props: { icon: ReactElement; link: string }) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="text-darkSlate hover:text-green cursor-pointer text-lg hover:-translate-y-1 hover:scale-125 transition duration-300"
    >
      {props.icon}
    </a>
  );
};

export default Icon;
