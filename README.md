# @yiyb0603/react-scroll-progress-line

#### 🎁 This package is a bar with the ability to show at the top how far down the current scroll point is.

## Install

```bash
npm install --save @yiyb0603/react-scroll-progress-line
```

or

```bash
yarn add @yiyb0603/react-scroll-progress-line
```

## Props

<table>
  <tr>
    <th style="text-align: center">Name</th>
    <th style="text-align: center">Description</th>
    <th style="text-align: center">Type</th>
    <th>Required</th>
    <th style="text-align: center">Default</th>
  </tr>

  <tr>
    <td>backgroundColor</td>
    <td>Color indicating where the current scroll has not reached</td>
    <td style="text-align: center">string</td>
    <td style="text-align: center">O</td>
    <td style="text-align: center">""</td>
  </tr>

  <tr>
    <td>progressColor</td>
    <td>A color indicating where the current scroll has reached</td>
    <td style="text-align: center">string</td>
    <td style="text-align: center">O</td>
    <td style="text-align: center">""</td>
  </tr>

  <tr>
    <td>height</td>
    <td style="text-align: center">ProgressLine's height</td>
    <td style="text-align: center">string | number</td>
    <td style="text-align: center">X</td>
    <td style="text-align: center">5px</td>
  </tr>

  <tr>
    <td>customStyle</td>
    <td>Set other custom styles </td>
    <td style="text-align: center">CSSProperties</td>
    <td style="text-align: center">X</td>
    <td style="text-align: center">{}</td>
  </tr>

  <tr>
    <td>disableClick</td>
    <td>Whether to use the click-to-go event or not.</td>
    <td style="text-align: center">boolean</td>
    <td style="text-align: center">X</td>
    <td style="text-align: center">false</td>
  </tr>

  <tr>
    <td>clickCallback</td>
    <td>Function to run after click move</td>
    <td style="text-align: center">Function</td>
    <td style="text-align: center">X</td>
    <td style="text-align: center">() => {}</td>
  </tr>
</table>

## Usage

```tsx
import React from 'react'

import ScrollProgressLine from '@yiyb0603/react-scroll-progress-line'

const App = (): JSX.Element => {
  return (
    <ScrollProgressLine
      backgroundColor='gray'
      progressColor='blue'
      height='8px'
    />
  )
}

export default App
```

## Execution

![Untitled_ Jul 19, 2021 1_46 PM](https://user-images.githubusercontent.com/50941453/126104429-05d1bb2c-eb4c-4437-88d3-7e34851653b3.gif)

## License

MIT © [yiyb0603](https://github.com/yiyb0603)
