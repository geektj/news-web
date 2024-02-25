import axios from "axios";
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import ApiService from "../api/apiService";
// import { ApiUrl } from "../api/urls";

// interface News {
//   title: string;
//   description: string;
//   url: string;
//   author: string;
//   urlToImage: string;
//   publishedAt: string;
  
// }

interface NewsProviderProps{
  children: React.ReactNode;
}

interface NewsContextProps {
  // news: News[];
  news: any;
  getNews: () => void;
}

// export const NewsContext = createContext<NewsContextProps | undefined>(undefined);
export const NewsContext = createContext<NewsContextProps>({
  news: [],
  getNews: function (): void {
    throw new Error("Function not implemented.");
  }
})
const NewsContextProvider = NewsContext.Provider;

// export const useNewsContext = () => {
//   const context = useContext(NewsContext);
//   return context;
// };

const NewsWrapper: React.FC<NewsProviderProps> = ({ children }: any) => {
  const [news, setNews] = useState<any[]>([]);

  const HEADLINE = {
    CRICKET: 'cricket'
  }

  const getNews = async () => {
    try {
      // const response = await axios("/top-headlines");
      const {data}  = await ApiService.get("/top-headlines", {q: 'cricket'});
      console.log("Data", data);
      setNews(news);
    } catch (error) {
      console.error("Error Fetching news", error);
    }
  };

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <NewsContextProvider value={{ news, getNews }}>
      {children}
    </NewsContextProvider>
  );
};

export default NewsWrapper;
