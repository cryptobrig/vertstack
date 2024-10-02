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
- 🔄 Flexible CI/CD pipeline with GitHub Actions, supporting multiple environments
- 🌍 Environment-specific configuration support for development, staging, and production

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

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow is designed to be flexible, supporting setups ranging from a simple production-only environment to a full development-staging-production pipeline.

### Workflow Files

The GitHub Actions workflow files can be found in the `.github/workflows/` directory:

- `pr_checks.yml`: Runs checks on all pull requests
- `deploy.yml`: Handles deployment to all environments

### Workflow Overview

On Pull Request to any branch (`pr_checks.yml`):

1. Install dependencies
2. Run linter
3. Run tests
4. Build the project (to ensure it compiles successfully)

On Push to main, development, or staging branches (`deploy.yml`):

1. Install dependencies
2. Determine the target environment based on the branch
3. Build the project using the appropriate .env file
4. Deploy to the corresponding environment
5. Run health checks

### Environment-Specific Considerations

The workflow automatically detects which environment to deploy to based on the branch:

- `main` branch deploys to production
- `staging` branch deploys to staging (if used)
- `development` branch deploys to development (if used)

Each environment can have its own set of secrets and environment variables configured in GitHub Actions. Sensitive information like API keys and database credentials should be stored as GitHub Secrets and injected during the build process.

### Flexible Environment Setup

This CI/CD configuration is designed to be flexible:

- For a simple setup, you can use just the main branch for production deployments.
- For a more complex setup, you can use all three branches: development, staging, and main (production).
- You can easily add or remove environments by modifying the `deploy.yml` file and adding or removing the corresponding `.env` files.

### Deployment Strategy

Deployments are automatic upon push to their respective branches. For added safety, especially in production, consider adding a manual approval step by modifying the `deploy.yml` workflow.

### Monitoring and Rollback

The `deploy.yml` workflow includes a placeholder for health checks after deployment. Implement proper health checks and rollback procedures based on your specific application and infrastructure.

To use this setup:

1. Ensure your repository has the necessary secrets set up in GitHub Actions.
2. Modify the `deploy.yml` file to include your actual deployment steps.
3. Implement proper health checks for your application.
4. Optionally, add manual approval steps for sensitive environments like production.

For detailed information on the CI/CD setup, please refer to the workflow files in the `.github/workflows/` directory.

### Security Considerations

- Never commit sensitive information (API keys, passwords, etc.) to any of these files.
- Use your CI/CD pipeline to inject sensitive values during the deployment process.
- Consider using a secrets management service for production deployments.

## Future Roadmap

While the VERT Stack Template provides a robust foundation for many projects, here are some additional features we're working on implementing. Feel free to submit a pull request. :)

1. **Environment Configuration**: Set up environment-specific configurations for development, staging, and production.
2. **Performance Optimization**: Set up code splitting and lazy loading for improved performance.
3. **Security Enhancements**: Add security-focused linting rules and implement other security best practices.
4. **Internationalization (i18n)**: Add support for multiple languages if required for your application.
5. **PWA Support**: Implement service workers and add a web app manifest for progressive web app capabilities.
6. **Comprehensive Example**: Develop a more detailed example showcasing routing, state management, and API calls.
7. **Expanded Documentation**: Provide more comprehensive documentation on project structure, design decisions, and best practices.
8. **Accessibility Implementation**: Implement accessibility checks in ESLint and ensure the template follows accessibility best practices.

These items are not necessarily required for all projects but represent areas where the template could be extended to meet more specific or advanced needs.

## How to Proceed from Here

### Adding a UI Component Library

To enhance your development process and ensure UI consistency, you might want to add a UI component library. Here are some popular options:

1. **Ant Design (Recommended)**

   Ant Design is a comprehensive UI library with a wide range of components and built-in support for animations via Ant Motion.

   To add Ant Design to your project:

   ```bash
   pnpm add antd @ant-design/icons
   ```

   To use Ant Motion for animations:

   ```bash
   pnpm add rc-tween-one @ant-design/react-slick
   ```

   [Ant Design Documentation](https://ant.design/)
   [Ant Motion Documentation](https://motion.ant.design/)

2. **Material-UI (MUI)**

   A popular React UI framework implementing Google's Material Design.

   ```bash
   pnpm add @mui/material @emotion/react @emotion/styled
   ```

   [MUI Documentation](https://mui.com/)

3. **Chakra UI**

   A simple, modular, and accessible component library for React applications.

   ```bash
   pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion
   ```

   [Chakra UI Documentation](https://chakra-ui.com/)

After adding your chosen UI library, you may need to set up theme providers or import styles. Refer to the respective documentation for detailed setup instructions.

### Next Steps

1. **Implement Routing**: Consider adding React Router for navigation in multi-page applications.
2. **Enhance Accessibility**: Integrate eslint-plugin-jsx-a11y into your ESLint configuration for accessibility checks.
3. **SEO Optimization**: Add React Helmet for basic SEO setup.
4. **Authentication**: Implement a basic authentication system based on your backend requirements.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
