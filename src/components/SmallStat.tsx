import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  title: string;
  subtitle: string;
};

const SmallStat = (props: Props) => {
  const tailwind = useTailwind();

  //   const title = "Tournament Matches";
  //   const subtitle = "Diamond I Division 1";

  //   const rating = "842";

  //   const percentage = "Bottom 35%";

  const { title, subtitle } = props;

  return (
    <View style={tailwind("w-24 m-2 rounded-2xl bg-white")}>
      <View style={tailwind("flex flex-col justify-between items-center p-2")}>
        <Text style={tailwind("font-bold text-xl")}>{title}</Text>
        <Text style={tailwind("text-slate-800 text-xl tracking-widest")}>
          {subtitle.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default SmallStat;
