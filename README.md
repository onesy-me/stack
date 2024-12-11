
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Stack</h1>

<p align='center'>
  Stack
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 1.5kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
  <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
yarn add @onesy/stack
```

### Use cases
- Reversing
- Undo/redo
- Backtracking
- Call stack
- etc.

### Use

```javascript
  import OnesyStack from '@onesy/stack';

  // Make a new stack instance
  const onesyStack = new OnesyStack();

  // Add values
  onesyStack.push(1, 2, 3, 4);

  onesyStack.first;
  // 4

  onesyStack.length;
  // 4

  const value = onesyStack.pop();

  value;
  // 4

  onesyStack.first;
  // 3

  onesyStack.length;
  // 3
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```
