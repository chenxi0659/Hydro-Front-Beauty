import { MantineProvider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { hydroBeautyTheme } from './theme';

export function HydroBeautyProvider({ children }: PropsWithChildren) {
  return <MantineProvider theme={hydroBeautyTheme}>{children}</MantineProvider>;
}

