import styled from '@emotion/styled';
import LiquidGlass from '../components/LiquidGlass';

const AboutContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`;

const AboutSection = styled(LiquidGlass)`
  height: auto;
  min-height: 300px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  background: linear-gradient(45deg, #ffffff, #a8a8a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionText = styled.p`
  color: #a8a8a8;
  line-height: 1.8;
  margin: 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  color: #a8a8a8;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "•";
    color: #ffffff;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutSection>
        <SectionContent>
          <SectionTitle>About Liquid Glass</SectionTitle>
          <SectionText>
            Liquid Glass is Apple's revolutionary new design language introduced at WWDC 2025. It represents the company's most significant UI update since iOS 7, bringing a new level of depth and interactivity to Apple's ecosystem.
          </SectionText>
        </SectionContent>
      </AboutSection>

      <AboutSection>
        <SectionContent>
          <SectionTitle>Key Features</SectionTitle>
          <FeatureList>
            <FeatureItem>Dynamic translucency that responds to user interaction</FeatureItem>
            <FeatureItem>Color-adaptive UI elements that reflect surrounding content</FeatureItem>
            <FeatureItem>Fluid animations and transitions</FeatureItem>
            <FeatureItem>Enhanced depth perception through layered design</FeatureItem>
            <FeatureItem>Improved accessibility and readability</FeatureItem>
          </FeatureList>
        </SectionContent>
      </AboutSection>

      <AboutSection>
        <SectionContent>
          <SectionTitle>Platform Support</SectionTitle>
          <SectionText>
            Liquid Glass is being rolled out across Apple's entire ecosystem, including:
          </SectionText>
          <FeatureList>
            <FeatureItem>iOS 26 and iPadOS 26</FeatureItem>
            <FeatureItem>macOS Tahoe</FeatureItem>
            <FeatureItem>watchOS 26</FeatureItem>
            <FeatureItem>visionOS 2.0</FeatureItem>
          </FeatureList>
        </SectionContent>
      </AboutSection>
    </AboutContainer>
  );
}

export default About; 