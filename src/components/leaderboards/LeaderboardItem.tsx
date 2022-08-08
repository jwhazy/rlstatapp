import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  title: string;
  subtitle: string;
  rating: string;
  matches: string;
  profileImage?: string;
  rankImage?: string;
};

const LeaderboardItem = (props: Props) => {
  const tailwind = useTailwind();

  const { title, subtitle, rating, matches, rankImage, profileImage } = props;

  return (
    <View style={tailwind("w-48 rounded-2xl bg-white my-2 mx-2 ml-0")}>
      <View style={tailwind("pb-3 mx-5 pt-3 flex")}>
        <View style={tailwind("mb-2")}>
          <View style={tailwind("flex flex-col items-center")}>
            <Image
              style={tailwind("w-8 h-8 rounded-full bg-black bg-opacity-50")}
              resizeMode="contain"
              source={
                profileImage
                  ? { uri: profileImage }
                  : require("../../../assets/default.png")
              }
            />
            <Text style={tailwind("pl-2 font-bold text-2xl")}>{title}</Text>
            <Text style={tailwind("text-slate-800 text-sm tracking-widest")}>
              {subtitle.toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={tailwind("mb-2 items-center")}>
          <Text style={tailwind("font-bold text-xl")}>Rating</Text>
          <Text style={tailwind("")}>{rating}</Text>
        </View>
        <View style={tailwind("mb-2 items-center")}>
          <Text style={tailwind("font-bold text-xl")}>Matches Played</Text>
          <Text style={tailwind("")}>{matches}</Text>
        </View>
      </View>
    </View>
  );
};

export default LeaderboardItem;
