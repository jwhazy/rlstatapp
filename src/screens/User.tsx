import { ScrollView, View, Text, Image, RefreshControl } from "react-native";
import { useContext, useEffect, useState, useCallback } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { Root } from "../types/stats";
import ScreenView from "../components/ScreenView";
import Stat from "../components/Stat";
import SmallStat from "../components/SmallStat";
import WideStat from "../components/WideStat";
import { ErrorRoot } from "../types/error";

const User = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const nav = useNavigation();
  const tailwind = useTailwind();

  const { username } = route.params;

  const [stats, setStats] = useState<Root>();
  const [refreshing, setRefreshing] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const getStats = async (username: string) => {
    let method: string;

    switch (route.params.method) {
      case 0:
        method = "epic";
        break;
      case 1:
        method = "steam";
        break;
      case 2:
        method = "xbl";
        break;
      case 3:
        method = "psn";
    }

    try {
      const data = await fetch(
        `https://api.tracker.gg/api/v2/rocket-league/standard/profile/${method}/${username}`
      );

      const json = await data.json();

      if (!data.ok) {
        throw new Error(
          json?.errors[0]?.message ||
            "Failed to fetch data from the API. Please try again."
        );
      }

      setStats(json);
      setLoading(false);
    } catch (e) {
      setMessage(e.message);
      setLoading(true);
      return;
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getStats(username).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getStats(username);
  }, []);

  if (loading) {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={tailwind("p-2 items-center")}
      >
        <Text style={tailwind("pt-24")}>{message || "Loading..."}</Text>
      </ScrollView>
    );
  } else
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={tailwind("p-2 items-center")}
      >
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        <ScreenView>
          <WideStat
            title={stats.data.segments[0].stats.seasonRewardLevel.displayName}
            subtitle={
              stats.data.segments[0].stats.seasonRewardLevel.metadata.rankName
            }
            image={
              stats.data.segments[0].stats.seasonRewardLevel.metadata.iconUrl
            }
          />
          <ScrollView
            horizontal={true}
            contentContainerStyle={tailwind("flex flex-row items-center pl-2")}
            showsHorizontalScrollIndicator={false}
          >
            <SmallStat
              title={stats.data.segments[0].stats.goals.displayName}
              subtitle={stats.data.segments[0].stats.goals.value.toString()}
            />
            <SmallStat
              title={stats.data.segments[0].stats.saves.displayName}
              subtitle={stats.data.segments[0].stats.goals.value.toString()}
            />
            <SmallStat
              title={stats.data.segments[0].stats.assists.displayName}
              subtitle={stats.data.segments[0].stats.assists.value.toString()}
            />
            <SmallStat
              title={stats.data.segments[0].stats.mVPs.displayName}
              subtitle={stats.data.segments[0].stats.mVPs.value.toString()}
            />
            <SmallStat
              title={stats.data.segments[0].stats.shots.displayName}
              subtitle={stats.data.segments[0].stats.shots.value.toString()}
            />
          </ScrollView>

          {stats.data.segments.map((segment) => {
            if (segment.type === "overview") return null;
            return (
              <Stat
                key={segment.metadata.name}
                title={segment.metadata.name || "Unknown"}
                subtitle={segment.stats.tier?.metadata?.name || "Unknown"}
                rating={segment.stats?.rating?.value?.toString() || "Unknown"}
                percentage={
                  segment.stats?.rating?.percentile?.toString() + "%" ||
                  "Unknown"
                }
                image={segment.stats.tier?.metadata?.iconUrl}
              />
            );
          })}
          <Text style={tailwind("text-center my-2")}>Pull down to refresh</Text>
        </ScreenView>
      </ScrollView>
    );
};

export default User;
