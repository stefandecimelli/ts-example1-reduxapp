# Example Code
Demponstrating a few things here:
 1. Using react and redux with typescript
 2. My preferred file structure when creating react:
    - `src/components` for components
    - `src/store/store.ts` for the store 
    - `src/store/reducer/` for all reducers
    - `src/store/action` for al lactions
    - `src/lib` for all no-component related code
    - each component inside it's own directory, accessed via index
    - each component directory containing a `__tests__` directory and a `.css` file
 3. Using global state dispatch, global state select, along wih local state usage in components
 4. Usage of tailwind as the preferred css library