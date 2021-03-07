export const guestIdPrefixList = [
  "GB", // Guest Blue   (あお)
  "GR", // Guest Red    (あか)
  "GY", // Guest Yellow (きいろ)
  "GG", // Guest Green  (みどり)
  "GP", // Guest Purple (むらさき)
  "GO", // Guest Orange (オレンジ)
  "GW", // Guest White  (紛失用・予備)
  "SG", // Student Gray (在校生)
  "TB", // Test  Blue   (テスト青)
  "TR", // Test  Red    (テスト赤)
  "TY", // Test  Yellow (テスト黄)
] as const;

export type GuestIdPrefix = typeof guestIdPrefixList[number];

export interface Term {
  id: string;
  enter_scheduled_time: string;
  exit_scheduled_time: string;
  prefix: GuestIdPrefix;
}

export interface Terms {
  [term_id: string]: Term;
}
