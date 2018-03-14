// @flow
import React, { PureComponent } from 'react'
import { ART, Text, View, StyleSheet, Platform } from 'react-native'
import { accentColor } from '../lib/colors'

const { Shape, Surface } = ART

type Props = {
  width: number,
  height: number,
  fillColor: ?string,
  strokeWidth: number,
  strokeColor: ?string,
  textColor: ?string,
  tickSize: number,
  count: number
}

export default class CommentBubble extends PureComponent<Props> {
  static defaultProps = {
    fillColor: Platform.select({ ios: null, android: accentColor }),
    strokeWidth: Platform.select({ ios: 1, android: 0 }),
    strokeColor: accentColor,
    textColor: Platform.select({ ios: accentColor, android: 'white' }),
    tickSize: 6,
    count: 0
  }

  // Compute the SVG <path> data for a speech bubble shape
  commentBubblePath() {
    const { width, height, strokeWidth, tickSize } = this.props
    const bubbleHeight = height - tickSize
    const radius = bubbleHeight / 2
    const inset = strokeWidth / 2

    return `
      M ${radius + inset},${inset}
      L ${width - radius - inset},${inset}
      a ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1
        0,${bubbleHeight - strokeWidth}
      l 0,${tickSize}
      l ${-tickSize},${-tickSize}
      L ${radius + inset},${bubbleHeight - inset}
      a ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1
        0,${strokeWidth - bubbleHeight}
      Z
    `
  }

  render() {
    const {
      width,
      height,
      fillColor,
      strokeColor,
      strokeWidth,
      tickSize,
      textColor,
      count
    } = this.props

    return (
      <View>
        <Surface width={width} height={height}>
          <Shape
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            d={this.commentBubblePath()}
          />
        </Surface>
        <View style={[styles.textContainer, { bottom: tickSize }]}>
          <Text style={[styles.text, { color: textColor }]}>{count}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: Platform.select({ ios: '400', android: '800' })
  }
})
