import React from 'react';
import ContentLoader from 'react-content-loader';

const EmptyPizzaBlock = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={531}
    viewBox="0 0 280 531"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="123" r="123" />
    <rect x="0" y="260" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="307" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="428" rx="10" ry="10" width="90" height="27" />
    <rect x="126" y="421" rx="30" ry="30" width="150" height="43" />
  </ContentLoader>
);

export default EmptyPizzaBlock;
