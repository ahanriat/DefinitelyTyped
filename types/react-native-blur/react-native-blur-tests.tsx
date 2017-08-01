import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Image
} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';

class BlurViewTest extends React.Component {

  render(): React.ReactElement<any> {
    return (
      <Image source={{ uri: 'http://fakeimg.pl/200x200/?text=Hello' }} style={styles.image}>
        <BlurView blurType="light" style={styles.flex}>
          <Text>Hi, I am some blur text.</Text>
        </BlurView>
      </Image>
    );
  }
}

class VibrancyViewTest extends React.Component {

  render(): React.ReactElement<any> {
    return (
      <Image source={{ uri: 'http://fakeimg.pl/200x200/?text=Hello' }} style={styles.image}>
        <VibrancyView blurType="xlight" style={styles.flex}>
          <Text>Hi, I am some vibrant text.</Text>
        </VibrancyView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  flex: {
    flex: 1,
  },
});