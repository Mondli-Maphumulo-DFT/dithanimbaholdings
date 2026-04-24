# Security Policy

## Reporting a Vulnerability

At DithaNimbaHoldings, we take security seriously. If you discover a security vulnerability in this repository, please report it responsibly.

### How to Report

**Please do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email us with the following details:
- Description of the vulnerability
- Steps to reproduce (if applicable)
- Potential impact
- Suggested fix (if you have one)

Send your report to: **security@dithanimbaholdings.com** (or the appropriate contact)

### What to Expect

1. We will acknowledge receipt of your report within 48 hours
2. We will investigate and validate the vulnerability
3. We will work on a fix and coordinate a responsible disclosure timeline
4. We will credit you in the fix (unless you prefer anonymity)

## Security Best Practices

### For Contributors

1. **Never commit sensitive information** such as:
   - API keys or tokens
   - Database credentials
   - Private certificates or keys
   - Personal information

2. **Use environment variables** for configuration:
   - Store sensitive data in `.env` files (add to `.gitignore`)
   - Never commit `.env` files

3. **Review code carefully** before submitting pull requests
   - Check for security vulnerabilities
   - Validate all user inputs
   - Avoid hardcoding sensitive data

### For Maintainers

1. **Review all pull requests** for security issues
2. **Run dependency checks** regularly using tools like Dependabot
3. **Monitor for vulnerabilities** in third-party libraries
4. **Keep dependencies updated** to patch known vulnerabilities

## Security Features Enabled

- ✅ `.gitignore` configuration to prevent sensitive file commits
- ✅ Branch protection on `main` branch (manual setup required)
- ✅ Commit signing requirements (manual setup required)
- ✅ Dependabot monitoring (if available on your plan)

## Additional Resources

- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [OWASP Web Application Security](https://owasp.org/www-project-web-security-testing-guide/)
- [CWE Top 25](https://cwe.mitre.org/top25/)

## Version History

- **2026-04-24** - Initial security policy created
