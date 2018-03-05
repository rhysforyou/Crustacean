/**
 * Component responsible for rendering the 'home' screen
 *
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  Share,
  TouchableOpacity,
  Image
} from 'react-native'
import HTML from 'react-native-render-html'
import { standardNavigationOptions } from '../lib/navigation'
import { itemDividerColor } from '../lib/colors'
import { maxContentWidth } from '../lib/metrics'
import StorySummary from './StorySummary'
import { singleStoryFixture } from '../api/fixtures'
import shareIcon from '../../assets/icons/ic_share.png'

import type { NavigationNavigatorProps } from 'react-navigation'
import type { StorySummary as StorySummaryType, Comment } from '../api'

const Divider = () => <View style={styles.divider} />

const baseHorizontalPadding = Platform.select({ android: 16, ios: 8 })

type NavigationState = {
  params: {
    id: string,
    story: StorySummaryType,
    share: () => mixed
  }
}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

export default class StoryScreen extends Component<Props> {
  static navigationOptions = ({
    navigation
  }: NavigationNavigatorProps<{}, NavigationState>) => {
    const params = navigation.state.params || {}
    return {
      ...standardNavigationOptions,
      title: 'Story',
      headerRight: (
        <TouchableOpacity
          style={styles.navigationBarButton}
          onPress={params.share || (() => {})}
          accessibilityLabel="Learn more about this purple button"
        >
          <Image source={shareIcon} />
        </TouchableOpacity>
      )
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ share: this.handleShare })
  }

  handleShare = () => {
    Share.share({ url: singleStoryFixture.url })
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
        marginStart: 8 * (comment.indent_level - 1),
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
    paddingHorizontal: baseHorizontalPadding,
    maxWidth: maxContentWidth,
    width: '100%',
    alignSelf: 'center'
  },
  divider: {
    borderBottomWidth: Platform.select({
      ios: StyleSheet.hairlineWidth,
      android: 0
    }),
    borderBottomColor: itemDividerColor,
    marginStart: 8
  },
  navigationBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.select({ ios: 44, android: 48 }),
    height: Platform.select({ ios: 44, android: 48 }),
    marginEnd: Platform.select({ ios: 3, android: 0 })
  }
})
