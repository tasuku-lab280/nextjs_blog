import Link from 'next/link';
import {
  Card as MantineCard,
  Text,
  Badge,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { Clock } from 'tabler-icons-react';
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
          className="hover:bg-zinc-700"
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

          <Group>
            <Clock size={15} />
            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              {dayjs(publishedAt).format('YYYY/MM/DD')}
            </Text>
          </Group>
        </MantineCard>
      </a>
    </Link>
  );
};
