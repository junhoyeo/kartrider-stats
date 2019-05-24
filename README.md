# KartriderStatus [![npm version](https://badge.fury.io/js/kartrider-stats.svg)](https://badge.fury.io/js/kartrider-stats)

## Installation

```bash
npm install kartrider-stats
```

## Usage

```js
> const kartriderStatus = require('kartrider-stats')
> kartriderStatus('nodim').then((res) => { console.log(res) })
[ { name: '빠름', summary: '1전1승0패' },
  { name: '매우빠름', summary: '5전1승4패' },
  { name: '무한부스터', summary: '31전14승17패' } ]
```
