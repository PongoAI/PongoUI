# Icon

Icons help provide user's clarity on an action. They are especially helpful in Buttons, Menus, and other controls to further convey a text based definition.

## Use

1. Install the @pongo-ui/react-icon component.

Using NPM

```
npm install @pongo-ui/react-icon
```

Using Yarn

```
yarn add @pongo-ui/react-icon
```

2. Install the @fluentui/react-provider and our theme tokens from @pongo-ui/react-theme

3. Set up the provider in your app:

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
    <FluentProvider>
  )
}
```

4. Integrate a Icon component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Icon } from '@pongo-ui/react-icon'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Icon />
    <FluentProvider>
  )
}
```

## API

To learn more about the Icon API take a look at the [Icon Interface](src/components/Icon/Icon.types.ts) file.