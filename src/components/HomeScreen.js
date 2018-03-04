/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { hottestStoriesFixture } from '../api/fixtures'

import type { StorySummary } from '../api/fixtures'

type Props = {}

export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Home'
  }

  keyExtractor = (item: StorySummary) => item.short_id

  renderItem = ({ item }: { item: StorySummary }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={hottestStoriesFixture}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

const lightGrayColor = '#F5FCFF'
const textColor = '#333'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGrayColor
  },
  item: {
    padding: 8
  },
  title: {
    fontSize: 18,
    color: textColor
  }
})
