usefx
-----

A clearer, safer, footgun-free approach to React's `useEffect`.

🚧 **Full documentation coming soon** 🚧

Adds these new variations of React's `useEffect` that will be used in place of it:
- `usePostChangeEffect`
- `usePostRenderEffect`
- `usePostInitialRenderEffect`

To configure eslint to correctly lint these variants the same way it will lint `useEffect` (if you have [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) installed, which is highly recommended), add these lines to the `rules` section of your `.eslintrc.js`:
```javascript
'react-hooks/exhaustive-deps': [
  'error',
  {
    additionalHooks: 'usePostChangeEffect',
  },
],
'no-restricted-syntax': [
  'error',
  {
    selector: "CallExpression[callee.name='useEffect']",
    message:
      [
        "Calling useEffect is forbidden due to lack of clarity and" +
          " performance issues that stem from incorrect usage of it." +
          " Please use one of these alternate hooks instead:",
        "usePostChangeEffect ( import { usePostChangeEffect } from 'usefx' )",
        "usePostRenderEffect ( import { usePostRenderEffect } from 'usefx' )",
        "usePostInitialRenderEffect ( import { usePostInitialRenderEffect } from 'usefx' )",
      ].join("\n")
  },
],
```
