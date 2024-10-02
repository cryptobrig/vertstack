## Environment Configuration

This project uses a branch-based environment strategy, coupled with environment-specific configuration files for both local development and deployed environments.

### Branch-Environment Relationship

- `development` branch → Development domain (e.g., dev.yourapp.com)
- `staging` branch → Staging domain (e.g., staging.yourapp.com)
- `main` or `production` branch → Production domain (e.g., yourapp.com)

### Environment Files

1. Local Development:

   - `.env`: Shared default settings (committed to git)
   - `.env.local`: Personal overrides (not committed to git)

2. Deployed Environments:
   - `.env.development`: Settings for the development domain
   - `.env.staging`: Settings for the staging domain
   - `.env.production`: Settings for the production domain

These files should be committed to the repository but should not contain any sensitive information like API keys or passwords.

### File Loading Priority

For local development:

1. `.env.local` (highest priority, not committed to git)
2. `.env` (committed to git)

For deployed environments:

1. `.env.{environment}` (e.g., `.env.development` for the development domain)
2. `.env` (fallback for any values not specified in the environment-specific file)

### Usage in Code

To use environment variables in your application, prefix them with `VITE_`. For example:

```
VITE_API_URL=https://api.example.com
```

You can then access this in your React components:

```typescript
console.log(import.meta.env.VITE_API_URL);
```

Note: Only variables prefixed with `VITE_` are exposed to your React application for security reasons.

### Local Development

For local development, you typically don't need to specify a mode. Simply run:

```
pnpm dev
```

This will use the `.env` file, with any values in `.env.local` taking precedence.

### Deployment

The appropriate environment file will be used based on the branch being deployed:

- When deploying the `development` branch, `.env.development` will be used.
- When deploying the `staging` branch, `.env.staging` will be used.
- When deploying the `main` or `production` branch, `.env.production` will be used.

Ensure your CI/CD pipeline is configured to use the correct environment file based on the branch being deployed.

### Security Considerations

- Never commit sensitive information (API keys, passwords, etc.) to any of these files.
- Use your CI/CD pipeline to inject sensitive values during the deployment process.
- Consider using a secrets management service for production deployments.

[... rest of the content ...]
