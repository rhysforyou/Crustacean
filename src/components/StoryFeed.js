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
  View,
  Text
} from 'react-native'
import { itemDividerColor, itemHighlightColor } from '../lib/colors'
import StorySummary from './StorySummary'

import type { StorySummary as StorySummaryType } from '../api'

const Divider = () => <View style={styles.divider} />

type Props = {
  stories: StorySummaryType[],
  onSelectStory: StorySummaryType => mixed,
  isLoading?: boolean,
  onRefresh: () => void
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
        underlayColor={itemHighlightColor}
        onPress={() => this.props.onSelectStory(item)}
      >
        <View>
          <StorySummary story={item} />
        </View>
      </Touchable>
    )
  }

  renderEmpty = () => (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>No Stories</Text>
    </View>
  )

  render() {
    const { stories, isLoading, onRefresh } = this.props
    const isRefreshing = stories.length > 0 && isLoading

    return (
      <FlatList
        style={styles.list}
        data={stories}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={this.renderEmpty}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    )
  }
}

const placeholderTextColor = '#ccc'

const styles = StyleSheet.create({
  list: {
    paddingTop: Platform.select({ ios: 0, android: 8 }),
    paddingBottom: Platform.select({ ios: 44, android: 72 }),
    alignSelf: 'stretch'
  },
  divider: {
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor,
    marginStart: 8
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 128
  },
  placeholderText: {
    fontSize: 36,
    fontWeight: '200',
    color: placeholderTextColor
  }
})
