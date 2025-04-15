declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.style.css" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  import type * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module "*.svg?react" {
  import type * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
