export interface EntryObject {
  title: string;
  year: number;
  id: string;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

export interface HomeProps {
  textInput: React.RefObject<HTMLInputElement>;
  mediaData: {
    entry: EntryObject[];
    length: number;
    user: { _id: string; bookmarked: [string]; email: string };
  };
}
