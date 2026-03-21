# UI System Rules

This document defines the baseline rules for layout, typography, spacing, color/state, and motion in this project.

## 1. Field Composition

Use `Field` as the outer form block scope.

- `Field`
  - Owns the block label, description, message, and shared error state.
  - Use when one logical form block needs one label flow.
  - `inputId` is the source of truth when the block should point to one control.
- `Field.Item`
  - Owns one row or one inner scope inside a `Field`.
  - Use for checkbox, radio, switch rows, or when a nested row needs its own `infoMessage` or `errorMessage`.
  - Can be used alone or inside `Field`.
- `Field.Grid`
  - Layout only.
  - Never owns `inputId`, message ids, or accessibility state.
  - Use instead of ad-hoc wrapper `div`s for multi-column form layout.

Rules:

- Use `Field.Label` when the label should bind to one control.
- Use `Field.Label as="span"` only for group labels or visual headings that should not render a `label`.
- Put block-level `infoMessage` or `errorMessage` on `Field`.
- Put row-level `infoMessage` or `errorMessage` on `Field.Item`.
- Do not duplicate the same message on both `Field` and the child input unless the child must also work standalone outside `Field`.
- Group controls such as `RadioGroup` and `CheckboxGroup` should live under a visible `Field.Label as="span"` or receive an explicit `aria-label`.

Example:

```tsx
<Field>
  <Field.Label as="span">Visibility</Field.Label>
  <RadioGroup name="visibility" direction="row">
    <Field.Item>
      <Radio value="public" />
      <Field.Label>Public</Field.Label>
    </Field.Item>
    <Field.Item>
      <Radio value="private" />
      <Field.Label>Private</Field.Label>
    </Field.Item>
  </RadioGroup>
  <Field.Description>Choose who can access this item.</Field.Description>
</Field>
```

## 2. Type Scale

Use only the project type scale. Do not add one-off font sizes unless there is a clear exception.

- `label`
  - Small labels, chips, meta text, group captions.
- `body-sm`
  - Secondary body text, descriptions, supporting copy.
- `body`
  - Default control text and regular body copy.
- `title`
  - Card titles, section titles, dialog titles.
- `display`
  - Hero titles only.

SCSS rule:

```scss
@include mix.type-scale("body");
@include mix.type-scale("label", "bold", 1, 0.12em);
```

## 3. Spacing and Layout

Use the spacing scale first, then surface padding tokens when the element is a card or section.

- `func.space("2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl")`
  - General gaps, inline padding, stacked spacing.
- `func.surface-space("compact" | "card" | "section")`
  - Interior padding for surfaces.
- `func.size(...)`
  - Control height, icon size, chip size, selector size.
- `func.radius(...)`
  - Border radius only from the shared scale.
- `func.shadow(...)`
  - Shadow only from the shared scale.

Rules:

- Use `gap` for vertical stacks before adding margin between siblings.
- Prefer `Field.Grid`, `ButtonGroup`, and component layout APIs before adding custom wrapper `div`s.
- Do not hardcode `3.6rem`, `4.8rem`, `2.4rem` if an existing size or spacing token already matches.

## 4. Color and State

Use semantic tokens, not raw brand colors or raw gray tokens, in component styles.

- Text
  - `--text-primary`
  - `--text-secondary`
  - `--text-tertiary`
  - `--text-quaternary`
  - `--text-brand`
  - `--text-danger`
  - `--text-info`
- Border
  - `--border-subtle`
  - `--border-default`
  - `--border-strong`
  - `--border-brand*`
- Surface and gradients
  - `--surface-*`
  - `--gradient-*`
- Controls
  - `--control-text`
  - `--control-bg`
  - `--control-border`
  - `--control-accent`
  - `--control-border-error`

Rules:

- Use semantic text tokens in components instead of `--text-color-*`.
- Use control tokens for input-like components instead of direct gray/background variables.
- Use brand, error, info, disabled, and readonly states through semantic tokens only.

## 5. Motion

SCSS motion and Framer Motion must use the same token source.

SCSS:

- Duration tokens live in `src/styles/abstracts/_variables.scss`.
- Use `func.transition-token(...)` or `@include mix.motion-transition(...)`.

JS:

- Framer Motion tokens live in `src/utils/motion.ts`.
- Use `motionTransition.overlay`, `motionTransition.panel`, `motionTransition.popover`, `motionTransition.toast`, or `motionTransition.collapse`.
- Do not inline `duration: 0.18` or `ease: "easeOut"` in components unless there is a documented exception.

Current duration scale:

- `quick`: `0.12s`
- `fast`: `0.18s`
- `base`: `0.2s`
- `slow`: `0.24s`
- `deliberate`: `0.32s`

Current easing scale:

- `standard`: default UI interaction easing
- `emphasized`: panel and toast entrance emphasis
- `exit`: stronger exit easing when needed
- `linear`: rare cases only

## 6. New Component Checklist

Before merging a new component, check this:

- Layout uses `Field`, `Field.Item`, `Field.Grid`, or existing group/layout APIs where applicable.
- Font sizes use `mix.type-scale(...)`.
- Gaps and paddings use `func.space(...)` or `func.surface-space(...)`.
- Sizes use `func.size(...)`.
- Radius and shadows use shared tokens.
- Colors use semantic tokens.
- CSS transitions use motion helpers.
- Framer Motion uses `src/utils/motion.ts`.
- Group controls have a visible label or an explicit accessible name.
