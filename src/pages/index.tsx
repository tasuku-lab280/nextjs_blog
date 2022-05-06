import { ComponentProps, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { Grid, Input, Button } from '@mantine/core';

import { Card } from 'components/Card';
import { BaseLayout } from 'layouts/BaseLayout';
import { client } from 'services/microcms';
import type { Blog } from 'types/blog';

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const contents = search ? search.contents : props.contents;

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;

    try {
      const data = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ q }),
      });
      const json: MicroCMSListResponse<Blog> = await data.json();
      setSearch(json);
    } catch (error) {
      alert(`システムエラーが発生しました。\n${error}`);
    }
  };

  return (
    <BaseLayout>
      <form className="mb-5" onSubmit={handleSubmit}>
        <Grid grow>
          <Grid.Col span={9} sm={10}>
            <Input type="text" name="query" placeholder="記事を検索する" />
          </Grid.Col>
          <Grid.Col span={3} sm={2}>
            <Button color="indigo" type="submit" fullWidth>
              検索
            </Button>
          </Grid.Col>
        </Grid>
      </form>
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
