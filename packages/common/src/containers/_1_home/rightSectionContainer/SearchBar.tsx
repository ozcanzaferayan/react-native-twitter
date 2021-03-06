import React from "react";
import { View, TextInput, ViewStyle } from "react-native";
import spacing from "../../../res/styles/spacing";
import IcHome from "../../../res/icons/IcHome";
import I18n from "i18n-js";
import IcSearch from "../../../res/icons/IcSearch";

type Props = {
  style?: ViewStyle;
};

interface Style {
  container: ViewStyle;
}

interface StyleProps {
  isMainSection: boolean;
}

export const SearchBar: React.FC<Props> = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 14,
        alignItems: "center",
        backgroundColor: "#202327",
        borderRadius: spacing.radius,
        ...props.style
      }}
    >
      <IcSearch
        width={spacing.iconSearch}
        height={spacing.iconSearch}
        fill="#6e767d"
        style={{
          marginLeft: 13
        }}
      />
      <View
        style={{
          padding: 10
        }}
      >
        <TextInput
          style={{
            color: "#d9d9d9"
          }}
          placeholder={I18n.t("home.searchOnTwitter")}
        />
      </View>
    </View>
  );
};

export default SearchBar;
