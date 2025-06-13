import styled from '@emotion/styled';
import LiquidGlass from '../components/LiquidGlass';

const HomeContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`;

const Hero = styled(LiquidGlass)`
  height: 400px;
  margin-bottom: 2rem;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #a8a8a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a8a8a8;
  max-width: 600px;
  line-height: 1.6;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const NewsCard = styled(LiquidGlass)`
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const NewsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const NewsExcerpt = styled.p`
  color: #a8a8a8;
  flex-grow: 1;
`;

const NewsDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

function Home() {
  const featuredNews = [
    {
      title: "Apple Introduces Liquid Glass UI at WWDC 2025",
      excerpt: "The tech giant unveils its most significant UI update since iOS 7, bringing a new era of visual design to Apple devices.",
      date: "June 13, 2025"
    },
    {
      title: "iOS 26: Beyond Liquid Glass",
      excerpt: "Discover the hidden features that make iOS 26 more than just a visual update.",
      date: "June 12, 2025"
    },
    {
      title: "macOS Tahoe: A New Chapter",
      excerpt: "Apple's latest desktop OS brings Liquid Glass to Mac, revolutionizing the way we interact with our computers.",
      date: "June 11, 2025"
    }
  ];

  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <Title>Welcome to the Future of UI</Title>
          <Subtitle>
            Experience Apple's revolutionary Liquid Glass design language, bringing a new level of depth and interactivity to digital interfaces.
          </Subtitle>
        </HeroContent>
      </Hero>

      <NewsGrid>
        {featuredNews.map((news, index) => (
          <NewsCard key={index}>
            <NewsContent>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsExcerpt>{news.excerpt}</NewsExcerpt>
              <NewsDate>{news.date}</NewsDate>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </HomeContainer>
  );
}

export default Home; 