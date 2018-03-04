/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, FlatList, Platform } from 'react-native'
import StorySummary from './StorySummary'

import type { StorySummary as StorySummaryType } from '../api'

type Props = {
  stories: StorySummaryType[]
}

export default class HomeScreen extends Component<Props> {
  keyExtractor = (item: StorySummaryType) => item.short_id

  renderItem = ({ item }: { item: StorySummaryType }) => {
    return <StorySummary story={item} style={styles.item} />
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.stories}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

const itemDividerColor = '#DEDEE1'

const styles = StyleSheet.create({
  list: {
    paddingTop: Platform.select({ ios: 0, android: 8 }),
    paddingBottom: Platform.select({ ios: 44, android: 72 })
  },
  item: {
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor
  }
})
