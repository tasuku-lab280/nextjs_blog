import Link from 'next/link';
import {
  Card as MantineCard,
  Text,
  Badge,
  useMantineTheme,
} from '@mantine/core';
import dayjs from 'dayjs';

type Props = {
  title: string;
  image: string;
  publishedAt: string;
  category: string;
  link: string;
};

export const Card = (props: Props) => {
  const { title, publishedAt, category, link } = props;
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Link href={link}>
      <a className="no-underline">
        <MantineCard
          shadow="sm"
          p="lg"
          radius="md"
          className="bg-gray-800 hover:bg-gray-700"
        >
          <MantineCard.Section>
            <Badge color="pink" variant="light" className="mt-5 ml-5">
              {category}
            </Badge>
          </MantineCard.Section>

          <div className="mt-5 mb-5 flex h-20 items-center">
            <Text size="lg" weight={800} lineClamp={3}>
              {title}
            </Text>
          </div>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            <time dateTime={publishedAt}>
              {dayjs(publishedAt).format('YYYY/MM/DD')}
            </time>
          </Text>
        </MantineCard>
      </a>
    </Link>
  );
};
