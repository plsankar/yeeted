# yeeted

Detect and escape embedding.
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/plsankar/yeeted/npm-publish.yml)

![npm](https://img.shields.io/npm/dt/yeeted)

![GitHub issues](https://img.shields.io/github/issues/plsankar/yeeted)

![npm bundle size](https://img.shields.io/bundlephobia/min/yeeted)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/plsankar/yeeted)

![GitHub all releases](https://img.shields.io/github/downloads/plsankar/yeeted/total)

## How does it work?

When the function is called it checks whether the current site is embeded (ie. inside a iframe), if yes then it changes the parents url to this url (ie. escape).

## Use cases

The script can be used escape iframes in demo sites, scripts and templates.

## Installation

Install `yeeted` with npm

```bash
  npm install yeeted
```

## Usage

```javascript
yeeted();
```

```javascript
yeeted({
    delay: 1000,
});
```

## API Reference

#### Get all items

```javascript
yeeted(options);
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `delay`   | `number` | Delay in milliseconds |

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/plsankar/yeeted
```

Go to the project directory

```bash
  cd yeeted
```

Install dependencies

```bash
  npm install
```

Build the library

```bash
  npm run build
```
