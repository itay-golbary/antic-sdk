# Antic SDK challenge

## Create Package

```bash
npm install
npm run build
npm pack
```

## Installation

```bash
npm install ./antic-sdk-0.5.0.tgz
```

## Usage

```python
import Antic from antic-sdk

<Antic
    isOpen={true}
    onClose={() => {}}
    initialState={{
        appToken: "",
        productData: {
            id: "",
            name: "",
            image: "",
            description: ""
        }
    }}
/>  
```

## Requirements

```bash
"react": ">=16.14.0"
```

## Configuration Files
* [package.json](package.json)
* [tsconfig.json](tsconfig.json)
  * [tsconfig.build.json](tsconfig.build.json)
* [.eslintrc](.eslintrc)
* [.prettierrc.json](.prettierrc.json)
* [babel.config.js](babel.config.js)
* [jestconfig.json](jestconfig.json)


## CI/CD (Github Actions)
* [code analysis](.github/workflows/code-analysis.yml) - on push
  * dependencies check
  * link check
  * tests check
  * build check
* [version bump](.github/workflows/version-bump.yml) - on push/merge to master
* [publish](.github/workflows/publish.yml) - on create release

## Reports
* [lint](./reports/report-lint.xml)
* [tests](./reports/report-tests.xml)


## Outputs
* [CommonJS](./dist/cjs)
* [ECMAScript](./dist/esm)

## To-Do
* config with webpack for performance, optimization and uglify
* publish package to npm
* setup api configuration
* handle app authentication
* convert to css modules and config with webpack
* handle hashRouter for deep linking
* fix code-analysis workflow to cache dependencies
* add tests


## Architecture
![Architecture](/assets/ReactArchitecturev2.jpg)
