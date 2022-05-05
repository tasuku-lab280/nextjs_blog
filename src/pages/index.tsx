import Link from 'next/link';
import type { GetStaticProps, NextPage } from 'next';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

import { BaseLayout } from 'layouts/BaseLayout';
import { client } from 'services/microcms/client';
import type { Blog } from 'types/blog';

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  return (
    <BaseLayout>
      <ul>
        <p>記事の総数：{props.totalCount}</p>
        {props.contents.map((content) => (
          <li key={content.id}>
            <Link href={`/blog/${content.id}`}>
              <a href="">{content.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
