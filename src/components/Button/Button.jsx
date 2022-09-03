import { useNavigate } from 'react-router-dom';
import s from './Button.module.css';

const Button = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(-1, { replase: true });
      }}
      className={s.btn}
    >
      &#8656; Go back
    </button>
  );
};

export default Button;
