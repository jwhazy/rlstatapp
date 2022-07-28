export interface Root {
  data: Data;
}

export interface Data {
  platformInfo: PlatformInfo;
  userInfo: UserInfo;
  metadata: Metadata;
  segments: Segment[];
  availableSegments: AvailableSegment[];
  expiryDate: string;
}

export interface PlatformInfo {
  platformSlug: string;
  platformUserId: any;
  platformUserHandle: string;
  platformUserIdentifier: string;
  avatarUrl: any;
  additionalParameters: any;
}

export interface UserInfo {
  userId: number;
  isPremium: boolean;
  isVerified: boolean;
  isInfluencer: boolean;
  isPartner: boolean;
  countryCode: string;
  customAvatarUrl: any;
  customHeroUrl: any;
  socialAccounts: any[];
  pageviews: number;
  isSuspicious: any;
}

export interface Metadata {
  lastUpdated: LastUpdated;
  playerId: number;
  currentSeason: number;
}

export interface LastUpdated {
  value: string;
  displayValue: string;
}

export interface Segment {
  type: string;
  attributes: Attributes;
  metadata: Metadata2;
  expiryDate: string;
  stats: Stats;
}

export interface Attributes {
  playlistId?: number;
  season?: number;
}

export interface Metadata2 {
  name: string;
}

export interface Stats {
  wins?: Wins;
  goals?: Goals;
  mVPs?: MVps;
  saves?: Saves;
  assists?: Assists;
  shots?: Shots;
  goalShotRatio?: GoalShotRatio;
  score?: Score;
  seasonRewardLevel?: SeasonRewardLevel;
  seasonRewardWins?: SeasonRewardWins;
  tRNRating?: TRnrating;
  tier?: Tier;
  division?: Division;
  matchesPlayed?: MatchesPlayed;
  winStreak?: WinStreak;
  rating?: Rating;
}

export interface Wins {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata3;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata3 {}

export interface Goals {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata4;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata4 {}

export interface MVps {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata5;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata5 {}

export interface Saves {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata6;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata6 {}

export interface Assists {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata7;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata7 {}

export interface Shots {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata8;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata8 {}

export interface GoalShotRatio {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata9;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata9 {}

export interface Score {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata10;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata10 {}

export interface SeasonRewardLevel {
  rank: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata11;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata11 {
  iconUrl: string;
  rankName: string;
}

export interface SeasonRewardWins {
  rank: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata12;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata12 {}

export interface TRnrating {
  rank: any;
  percentile: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata13;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata13 {}

export interface Tier {
  rank: any;
  percentile?: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata14;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata14 {
  iconUrl: string;
  name: string;
  estimated?: boolean;
}

export interface Division {
  rank: any;
  percentile?: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata15;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata15 {
  name: string;
  deltaDown?: number;
  deltaUp?: number;
  estimated?: boolean;
}

export interface MatchesPlayed {
  rank: any;
  percentile?: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata16;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata16 {}

export interface WinStreak {
  rank: any;
  percentile?: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata17;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata17 {
  type: string;
}

export interface Rating {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata18;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata18 {}

export interface AvailableSegment {
  type: string;
  attributes: Attributes2;
  metadata: Metadata19;
}

export interface Attributes2 {
  season: number;
}

export interface Metadata19 {
  name: string;
}
