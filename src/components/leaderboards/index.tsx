import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { LeaderboardRoot } from "../../types/leaderboard";
import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = () => {
  const [leaderboard3s, setLeaderboard3s] = useState<LeaderboardRoot>();
  const [leaderboard2s, setLeaderboard2s] = useState<LeaderboardRoot>();
  const [leaderboard1s, setLeaderboard1s] = useState<LeaderboardRoot>();
  const tailwind = useTailwind();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://api.tracker.gg/api/v1/rocket-league/standard/leaderboards?type=playlist&platform=all&board=default&playlist=13&skip=0&take=10"
      );

      return await data.json();
    };

    getData().then((d) => {
      setLeaderboard3s(d);
    });
  });

  if (!leaderboard3s?.data) return null;
  return (
    <View style={tailwind("flex items-center mt-8 w-[100%]")}>
      <Text style={tailwind("font-bold text-2xl")}>Leaderboard</Text>
      <Text style={tailwind("text-xl pt-2")}>RANKED 3v3</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={tailwind("flex flex-row")}
      >
        {leaderboard3s.data.items.map((p) => {
          return (
            <LeaderboardItem
              key={p.owner.metadata.platformUserIdentifier}
              title={p.owner.metadata.platformUserHandle}
              subtitle={p.owner.metadata.platformSlug}
              rating={p.displayValue}
              matches={p.owner.stats[0].value.toString()}
              profileImage={p.owner.metadata.avatarUrl}
              rankImage={p.iconUrl}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Leaderboard;
