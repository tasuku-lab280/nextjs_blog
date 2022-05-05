import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, TypographyStylesProvider } from '@mantine/core';

import { BaseLayout } from 'layouts/BaseLayout';
import { client } from 'services/microcms/client';
import type { Blog } from 'types/blog';

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const Blog: NextPage<Props> = (props) => {
  return (
    <BaseLayout>
      <Grid>
        <Grid.Col span={9}>
          <h1>{props.title}</h1>
          <time>{props.publishedAt}</time>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: props.body }} />
          </TypographyStylesProvider>
        </Grid.Col>
        <Grid.Col span={3}>
          <div>サイドバー</div>
        </Grid.Col>
      </Grid>
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList({ endpoint: 'blog' });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context
) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: 'blog',
    contentId: context.params.id,
  });

  return {
    props: data,
  };
};

export default Blog;
