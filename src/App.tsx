import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { RouterProvider } from "react-router-dom";
import NewsWrapper from "./context/NewsProvider";
import { router } from "./routing";

const App: React.FC = () => {
  return (
    <div>
      <NewsWrapper>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </NewsWrapper>
    </div>
  );
};

export default App;
