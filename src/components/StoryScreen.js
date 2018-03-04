/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Platform } from 'react-native'
import HTML from 'react-native-render-html'
import { standardNavigationOptions } from '../lib/navigation'
import { itemDividerColor } from '../lib/colors'
import StorySummary from './StorySummary'
import { singleStoryFixture } from '../api/fixtures'

import type { NavigationNavigatorProps } from 'react-navigation'
import type { StorySummary as StorySummaryType, Comment } from '../api'

const Divider = () => <View style={styles.divider} />

const baseHorizontalPadding = Platform.select({ android: 16, ios: 8 })

type NavigationState = {
  params: {
    id: string,
    story: StorySummaryType
  }
}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

export default class StoryScreen extends Component<Props> {
  static navigationOptions = {
    ...standardNavigationOptions,
    title: 'Story'
  }

  keyExtractor = (item: Comment) => item.short_id

  renderHeader = () => (
    <StorySummary
      story={singleStoryFixture || this.props.navigation.state.params.story}
    />
  )

  renderItem = ({ item }: { item: Comment }) => (
    <View style={[styles.item, this.indentStyles(item)]}>
      <HTML html={item.comment} />
    </View>
  )

  indentStyles(comment: Comment) {
    if (comment.indent_level === 1) {
      return null
    } else {
      return {
        marginLeft: 8 * (comment.indent_level - 1),
        borderLeftWidth: 2,
        borderLeftColor: itemDividerColor
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={singleStoryFixture.comments || []}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={Divider}
          style={styles.list}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    alignSelf: 'stretch',
    paddingTop: Platform.select({ ios: 0, android: 8 })
  },
  item: {
    marginVertical: 8,
    paddingHorizontal: baseHorizontalPadding
  },
  divider: {
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor,
    marginLeft: 8
  }
})
