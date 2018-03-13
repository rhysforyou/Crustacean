// @flow
import React, { PureComponent } from 'react'
import { ART, Text, View, StyleSheet } from 'react-native'
import { accentColor } from '../lib/colors'

const { Shape, Surface } = ART

type Props = {
  width: number,
  height: number,
  strokeWidth: number,
  strokeColor: string,
  tickSize: number,
  count: number
}

export default class CommentBubble extends PureComponent<Props> {
  static defaultProps = {
    strokeWidth: 1,
    strokeColor: accentColor,
    tickSize: 8,
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
      A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1
        ${width - radius - inset} ${bubbleHeight - inset}
      L ${width - radius - inset},${height - inset}
      L ${width - radius - tickSize - inset},${bubbleHeight - inset}
      L ${radius + inset},${bubbleHeight - inset}
      A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1
        ${radius + inset} ${inset} ${inset},${radius}
      Z
    `
  }

  render() {
    return (
      <View>
        <Surface width={this.props.width} height={this.props.height}>
          <Shape
            stroke={this.props.strokeColor}
            strokeWidth={this.props.strokeWidth}
            d={this.commentBubblePath()}
          />
        </Surface>
        <View style={[styles.textContainer, { bottom: this.props.tickSize }]}>
          <Text style={styles.text}>{this.props.count}</Text>
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
    color: accentColor,
    fontSize: 14
  }
})
