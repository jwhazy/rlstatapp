import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Image,
  Text,
  TextInput,
  View,
  Pressable,
  Appearance,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn/dist";
import { useContext, useState } from "react";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenView from "../components/ScreenView";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import MethodSelect from "../components/MethodSelect";
import { AppContext } from "../components/AppContext";
import { Method } from "../types/method";

// Disabled Leaderboard
//import Leaderboard from "../components/leaderboards";

const Home = () => {
  const tailwind = useTailwind();

  const { method, setMethod, username } = useContext(AppContext);
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={tailwind("h-full px-6")}
    >
      <ScreenView>
        <SegmentedControl
          values={["Epic", "Steam ", "Xbox", "PlayStation"]}
          selectedIndex={0}
          onChange={(event) => {
            setMethod(event.nativeEvent.selectedSegmentIndex as Method);
          }}
        />

        <MethodSelect />

        <Pressable
          style={({ pressed }) =>
            tailwind(
              "bg-neutral-800 p-4 rounded-2xl" +
                (pressed ? " bg-neutral-700" : "")
            )
          }
          onPress={() => {
            navigate.navigate("User", { username, method });
          }}
        >
          <Text style={tailwind("text-white text-center")}>Go</Text>
        </Pressable>

        {/* Disabled Leaderboard */}
        {/* <Leaderboard /> */}

        <Text style={tailwind("text-center mt-8")}>
          RL Stats app powered by the Tracker Network
        </Text>
      </ScreenView>
    </ScrollView>
  );
};

export default Home;
