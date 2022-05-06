import { MantineProvider as Provider } from '@mantine/core';

type Props = { children: React.ReactNode };

export const MantineProvider = ({ children }: Props) => {
  return (
    <Provider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      {children}
    </Provider>
  );
};
