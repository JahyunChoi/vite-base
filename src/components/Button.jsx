import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  background-color: transparent;
  border: none;
  color: white;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
export default Button;
