/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import * as React from 'react'
import { requireNativeComponent, ViewPropTypes } from 'react-native'

import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes'

type Props = ViewProps & {
  children: any
}

/**
 * Renders nested content and automatically applies paddings reflect the portion of the view
 * that is not covered by navigation bars, tab bars, toolbars, and other ancestor views.
 * Moreover, and most importantly, Safe Area's paddings reflect physical limitation of the screen,
 * such as rounded corners or camera notches (aka sensor housing area on iPhone X).
 */
export default class CentredSafeAreaView extends React.Component<Props> {
  static propTypes = {
    ...ViewPropTypes
  }

  render() {
    return <NativeCentredSafeAreaView {...this.props} />
  }
}

const NativeCentredSafeAreaView = requireNativeComponent(
  'CentredSafeAreaView',
  {
    name: 'CentredSafeAreaView',
    displayName: 'CentredSafeAreaView',
    propTypes: {
      ...ViewPropTypes
    }
  }
)
