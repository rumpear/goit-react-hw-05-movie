import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './GoBackButton.styled';
import { IoReturnDownBack } from 'react-icons/io5';

export const GoBackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [from, setFrom] = useState();

  useEffect(() => {
    if (location?.state?.from) {
      setFrom(location?.state?.from);
    }
  }, [location?.state?.from]);

  return (
    <Button type="button" onClick={() => navigate(from ?? '/')}>
      <IoReturnDownBack size={30} />
    </Button>
  );
};
