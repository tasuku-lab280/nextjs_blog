import type { GetStaticProps, NextPage } from 'next';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { Grid } from '@mantine/core';

import { Card } from 'components/Card';
import { BaseLayout } from 'layouts/BaseLayout';
import { client } from 'services/microcms';
import type { Blog } from 'types/blog';

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const { contents } = props;

  return (
    <BaseLayout>
      <Grid>
        {contents.map((content) => (
          <Grid.Col key={content.id} span={12} sm={6}>
            <Card
              title={content.title}
              image={content.image.url}
              publishedAt={content.publishedAt}
              category={content.category.name}
              link={`/blog/${content.id}`}
            />
          </Grid.Col>
        ))}
      </Grid>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' });
  return {
    props: data,
  };
};

export default Home;
