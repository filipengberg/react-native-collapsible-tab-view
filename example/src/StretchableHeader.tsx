import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { useHeaderMeasurements } from 'react-native-collapsible-tab-view'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

import ExampleComponent from './Shared/ExampleComponent'
import { ExampleComponentType } from './types'

const title = 'Stretchable Header'

export const Header = () => {
  const { top } = useHeaderMeasurements()

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: Math.min(0, -top.value / 2),
        },
        {
          scale: Math.max(1, (250 + top.value) / 250),
        },
      ],
    }
  })

  return (
    <Animated.View style={[styles.root]} pointerEvents="none">
      <Animated.View style={[styles.background, backgroundStyle]}>
        <ImageBackground
          style={styles.image}
          source={require('../assets/album-art-2.jpg')}
        />
      </Animated.View>
    </Animated.View>
  )
}

const Example: ExampleComponentType = () => {
  return <ExampleComponent renderHeader={() => <Header />} overScrollEnabled />
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

Example.title = title

export default Example
