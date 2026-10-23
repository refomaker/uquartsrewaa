import { createRequire } from 'node:module';
import { defineConfig, globalIgnores } from 'eslint/config';
const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve('eslint-config-next'));
const nextPlugin = nextRequire('@next/eslint-plugin-next');
const tsParser = nextRequire('@typescript-eslint/parser');
export default defineConfig([{plugins:{'@next/next':nextPlugin},rules:nextPlugin.configs.recommended.rules},{files:['**/*.{ts,tsx}'],languageOptions:{parser:tsParser}},globalIgnores(['.next/**','node_modules/**'])]);
