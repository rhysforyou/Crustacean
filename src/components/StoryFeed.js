/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} from 'react-native'
import { itemDividerColor } from '../lib/colors'
import StorySummary from './StorySummary'

import type { StorySummary as StorySummaryType } from '../api'

type Props = {
  stories: StorySummaryType[],
  onSelectStory: StorySummaryType => mixed
}

export default class HomeScreen extends Component<Props> {
  keyExtractor = (item: StorySummaryType) => item.short_id

  renderItem = ({ item }: { item: StorySummaryType }) => {
    const Touchable = Platform.select({
      ios: TouchableHighlight,
      android: TouchableNativeFeedback
    })
    return (
      <Touchable
        underlayColor="#EAF4FF"
        onPress={() => this.props.onSelectStory(item)}
      >
        <View style={styles.item}>
          <StorySummary story={item} />
        </View>
      </Touchable>
    )
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
