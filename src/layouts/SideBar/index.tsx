import { Text, Card, TextInput, Avatar, Center } from '@mantine/core';
import { Search } from 'tabler-icons-react';

export const SideBar = () => {
  return (
    <>
      <form>
        <TextInput
          label="記事を検索"
          type="text"
          name="query"
          icon={<Search size={20} />}
          classNames={{ label: 'font-bold' }}
        />
      </form>
      <Text size="sm" weight={800} className="mt-10">
        プロフィール
      </Text>
      <Card shadow="sm" p="xl">
        <Center>
          <Avatar color="cyan" size="xl" classNames={{ root: 'rounded-full' }}>
            MK
          </Avatar>
        </Center>
      </Card>
      <Text size="sm" weight={800} className="mt-10">
        カテゴリ
      </Text>
      <Card shadow="sm" p="xl">
        カテゴリ
      </Card>
    </>
  );
};
