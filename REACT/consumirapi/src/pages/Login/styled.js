import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 20px;
    padding: 0 10px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
