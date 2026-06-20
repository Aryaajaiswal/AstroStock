# Contributing to AstroStock

Thank you for your interest in contributing to AstroStock! We welcome contributions from developers, researchers, data scientists, and financial analysts. This document outlines our contribution guidelines and best practices.

---

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Development Setup](#development-setup)
- [Git Workflow](#git-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Research Contributions](#research-contributions)

---

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please:
- Be respectful and inclusive
- Report unethical behavior through appropriate channels
- Focus on constructive feedback
- Respect intellectual property and academic integrity

---

## Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/AstroStock.git
   cd AstroStock
   ```

2. **Create Development Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Set Up Development Environment**
   ```bash
   npm install
   cd client && npm install
   ```

4. **Create .env file**
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   API_KEY_STOCK_DATA=your_stock_api_key
   ```

---

## Types of Contributions

### 🐛 Bug Reports
- Report bugs via GitHub Issues
- Include: reproduction steps, expected behavior, actual behavior
- Add relevant screenshots or error logs
- Specify your environment (OS, Node version, etc.)

### 🎨 Feature Requests
- Suggest features via GitHub Discussions or Issues
- Explain the use case and expected benefits
- Discuss implementation approach if you have ideas

### 📝 Documentation
- Improve README, comments, or guides
- Clarify complex sections
- Add examples and tutorials
- Fix typos and formatting

### 🔬 Research & Algorithm Improvements
- Propose new machine learning models
- Suggest astronomical data sources
- Share findings on astrology-market correlations
- Submit peer-reviewed research citations

### 🐍 Code Contributions
- Bug fixes
- Performance improvements
- New features
- Refactoring and optimization
- Test coverage improvements

### 🌙 Astronomical Data Integration
- Add new lunar/planetary calculations
- Integrate additional ephemeris data sources
- Improve cyclical pattern recognition
- Add new seasonal indicators

---

## Development Setup

### Prerequisites
- Node.js v14+ and npm
- MongoDB (local or Atlas)
- Python 3.8+ (for astronomical calculations)
- Git

### Backend Setup
```bash
# Install backend dependencies
npm install

# Install Python packages
pip install -r requirements.txt

# Start MongoDB
mongod

# Start backend server
npm start
# Server runs on http://localhost:5000
```

### Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start frontend development server
npm start
# Frontend runs on http://localhost:3000
```

### Running Tests
```bash
# Backend tests
npm test

# Frontend tests
cd client && npm test
```

---

## Git Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/feature-name
# or
git checkout -b bugfix/bug-name
# or
git checkout -b docs/documentation-name
```

### 2. Make Changes
```bash
git add .
git commit -m "Your commit message"
```

### 3. Keep Updated with Main
```bash
git fetch origin
git rebase origin/main
```

### 4. Push Changes
```bash
git push origin feature/feature-name
```

### 5. Create Pull Request
- Open PR with clear title and description
- Link related issues
- Add screenshots for UI changes
- Request reviews

---

## Commit Guidelines

### Commit Message Format
```
<type>: <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Dependency updates, build changes
- **research**: Research or algorithm findings

### Examples
```
feat: Add Mercury retrograde prediction alerts

Implement automated detection of Mercury retrograde periods
and send alerts to users about increased market volatility risks.

Closes #42
```

```
fix: Correct lunar phase calculation for southern hemisphere

Adjust ephemeris calculations to account for southern hemisphere
variations in lunar phase visualization.

Fixes #156
```

```
docs: Add lunar cycle analysis methodology to README

Explain how AstroStock calculates and integrates lunar phases
in the prediction model.
```

---

## Pull Request Process

### Before Submitting
1. **Test Locally**
   ```bash
   npm test
   npm run lint
   ```

2. **Update Documentation**
   - Update README if needed
   - Add comments to complex code
   - Update CHANGELOG.md

3. **Check Formatting**
   ```bash
   npm run format
   ```

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Research finding

## How to Test
Steps to verify the changes

## Screenshots (if applicable)
Add relevant screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] No new warnings generated

## Related Issues
Closes #(issue number)
```

### Review Process
- At least one maintainer review required
- Address feedback and push updates
- Rebase before merge if needed
- Squash commits if requested

---

## Coding Standards

### JavaScript/Node.js
```javascript
// Use const/let, not var
const API_ENDPOINT = 'https://api.example.com';
let userCount = 0;

// Use arrow functions
const handleClick = () => { };

// Use async/await
async function fetchStockData(symbol) {
  try {
    const response = await fetch(`/api/stocks/${symbol}`);
    return response.json();
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
}

// Use meaningful variable names
const lunarPhasePercentage = 0.75;
const mercuryRetrograde = true;

// Add JSDoc comments
/**
 * Calculate lunar phase influence on market volatility
 * @param {Date} date - The date to calculate for
 * @returns {Number} Volatility adjustment factor (0-1)
 */
function calculateLunarInfluence(date) { }
```

### React Components
```javascript
// Use functional components
const PredictionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  
  return (
    <div className="prediction-form">
      {/* Component JSX */}
    </div>
  );
};

// Export with display name
PredictionForm.displayName = 'PredictionForm';

export default PredictionForm;
```

### Python (Astronomical Calculations)
```python
"""
Astronomical calculations module for AstroStock
"""

from astropy.coordinates import EarthLocation
from astropy.time import Time


def calculate_lunar_phase(date: datetime) -> float:
    """
    Calculate lunar phase for given date.
    
    Args:
        date: datetime object
        
    Returns:
        float: Lunar phase (0-1, where 0 is new moon, 0.5 is full moon)
    """
    # Implementation
    pass
```

### CSS/Styling
```css
/* Use BEM naming convention */
.prediction-form {
  display: flex;
  flex-direction: column;
}

.prediction-form__input {
  padding: 10px;
  border: 1px solid #ccc;
}

.prediction-form__button {
  background-color: #007bff;
  color: white;
}

.prediction-form__button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## Research Contributions

### How to Contribute Research

1. **Propose New Research**
   - Open GitHub Discussion
   - Describe hypothesis and methodology
   - Cite relevant papers and sources

2. **Share Findings**
   - Publish as issue with research tag
   - Include data analysis and visualizations
   - Link to academic papers if applicable

3. **Improve Algorithms**
   - Submit PRs with new ML models
   - Include performance benchmarks
   - Document improvements

### Research Contribution Template
```markdown
## Research Finding: [Title]

### Hypothesis
[Your hypothesis about astrology-market correlation]

### Methodology
[How you tested this]

### Results
[Data and findings]

### Implications for AstroStock
[How this improves predictions]

### References
- [Academic paper 1]
- [Data source]
- [Related research]
```

---

## Testing

### Unit Tests
```bash
npm test
```

### Integration Tests
```bash
npm run test:integration
```

### End-to-End Tests
```bash
npm run test:e2e
```

### Coverage Report
```bash
npm run test:coverage
```

**Target Coverage:** 80%+ for critical prediction algorithms

---

## Performance Guidelines

- Keep API response time < 200ms
- Ensure ML predictions generate within 5 seconds
- Optimize database queries with indexes
- Minimize bundle size (target: < 500KB gzipped)

---

## Security Guidelines

- Never commit API keys or secrets
- Sanitize user inputs
- Use HTTPS for all API calls
- Validate user authentication
- Keep dependencies updated
- Report security issues to maintainers privately

---

## Documentation

### README Updates
- Update Table of Contents if adding sections
- Keep examples current and working
- Add screenshots for UI changes

### Code Comments
- Explain "why", not just "what"
- Document complex algorithms
- Add JSDoc for functions
- Comment business logic

### Commit Messages
- Reference related issues
- Explain changes clearly
- Use present tense ("Add" not "Added")

---

## Questions & Support

- **Discussions**: GitHub Discussions tab
- **Issues**: Use GitHub Issues for bugs
- **Documentation**: Check README and Wiki
- **Contact**: Open a discussion thread

---

## Thank You!

Thank you for contributing to AstroStock! Your contributions help make this project better for everyone. Whether it's code, documentation, research, or ideas—we appreciate your involvement in this unique intersection of astronomy, machine learning, and financial analysis.

**Happy Contributing! 🌟📈🚀**

---

**Last Updated:** June 2026
**Maintained by:** Arya Jaiswal
