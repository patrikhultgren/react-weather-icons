# react-weather-icons

`react-weather-icons` is a library to provide weather icon components. The weather icons themself are created by Yr.no.

## Installation

```bash
yarn add @patrikhultgren/react-weather-icons
# or
npm install @patrikhultgren/react-weather-icons
```

Example of how to use:

```jsx
import { ClearSkyDay } from '@patrikhultgren/react-weather-icons'

function ExampleComponent() {
  return <ClearSkyDay />
}
```

[See how the icons looks like](https://hjelp.yr.no/hc/en-us/articles/203786121-Weather-symbols-on-Yr)

## Props

The icons allows all svg attributes. Here are the most common props:

| Key         | Default     | Notes                               |
| ----------- | ----------- | ----------------------------------- |
| `size`      | `2.5rem`    |                                     |
| `className` | `undefined` | Css class for styling               |
| `title`     | `undefined` | Title description for accessibility |

## Available icons

```
ClearSkyDay
ClearSkyNight
ClearSkyPolarTwilight
Cloudy
FairDay
FairNight
FairPolarTwilight
Fog
HeavyRain
HeavyRainAndThunder
HeavyRainShowersDay
HeavyRainShowersNight
HeavyRainShowersPolarTwilight
HeavyRainShowersAndThunderDay
HeavyRainShowersAndThunderNight
HeavyRainShowersAndThunderPolarTwilight
HeavySleet
HeavySleetAndThunder
HeavySleetShowersDay
HeavySleetShowersNight
HeavySleetShowersPolarTwilight
HeavySleetShowersAndThunderDay
HeavySleetShowersAndThunderNight
HeavySleetShowersAndThunderPolarTwilight
HeavySnow
HeavySnowAndThunder
HeavySnowShowersDay
HeavySnowShowersNight
HeavySnowShowersPolarTwilight
HeavySnowShowersAndThunderDay
HeavySnowShowersAndThunderNight
HeavySnowShowersAndThunderPolarTwilight
LightRain
LightRainAndThunder
LightRainShowersDay
LightRainShowersNight
LightRainShowersPolarTwilight
LightRainShowersAndThunderDay
LightRainShowersAndThunderNight
LightRainShowersAndThunderPolarTwilight
LightSleet
LightSleetAndThunder
LightSleetShowersDay
LightSleetShowersNight
LightSleetShowersPolarTwilight
LightSnow
LightSnowAndThunder
LightSnowShowersDay
LightSnowShowersNight
LightSnowShowersPolarTwilight
LightSleetShowersAndThunderDay
LightSleetShowersAndThunderNight
LightSleetShowersAndThunderPolarTwilight
LightSnowShowersAndThunderDay
LightSnowShowersAndThunderNight
LightSnowShowersAndThunderPolarTwilight
PartlyCloudyDay
PartlyCloudyNight
PartlyCloudyPolarTwilight
Rain
RainAndThunder
RainShowersDay
RainShowersNight
RainShowersPolarTwilight
RainShowersAndThunderDay
RainShowersAndThunderNight
RainShowersAndThunderPolarTwilight
Sleet
SleetAndThunder
SleetShowersDay
SleetShowersNight
SleetShowersPolarTwilight
SleetShowersAndThunderDay
SleetShowersAndThunderNight
SleetShowersAndThunderPolarTwilight
Snow
SnowAndThunder
SnowShowersDay
SnowShowersNight
SnowShowersPolarTwilight
SnowShowersAndThunderDay
SnowShowersAndThunderNight
SnowShowersAndThunderPolarTwilight
```

# Contributing

The icons are visualized with Storybook and the library is created with Rollup. Feel free to create pull requests.

## Scripts

To start Storybook:

```bash
npm run storybook
```

To create and publish a new version of the library:

Increase the version in package.json.

Build the library:

```bash
npm run rollup
```

Run to publish the library:

```bash
npm publish
```

## License

Copyright (c) Patrik Hultgren.

Licensed under The MIT License (MIT).

The weather icons themself are provided by Yr.no and are licensed under the MIT license.
