# Frontend

## Development instructions

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm start
```

Build production build:

```bash
npm run build
```

Run test suite:

```bash
npm test
```

### Write additional component tests

You can write a test for a new component by adding an additional `.test.tsx` file.
For example if you just added a `new-component`, then add the test `new-component.test.tsx`.
Jest will then automatically detect the new test the next time it is run.
The content of the test itself is up to you to write. But you can base yourself on `IngredentResult.test.tsx` if you want an example.

## Dockerfile

The Dockerfile is written for production, and is not meant to be used
for iterative development.
