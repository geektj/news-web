import React from "react";
import { BreakingNewsContainer, BreakingNewsWrapper } from "./breaking.styles";
import Text from "../../UI/Text/text";

interface BreakingNewsBannerProps {
  headlines: string;
}
const BreakingNewsBanner: React.FC<BreakingNewsBannerProps> = ({
  headlines,
}) => {
  // const breakingNews = headlines.length > 0 ? headlines[0] : 'No breaking news available';
  return (
    <BreakingNewsContainer>
      <BreakingNewsWrapper>
        <div className="newsBox">
          <Text
            size="size16"
            weight="regular"
            color="#C31815"
            family="secondary"
          >
            Breaking News
          </Text>
        </div>
        <Text size="size20" weight="medium" color="#FFFFFF" family="secondary">
          Kanye West says he's running for president in 2020.
        </Text>
      </BreakingNewsWrapper>
    </BreakingNewsContainer>
  );
};
export default BreakingNewsBanner;
