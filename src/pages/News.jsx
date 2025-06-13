import styled from '@emotion/styled';
import LiquidGlass from '../components/LiquidGlass';

const NewsContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`;

const NewsList = styled.div`
  display: grid;
  gap: 2rem;
`;

const NewsItem = styled(LiquidGlass)`
  height: auto;
  min-height: 200px;
`;

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const NewsTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  background: linear-gradient(45deg, #ffffff, #a8a8a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NewsDate = styled.span`
  color: #666;
  font-size: 0.9rem;
  white-space: nowrap;
`;

const NewsExcerpt = styled.p`
  color: #a8a8a8;
  line-height: 1.6;
  margin: 0;
`;

const NewsSource = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

function News() {
  const newsArticles = [
    {
      title: "Apple's Liquid Glass: A Revolutionary UI Update",
      date: "June 13, 2025",
      excerpt: "Apple's latest UI design language, Liquid Glass, brings a new level of depth and interactivity to iOS, iPadOS, and macOS. The update features translucent elements that respond to user interaction, creating a more immersive experience.",
      source: "Apple Newsroom"
    },
    {
      title: "iOS 26 Features That Go Beyond Liquid Glass",
      date: "June 12, 2025",
      excerpt: "While Liquid Glass is stealing the spotlight, iOS 26 brings numerous improvements to privacy, performance, and user experience. From enhanced privacy controls to improved battery life, there's more to this update than meets the eye.",
      source: "TechRadar"
    },
    {
      title: "macOS Tahoe: The Perfect Blend of Power and Elegance",
      date: "June 11, 2025",
      excerpt: "Apple's latest desktop operating system combines the power of macOS with the elegance of Liquid Glass. The update brings a new level of visual sophistication to the Mac experience.",
      source: "ZDNet"
    },
    {
      title: "iPadOS 26: A New Era of Productivity",
      date: "June 10, 2025",
      excerpt: "With Liquid Glass and enhanced multitasking features, iPadOS 26 transforms the iPad into an even more powerful productivity tool. The update brings new ways to work and create on Apple's tablet.",
      source: "Tom's Guide"
    }
  ];

  return (
    <NewsContainer>
      <NewsList>
        {newsArticles.map((article, index) => (
          <NewsItem key={index}>
            <NewsContent>
              <NewsHeader>
                <NewsTitle>{article.title}</NewsTitle>
                <NewsDate>{article.date}</NewsDate>
              </NewsHeader>
              <NewsExcerpt>{article.excerpt}</NewsExcerpt>
              <NewsSource>Source: {article.source}</NewsSource>
            </NewsContent>
          </NewsItem>
        ))}
      </NewsList>
    </NewsContainer>
  );
}

export default News; 