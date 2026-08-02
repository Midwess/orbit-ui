import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const tokens = await readFile(new URL('../src/features/unified/unified.tokens.css', import.meta.url), 'utf8')
const styles = await readFile(new URL('../src/lib/styles.css', import.meta.url), 'utf8')

test('continuous squircle corners are the default Orbit geometry', () => {
  assert.match(tokens, /--u-corner-shape:\s*squircle;/)
  assert.match(styles, /\.orbit-ui[^{}]*\.unified-session[^{}]*\{\s*corner-shape:\s*var\(--u-corner-shape, squircle\);\s*\}/)
})

test('buttons use the shared rounded control geometry', () => {
  assert.match(tokens, /--u-radius-button:\s*18px;/)
  assert.match(tokens, /--u-radius-button-compact:\s*15px;/)
  assert.match(tokens, /--u-radius-icon-button:\s*17px;/)
  assert.match(styles, /\.u-button\s*\{[^{}]*border-radius:\s*var\(--u-radius-button, 18px\);/)
  assert.match(styles, /\.u-button--compact\s*\{[^{}]*border-radius:\s*var\(--u-radius-button-compact, 15px\);/)
  assert.match(styles, /\.u-icon-action\s*\{[^{}]*border-radius:\s*var\(--u-radius-icon-button, 17px\);/)
})

test('true circles and capsules retain round geometry', () => {
  assert.match(tokens, /--u-corner-shape-round:\s*round;/)
  assert.match(styles, /\.u-badge[^{}]*\.u-avatar[^{}]*\{\s*corner-shape:\s*var\(--u-corner-shape-round, round\);\s*\}/)
})

test('the smallest readable interface label starts at twelve pixels', () => {
  assert.match(tokens, /--u-text-xs:\s*0\.75rem;/)
  assert.match(tokens, /--u-text-sm:\s*0\.875rem;/)
})
