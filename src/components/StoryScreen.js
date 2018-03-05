// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Platform,
  Share,
  TouchableOpacity,
  Image
} from 'react-native'
import { standardNavigationOptions } from '../lib/navigation'
import { singleStoryFixture } from '../api/fixtures'
import shareIcon from '../../assets/icons/ic_share.png'
import StorySummary from './StorySummary'
import StoryComments from './StoryComments'

import type { NavigationNavigatorProps } from 'react-navigation'
import type { StorySummary as StorySummaryType } from '../api'

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
      ...standardNavigationOptions(),
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

  renderHeader = () => (
    <StorySummary
      story={singleStoryFixture || this.props.navigation.state.params.story}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <StoryComments
          header={this.renderHeader}
          comments={singleStoryFixture.comments}
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
  navigationBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.select({ ios: 44, android: 48 }),
    height: Platform.select({ ios: 44, android: 48 }),
    marginEnd: Platform.select({ ios: 3, android: 0 })
  }
})
