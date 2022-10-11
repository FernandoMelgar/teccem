import * as React from "react";

export default function Page(props) {
  return <div className="p-20">{props.children}</div>;
}

export function PageWithBackgroundVideo(props) {
  return (
    <div className="hero">
      <img src={props.gifURL} style={{ width: "100vw" }} />
      <div className="w-full h-full">{props.children}</div>
    </div>
  );
}
