import { useNavigate } from 'react-router-dom';
import { Button } from './GoBackButton.styled';
import { IoReturnDownBack } from 'react-icons/io5';

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Button type="button" onClick={() => navigate(-1)}>
      <IoReturnDownBack size={30} />
    </Button>
  );
};
