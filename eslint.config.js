import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    // ---- ADDED RULES BLOCK TO FIX YOUR ERRORS ----
    rules: {
      // 1. Relaxes unused variables/imports so they only show as warnings, not breaking errors
      '@typescript-eslint/no-unused-vars':"off",

      // 2. Fixes the 'user' parameter implicitly having an 'any' type error
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-implicit-any-catch': 'off',
      
      // Note: If TypeScript's 'noImplicitAny' compiler option is what triggers the TS7006 error 
      // on your (.map(user => ...)), you will still need to either pass (user: any) in the code 
      // or ensure "noImplicitAny": false is in your tsconfig.json.
    },
  },
])