import React from "react";
import {
  BannerWrapper,
  BannerImageWrapper,
  BannerContentWrapper,
  BannerFirstRow,
  IconsContainer,
} from "./banner.styles";
import DummyImage from "../../assets/svg/dummy-image.png";
import Text from "../../UI/Text/text";
import NewsMetaInfo from "../NewsMetaInfo/newsMetaInfo";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerImageWrapper>
        <img src={DummyImage} alt="banner img" />
      </BannerImageWrapper>
      <BannerContentWrapper>
        <BannerFirstRow>
          <Text
            size="size14"
            weight="semiBold"
            color="#C31815"
            family="primary"
          >
            Trending
          </Text>
          <IconsContainer>
            <div className="likeIcon">
                <i className="fa-regular fa-heart"></i>
            </div>
            {/* <div className="downloadIcon">

            </div> */}
            <div className="bookmarkIcon">
                <i className="fa-regular fa-bookmark"></i>
            </div>
          </IconsContainer>
        </BannerFirstRow>
        <Text
          size="size32"
          weight="semiBold"
          color="#2A2A2A"
          family="heading"
          marginTop="10px"
          marginBottom="10px"
        >
          Cake meme reflects coronavirus absurdity in a world where nothing is
          what it seems
        </Text>
        <Text
          size="size15"
          weight="regular"
          color="#2A2A2A"
          family="primary"
          marginBottom="20px"
        >
          Earlier this month, a viral video depicting hyper-realistic cakes as
          everyday items had folks on social media double-guessing every other
          post, and sometimes even their own realities, effectively launching
          the next meme : “Is this real or is this cake?”
        </Text>
        <NewsMetaInfo updatedAt="2 hours ago" authorName="Tushar Jain" readTime="5 min" />
      </BannerContentWrapper>
      
    </BannerWrapper>
  );
};
export default Banner;
