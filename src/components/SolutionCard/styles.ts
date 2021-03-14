import styled from 'styled-components';

export const SolutionCard = styled.article`
  max-width: 240px;
  width: 100%;
  height: 380px;
  border: 1px solid #F2F2F2;
  border-radius: 4px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const Description = styled.div`
  color: #EE0E7D;
  font-size: 12px;
  margin: 1rem 0;
`;

export const Thumb = styled.span`
  display: flex;
  background-color: #F2F2F2;
  border-radius: 50px;

  width: 100px;
  height: 100px;
  align-self: flex-start;
  margin-bottom: 50px;
`;

export const Title = styled.strong`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

export const Link = styled.a`
  max-width: 210px;
  width: 100%;
  height: 50px;
  background-color: #03FFA5;
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  font-size: 16px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.6;
  }
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeatureListItem = styled.li`
  list-style: disc;
  position: relative;
  left: 1rem;
  font-size: 12px;
`;
