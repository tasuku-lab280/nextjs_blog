import { Container } from '@mantine/core';

import { Header } from 'layouts/Header';

type Props = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <Container size="md" mt={40}>
        {children}
      </Container>
    </>
  );
};
