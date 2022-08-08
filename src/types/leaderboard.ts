export interface LeaderboardRoot {
  data: Data;
}

export interface Data {
  id: string;
  metadata: Metadata;
  items: Item[];
  expiryDate: string;
  lastUpdated: any;
  notices: any;
}

export interface Metadata {
  name: string;
  title: string;
}

export interface Item {
  id: string;
  owner: Owner;
  value: number;
  displayValue: string;
  rank: number;
  percentile: any;
  iconUrl: string;
}

export interface Owner {
  id: string;
  type: string;
  metadata: Metadata2;
  stats: Stat[];
}

export interface Metadata2 {
  platformId: number;
  platformSlug: string;
  platformUserHandle: string;
  platformUserIdentifier: string;
  countryCode?: string;
  avatarUrl?: string;
  isPremium: boolean;
  twitch?: string;
  twitter?: string;
}

export interface Stat {
  metadata: Metadata3;
  percentile: any;
  rank: any;
  displayPercentile: any;
  displayRank: any;
  value: number;
  displayValue: string;
}

export interface Metadata3 {
  key: string;
  name: string;
  description: any;
  categoryKey: any;
  categoryName: any;
  isReversed: boolean;
  iconUrl: any;
  color: any;
  value: any;
  displayValue: any;
}
