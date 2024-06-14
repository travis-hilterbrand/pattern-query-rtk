# Pattern -Efficient queries

## Overview

One of the most common patterns for SPA FE is querying. Custom hooks are a standard method for SOLID principles

Components - responsible for displaying data
Hooks - responsible for retrieving / transforming data

### Example

This example shows a list of Pokemon in a top banner. The selected Pokemon is shown below in a card. Click Pokemon from the top banner to select a different Pokemon.

Quickly click different Pokemon to see the caching behavior

For simplicity, errors are ignored

### Pros

- UX - mimimizes loading spinners while ensuring users see latest data
- Performance - Simple / robust support for caching
- Performance - Simple support for lazy data loading
  - Multiple component usage will share fetches
- Developer experience - colocate the hook with the component that uses it
  - Multiple hooks will not trigger multiple fetches
- Developer experience - fully typed
- Developer experience - standardized variables for loading and data with minimal boilerplate
- Can be integrated with Redux for efficiency (https://redux-toolkit.js.org/rtk-query/overview)

### Refs

https://tanstack.com/query/latest/docs/framework/react/overview
https://tanstack.com/query/latest/docs/framework/react/devtools
