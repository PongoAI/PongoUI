## API Report File for "@pongo-ui/react-tabs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { TabListContextValues } from '@fluentui/react-tabs';
import { TabListProps as TabListProps_2 } from '@fluentui/react-tabs';
import { TabListState as TabListState_2 } from '@fluentui/react-tabs';
import type { TabProps } from '@fluentui/react-tabs';
import type { TabState } from '@fluentui/react-tabs';

// @public
export const Tab: ForwardRefComponent<TabProps>;

// Warning: (ae-forgotten-export) The symbol "TabListProps" needs to be exported by the entry point index.d.ts
//
// @public
export const TabList: ForwardRefComponent<TabListProps>;

// Warning: (ae-forgotten-export) The symbol "TabListState" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function useTabListContextValues(state: TabListState): TabListContextValues;

// @public (undocumented)
export const useTabListStyles: (state: TabListState) => TabListState;

// @public (undocumented)
export const useTabStyles: (state: TabState) => TabState;

// (No @packageDocumentation comment for this package)

```