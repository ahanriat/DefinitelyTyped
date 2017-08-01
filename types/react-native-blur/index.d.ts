// Type definitions for react-native-blur 3.1.x
// Project: https://github.com/react-native-community/react-native-blur
// Definitions by: ahanriat <https://github.com/ahanriat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ViewProperties } from 'react-native';

export interface BlurViewProperties {
  blurType: 'xlight' | 'light' | 'dark';
  blurAmount?: number; // 0 - 100
  style?: ViewProperties;
}

export class BlurView extends React.Component<BlurViewProperties, {}> {}


export interface VibrancyViewProperties extends BlurView {}

export class VibrancyView extends React.Component<BlurViewProperties, {}> {}