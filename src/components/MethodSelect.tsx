import { useContext } from "react";
import { AppContext } from "./AppContext";
import { Image, TextInput, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

const MethodSelect = () => {
  const { method, username, setUsername } = useContext(AppContext);
  const tailwind = useTailwind();

  switch (method) {
    case 0:
      return (
        <View style={tailwind("flex flex-row items-center")}>
          <Image
            style={tailwind("w-8 h-8")}
            resizeMode="contain"
            source={require("../../assets/epic.png")}
          />
          <TextInput
            style={tailwind(
              "rounded-lg p-2 ml-2 my-4 flex-1 bg-[#E3E3E8] dark:bg-[#1c1c1e]"
            )}
            placeholder="Enter an Epic Games username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      );

    case 1:
      return (
        <View style={tailwind("flex flex-row items-center ")}>
          <Image
            style={tailwind("w-8 h-8")}
            resizeMode="contain"
            source={require("../../assets/steam.png")}
          />
          <TextInput
            style={tailwind("rounded-lg p-2 ml-2 my-4 flex-1 bg-[#E3E3E8]")}
            placeholder="Enter an Steam64 ID"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      );
    case 2:
      return (
        <View style={tailwind("flex flex-row items-center ")}>
          <Image
            style={tailwind("w-8 h-8")}
            resizeMode="contain"
            source={require("../../assets/xbox.png")}
          />
          <TextInput
            style={tailwind("rounded-lg p-2 ml-2 my-4 flex-1 bg-[#E3E3E8]")}
            placeholder="Enter an gamertag"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      );

    case 3:
      return (
        <View style={tailwind("flex flex-row items-center ")}>
          <Image
            style={tailwind("w-8 h-8")}
            resizeMode="contain"
            source={require("../../assets/ps.png")}
          />
          <TextInput
            style={tailwind("rounded-lg p-2 ml-2 my-4 flex-1 bg-[#E3E3E8]")}
            placeholder="Enter an PlayStation username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      );
  }
};

export default MethodSelect;
