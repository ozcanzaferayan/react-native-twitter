import { useRouteMatch, Link } from "../Router";
import React from "react";
import { ViewStyle } from "react-native";
type Props = {
  to: string;
  children: React.ReactElement;
};

interface Style {
  container: ViewStyle;
}

export const MyLink: React.FC<Props> = props => {
  let match = useRouteMatch({
    path: props.to,
    exact: true
  });
  return (
    <Link
      to={props.to}
      style={{
        color: "inherit",
        textDecoration: "inherit"
      }}
    >
      {React.cloneElement(props.children, { match: match })}
    </Link>
  );
};
export default MyLink;
