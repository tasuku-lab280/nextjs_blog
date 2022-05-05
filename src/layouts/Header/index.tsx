import {
  createStyles,
  Header as MantineHeader,
  Autocomplete,
  Group,
  Burger,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { Search } from 'tabler-icons-react';

import { MantineLogo } from './Logo';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export const Header = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const links = [
    { label: 'ブログ', link: '/' },
    { label: 'プロフィール', link: '/' },
  ];

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineHeader height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={() => toggleOpened()} size="sm" />
          <MantineLogo />
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<Search size={16} />}
            data={[
              'React',
              'Angular',
              'Vue',
              'Next.js',
              'Riot.js',
              'Svelte',
              'Blitz.js',
            ]}
          />
        </Group>
      </div>
    </MantineHeader>
  );
};
