import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CredentialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Title = styled.div`
  width: 100px;
  text-align: right;
  padding-right: 10px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const Form = styled.form`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 100px;
`;

const Login: React.FC = () => (
  <Root>
    <Form>
      <CredentialWrapper>
        <InputRow>
          <Title>User name:</Title>
          <input
            type="text"
            name="username"
          />
        </InputRow>

        <InputRow>
          <Title>Password:</Title>
          <input
            type="password"
            name="password"
          />
        </InputRow>
      </CredentialWrapper>

      <ControlWrapper>
        <input
          type="submit"
          value="Log in"
        />
      </ControlWrapper>
    </Form>
  </Root>
);

export default Login;
