# \<wc-hello>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i wc-hello
```

## Usage

```html
<script type="module">
  import 'wc-hello/wc-hello.js';
</script>

<wc-hello></wc-hello>
```

## Publish
Generate bundle files
```bash
 npx webpack
```
Sign in with your npm account
```bash
 npm login
```
Release a version depending on breaking changes
```bash
 npm version patch|minor|major
```
Publish
```bash
 npm publish
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
