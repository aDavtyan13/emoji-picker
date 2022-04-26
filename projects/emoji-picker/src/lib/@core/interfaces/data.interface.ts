export interface IDataInterface {
  categories: ICategory[];
  emojis: IEmoji[];
}

export interface ICategory {
  id: number;
  name: string;
  emoji: string;
  selected?: boolean;
}

export interface IEmoji {
  id: number;
  name: string;
  emoji: string;
  keywords: string[];
  categoryId: number;
}
