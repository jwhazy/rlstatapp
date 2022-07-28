import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  title: string;
  subtitle: string;
  rating: string;
  percentage: string;
  image: string;
};

const Stat = (props: Props) => {
  const tailwind = useTailwind();

  //   const title = "Tournament Matches";
  //   const subtitle = "Diamond I Division 1";

  //   const rating = "842";

  //   const percentage = "Bottom 35%";

  const { title, subtitle, rating, percentage, image } = props;

  return (
    <View style={tailwind("w-96 rounded-2xl bg-white my-2 mx-4")}>
      <View style={tailwind("pb-3 mx-5 pt-3 flex")}>
        <View style={tailwind("mb-2")}>
          <View style={tailwind("flex flex-row justify-between items-center")}>
            <Text style={tailwind("font-bold text-2xl")}>{title}</Text>
            <Image
              style={tailwind("w-8 h-8 pl-2")}
              resizeMode="contain"
              source={{
                uri:
                  image ||
                  "https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-0.png",
              }}
            />
          </View>
          <Text style={tailwind("text-slate-800 text-sm tracking-widest")}>
            {subtitle.toUpperCase()}
          </Text>
        </View>
        <View style={tailwind("mb-2")}>
          <Text style={tailwind("font-bold text-xl")}>Rating</Text>
          <Text style={tailwind("")}>
            {rating} • {percentage}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Stat;
