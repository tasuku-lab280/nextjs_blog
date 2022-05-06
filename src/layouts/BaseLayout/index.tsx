import { Container, Grid } from '@mantine/core';

import { Header } from 'layouts/Header';
import { SideBar } from 'layouts/SideBar';

type Props = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <Container size="lg" mt={40}>
        <Grid columns={24} gutter="xl">
          <Grid.Col lg={17}>{children}</Grid.Col>
          <Grid.Col lg={7}>
            <SideBar />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
