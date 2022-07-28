import { Platform, ViewStyle } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "tailwind-rn/dist";

type Props = {
  children: any;
};

const ScreenView = ({ children }: Props) => {
  // return Platform.OS === "ios" ? (
  //   <View style={{ backgroundColor: "#F2F2F6" }}>{children}</View>
  // ) : (
  //   <View style={{ backgroundColor: "#F2F2F6" }}>{children}</View>
  // );
  return <View style={{ backgroundColor: "#F2F2F6" }}>{children}</View>;
};

export default ScreenView;
