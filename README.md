# VERT Stack Template

- **V**ite for fast development and building
- **E**SLint for code quality and consistency
- **R**eact for building user interfaces
- **T**ypeScript for type safety

## Features

- ⚡️ Vite for lightning fast development and building
- 🏗 TypeScript for enhanced type safety and developer experience
- ⚛️ React 18 for building interactive UIs
- 📏 ESLint for code linting with modern configuration (eslint.config.js)
- 💖 Prettier for code formatting
- 🐶 Husky for Git hooks
- 🚫 lint-staged for running linters on Git staged files
- 🧪 Vitest for fast and efficient testing
- 🛡️ Error Boundaries for graceful error handling in production

## Getting Started

1. Clone this repository
2. Run `pnpm install` to install dependencies
3. Run `pnpm dev` to start the development server

## Available Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build the project for production
- `pnpm preview`: Preview the production build
- `pnpm lint`: Run ESLint
- `pnpm lint:fix`: Run ESLint and automatically fix issues
- `pnpm format`: Run Prettier to format all files
- `pnpm prepare`: Install Husky git hooks (runs automatically after install)
- `pnpm test`: Run Vitest tests
- `pnpm test:watch`: Run Vitest in watch mode
- `pnpm test:coverage`: Run Vitest with coverage report

## Testing

This project uses Vitest for testing. Vitest is a Vite-native testing framework that's fast and efficient. It's compatible with Jest's API, making it easy to migrate existing tests.

To run tests:

```bash
pnpm test
```

To run tests in watch mode:

```bash
pnpm test:watch
```

To generate a coverage report:

```bash
pnpm test:coverage
```

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. The configuration is set up in `eslint.config.js` and `.prettierrc.json` respectively.

To run the linter:

```bash
pnpm lint
```

To automatically fix linting issues:

```bash
pnpm lint:fix
```

To format code with Prettier:

```bash
pnpm format
```

## Git Hooks

This project uses Husky to manage Git hooks. The pre-commit hook runs lint-staged, which in turn runs ESLint and Prettier on staged files.

## Future Roadmap

While the VERT Stack Template provides a robust foundation for many projects, here are some additional features you might consider implementing based on your specific project needs:

1. **Environment Configuration**: Set up environment-specific configurations for development, staging, and production.
2. **Performance Optimization**: Set up code splitting and lazy loading for improved performance.
3. **Security Enhancements**: Add security-focused linting rules and implement other security best practices.
4. **Internationalization (i18n)**: Add support for multiple languages if required for your application.
5. **PWA Support**: Implement service workers and add a web app manifest for progressive web app capabilities.
6. **Comprehensive Example**: Develop a more detailed example showcasing routing, state management, and API calls.
7. **CI/CD Pipeline**: Set up a complete CI/CD pipeline, potentially using GitHub Actions.
8. **Expanded Documentation**: Provide more comprehensive documentation on project structure, design decisions, and best practices.
9. **Accessibility Implementation**: Implement accessibility checks in ESLint and ensure the template follows accessibility best practices.

These items are not necessarily required for all projects but represent areas where the template could be extended to meet more specific or advanced needs.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
