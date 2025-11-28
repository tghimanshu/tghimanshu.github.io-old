# Future Plan - Phase 2

This document outlines the plan for the next phase of development for the portfolio project. Phase 1 (current state) is considered complete with the documentation and basic functionality in place.

## Overview

Phase 2 aims to modernize the codebase, improve performance, and enhance maintainability. The focus will be on transitioning from a static HTML/jQuery site to a more dynamic and structured application, or refining the current static site with modern best practices.

## Proposed Enhancements

### 1. Modernization & Tech Stack

*   **Remove jQuery**: Refactor all jQuery dependencies to vanilla JavaScript to reduce bundle size and improve performance. Modern browser APIs (`querySelector`, `addEventListener`, `scrollIntoView`, `IntersectionObserver`) can replace all current jQuery functionality.
*   **CSS Architecture**:
    - Implement SASS/SCSS for better stylesheet organization (variables, nesting, mixins).
    - Use CSS Variables (Custom Properties) for theming (colors, spacing).
    - Consider a utility-first framework like Tailwind CSS for rapid styling.
*   **Module Bundler**: Introduce a build tool (Vite, Webpack, or Parcel) to bundle scripts and styles, enabling module usage (ES Modules) and asset optimization.

### 2. Code Quality & Maintainability

*   **Linting & Formatting**: Integrate ESLint and Prettier to enforce consistent code style and catch errors early.
*   **Componentization**:
    - Break down the monolithic `index.html` into smaller, reusable components. This could be done via a static site generator (like Jekyll, Hugo, or 11ty) or a frontend framework (React, Vue, or Svelte).
    - *Example*: Extract `Navbar`, `SkillBar`, `ProjectCard`, and `Footer` into separate components.
*   **Data Separation**: Move data (skills, projects, services) out of the HTML and into a JSON or YAML data file. This allows for easier updates without touching the markup structure.

### 3. Feature Enhancements

*   **Dark Mode**: Implement a toggle for light/dark mode using CSS variables.
*   **Performance Optimization**:
    - **Image Optimization**: Convert images to WebP format and implement lazy loading (`loading="lazy"` attribute).
    - **Minification**: Minify HTML, CSS, and JS files for production.
*   **Accessibility (a11y)**:
    - Audit and improve ARIA labels.
    - Ensure keyboard navigation works for all interactive elements.
    - Check color contrast ratios.
*   **Testing**: Add basic unit tests for JavaScript logic (e.g., the TypeWriter class) using Jest or Vitest.

### 4. Continuous Integration/Deployment (CI/CD)

*   **GitHub Actions**: Set up a workflow to automatically build and deploy the site on push to the `main` branch.
*   **Automated Testing**: Run linting and tests in the CI pipeline.

## Timeline

*   **Week 1**: Refactor jQuery to Vanilla JS.
*   **Week 2**: Set up build tool and SASS; optimize assets.
*   **Week 3**: Separate data from HTML; implement Dark Mode.
*   **Week 4**: Accessibility audit and final polish.
