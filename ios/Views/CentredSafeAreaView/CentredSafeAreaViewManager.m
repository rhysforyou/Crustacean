/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "CentredSafeAreaViewManager.h"

#import "CentredSafeAreaShadowView.h"
#import "CentredSafeAreaView.h"

@implementation CentredSafeAreaViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[CentredSafeAreaView alloc] initWithBridge:self.bridge];
}

- (CentredSafeAreaShadowView *)shadowView
{
  return [CentredSafeAreaShadowView new];
}

@end
