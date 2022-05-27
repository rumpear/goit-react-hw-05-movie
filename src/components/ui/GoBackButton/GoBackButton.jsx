import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './GoBackButton.styled';
import { IoReturnDownBack } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export const GoBackButton = () => {
  const location = useLocation();
  const [from, setFrom] = useState();

  useEffect(() => {
    if (location?.state?.from) {
      setFrom(location?.state?.from);
    }
  }, [location?.state?.from]);

  // console.log('location', location);
  // console.log('location?.state?.from', location?.state?.from);

  return (
    <Button to={from ?? '/'}>
      <IoReturnDownBack size={30} />
    </Button>
  );
};
