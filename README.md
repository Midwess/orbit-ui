# Orbit UI

Orbit UI is a composable React and TypeScript component library built from the merged Restaurant Operations and Work OS design studies. The package provides reusable primitives; the Vite documentation app demonstrates components and full product blocks in dark and light themes.

## Install

```bash
npm install @midwess/orbit-ui
```

Import the package stylesheet once at the application root:

```tsx
import '@midwess/orbit-ui/styles.css'
```

Then compose components directly:

```tsx
import { Badge, Button, Surface } from '@midwess/orbit-ui'

export function Example() {
  return (
    <section className="orbit-ui" data-orbit-theme="dark">
      <Surface tone="coral">
        <Badge>Operations</Badge>
        <h2>Evening service is ready</h2>
        <Button tone="neutral">Open brief</Button>
      </Surface>
    </section>
  )
}
```

## Development

```bash
npm install
npm run dev
npm run build
```

`npm run build` type-checks the project, builds the distributable package into `dist/`, emits TypeScript declarations, and builds the documentation site into `docs-dist/`.

## Package structure

```text
src/lib/                 Public package entry point and component styles
src/features/unified/    Documentation catalog and reusable product blocks
src/components/ui/       Shared icon implementation
public/                  Demonstration imagery used by documentation blocks
```

The public package currently exports `Button`, `IconAction`, `Surface`, `Badge`, `Avatar`, `AvatarGroup`, `ProgressBar`, `ViewHeading`, `SectionTitle`, and `Icon`.

## Design principles

- Compose explicit component variants instead of accumulating boolean modes.
- Keep product blocks independent from documentation-shell state.
- Use semantic HTML and preserve keyboard, focus, status, and reduced-motion behavior.
- Treat continuous G2-style squircle corners as a system requirement for every rounded rectangle; reserve round corners for true circles and capsules.
- Use the shared button-radius tokens for standard, compact, and icon actions so control geometry stays consistent across products.
- Reserve orange for primary decisions; use coral, violet, cyan, sage, and yellow for category and context.
- Support both `data-orbit-theme="dark"` and `data-orbit-theme="light"`.

## License

[MIT](LICENSE)
