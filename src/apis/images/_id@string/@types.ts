export type ImageParameters =
  | {
      // image の幅
      w?: number;
      // image の高さ
      h?: number;
    }
  | {
      // オリジナルの画像を取得するかどうか
      orig?: boolean;
    };
