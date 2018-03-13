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
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator
} from 'react-native'
import { itemDividerColor, itemHighlightColor } from '../lib/colors'
import CentredSafeAreaView from './CentredSafeAreaView'
import StorySummary from './StorySummary'
import CommentBubble from './CommentBubble'

import type { StorySummary as StorySummaryType } from '../api'

const Divider = () => <View style={styles.divider} />

type Props = {
  stories: StorySummaryType[],
  onSelectStory: StorySummaryType => mixed,
  onSelectStoryComments: StorySummaryType => mixed,
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
        <CentredSafeAreaView>
          <View style={styles.item}>
            <StorySummary story={item} />
            <TouchableOpacity
              onPress={() => this.props.onSelectStoryComments(item)}
              style={styles.commentCount}
            >
              <CommentBubble
                width={35}
                height={30}
                count={item.comment_count}
              />
            </TouchableOpacity>
          </View>
        </CentredSafeAreaView>
      </Touchable>
    )
  }

  renderEmpty = () =>
    this.props.isLoading ? (
      <View style={styles.placeholderContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
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
  item: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'stretch'
  },
  divider: {
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor,
    marginStart: 16
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 128
  },
  placeholderText: {
    fontSize: 36,
    fontWeight: '800',
    color: placeholderTextColor
  },
  commentCount: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 0,
    fontSize: 14
  }
})
