import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFound from '../components/NotFound';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });

  return <NotFound />;
};

export default NotFoundPage;
