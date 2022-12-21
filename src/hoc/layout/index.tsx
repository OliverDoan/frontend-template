import { ReactNode, FC } from 'react';
import { Header } from '~/components/Header';

type Props = { children: ReactNode };

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
