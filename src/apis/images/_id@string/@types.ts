export type ImageParameters =
  | {
      // image の幅
      w?: string;
      // image の高さ
      h?: string;
    }
  | {
      // オリジナルの画像を取得するかどうか
      orig?: "yes";
    };
