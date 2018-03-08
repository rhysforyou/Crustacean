// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Share, StatusBar, SafeAreaView } from 'react-native'
import { standardNavigationOptions } from '../lib/navigation'
import { accentDarkColor } from '../lib/colors'
import { fetchStory } from '../api'
import StorySummary from './StorySummary'
import StoryComments from './StoryComments'
import ShareButton from './ShareButton'

import type { NavigationNavigatorProps } from 'react-navigation'
import type { StorySummary as StorySummaryType, Story } from '../api'

type NavigationState = {
  params: {
    id: string,
    story: StorySummaryType,
    share: () => void
  }
}

type Props = {} & NavigationNavigatorProps<{}, NavigationState>

type State = {
  story: ?Story,
  isLoading: boolean
}

export default class StoryScreen extends Component<Props, State> {
  static navigationOptions = ({
    navigation
  }: NavigationNavigatorProps<{}, NavigationState>) => {
    const params = navigation.state.params || {}
    return {
      ...standardNavigationOptions(),
      title: 'Story',
      headerRight: <ShareButton onPress={params.share} />
    }
  }

  state = {
    story: null,
    isLoading: false
  }

  componentDidMount() {
    this.props.navigation.setParams({ share: this.handleShare })

    if (!this.state.isLoading) {
      this.fetchStory()
    }
  }

  fetchStory = () => {
    this.setState({ isLoading: true }, async () => {
      const story = await fetchStory(this.props.navigation.state.params.id)
      this.setState({ isLoading: false, story })
    })
  }

  handleShare = () => {
    Share.share({
      url:
        this.state.story != null
          ? this.state.story.url
          : this.props.navigation.state.params.story.url
    })
  }

  renderHeader = () => (
    <SafeAreaView>
      <StorySummary
        story={this.state.story || this.props.navigation.state.params.story}
      />
    </SafeAreaView>
  )

  render() {
    const { story, isLoading } = this.state
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={accentDarkColor}
          networkActivityIndicatorVisible={isLoading}
        />
        <StoryComments
          header={this.renderHeader}
          comments={story ? story.comments : []}
          onRefresh={this.fetchStory}
          refreshing={story != null && isLoading}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})
