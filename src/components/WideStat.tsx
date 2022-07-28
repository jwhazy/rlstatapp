import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

const WideStat = (props: Props) => {
  const tailwind = useTailwind();

  //   const title = "Tournament Matches";
  //   const subtitle = "Diamond I Division 1";

  //   const rating = "842";

  //   const percentage = "Bottom 35%";

  const { title, subtitle, image } = props;

  return (
    <View style={tailwind("mx-4 my-2 rounded-2xl bg-white")}>
      <View style={tailwind("flex flex-col justify-between items-center p-2")}>
        <Text style={tailwind("font-bold text-xl")}>{title}</Text>
        <View style={tailwind("flex flex-row items-center")}>
          <Image
            style={tailwind("w-8 h-8 pl-3")}
            resizeMode="contain"
            source={{
              uri:
                image ||
                "https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-0.png",
            }}
          />
          <Text style={tailwind("text-slate-800 text-xl tracking-widest")}>
            {subtitle.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WideStat;
