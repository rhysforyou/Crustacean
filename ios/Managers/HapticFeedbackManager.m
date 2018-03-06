//
//  HapticFeedbackManager.m
//  Crustacean
//
//  Created by Rhys Powell on 6/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "HapticFeedbackManager.h"

@interface HapticFeedbackManager ()

@property (nonatomic, strong) UIImpactFeedbackGenerator *lightImpactFeedbackGenerator;
@property (nonatomic, strong) UIImpactFeedbackGenerator *mediumImpactFeedbackGenerator;
@property (nonatomic, strong) UIImpactFeedbackGenerator *heavyImpactFeedbackGenerator;
@property (nonatomic, strong) UISelectionFeedbackGenerator *selectionFeedbackGenerator;
@property (nonatomic, strong) UINotificationFeedbackGenerator *notificationFeedbackGenerator;

@end

@implementation HapticFeedbackManager

RCT_EXPORT_MODULE(HapticFeedbackIOS);

@synthesize lightImpactFeedbackGenerator = _lightImpactFeedbackGenerator;
@synthesize mediumImpactFeedbackGenerator = _mediumImpactFeedbackGenerator;
@synthesize heavyImpactFeedbackGenerator = _heavyImpactFeedbackGenerator;
@synthesize selectionFeedbackGenerator = _selectionFeedbackGenerator;
@synthesize notificationFeedbackGenerator = _notificationFeedbackGenerator;

- (UIImpactFeedbackGenerator *)lightImpactFeedbackGenerator
{
  if (!_lightImpactFeedbackGenerator) {
    _lightImpactFeedbackGenerator = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
  }
  return _lightImpactFeedbackGenerator;
}

- (UIImpactFeedbackGenerator *)mediumImpactFeedbackGenerator
{
  if (!_mediumImpactFeedbackGenerator) {
    _mediumImpactFeedbackGenerator = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleMedium];
  }
  return _mediumImpactFeedbackGenerator;
}

- (UIImpactFeedbackGenerator *)heavyImpactFeedbackGenerator
{
  if (!_heavyImpactFeedbackGenerator) {
    _heavyImpactFeedbackGenerator = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleHeavy];
  }
  return _heavyImpactFeedbackGenerator;
}

- (UISelectionFeedbackGenerator *)selectionFeedbackGenerator
{
  if (!_selectionFeedbackGenerator) {
    _selectionFeedbackGenerator = [[UISelectionFeedbackGenerator alloc] init];
  }
  return _selectionFeedbackGenerator;
}

- (UINotificationFeedbackGenerator *)notificationFeedbackGenerator
{
  if (!_notificationFeedbackGenerator) {
    _notificationFeedbackGenerator = [[UINotificationFeedbackGenerator alloc] init];
  }
  return _notificationFeedbackGenerator;
}

RCT_EXPORT_METHOD(prepareImpact:(NSString *)weight)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if (!weight || [weight isEqualToString:@"light"]) {
      [self.lightImpactFeedbackGenerator prepare];
    } else if ([weight isEqualToString:@"medium"]) {
      [self.mediumImpactFeedbackGenerator prepare];
    } else if ([weight isEqualToString:@"heavy"]) {
      [self.heavyImpactFeedbackGenerator prepare];
    }
  });
}


RCT_EXPORT_METHOD(generateImpact:(NSString *)weight)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if (!weight || [weight isEqualToString:@"light"]) {
      [self.lightImpactFeedbackGenerator impactOccurred];
    } else if ([weight isEqualToString:@"medium"]) {
      [self.mediumImpactFeedbackGenerator impactOccurred];
    } else if ([weight isEqualToString:@"heavy"]) {
      [self.heavyImpactFeedbackGenerator impactOccurred];
    }
  });
}

RCT_EXPORT_METHOD(prepareSelectionChange)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.selectionFeedbackGenerator prepare];
  });
}

RCT_EXPORT_METHOD(generateSelectionChange)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.selectionFeedbackGenerator selectionChanged];
  });
}

RCT_EXPORT_METHOD(prepareNotification)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.notificationFeedbackGenerator prepare];
  });
}


RCT_EXPORT_METHOD(generateNotification:(NSString *)type)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if (!type || [type isEqualToString:@"success"]) {
      [self.notificationFeedbackGenerator notificationOccurred:UINotificationFeedbackTypeSuccess];
    } else if ([type isEqualToString:@"warning"]) {
      [self.notificationFeedbackGenerator notificationOccurred:UINotificationFeedbackTypeWarning];
    } else if ([type isEqualToString:@"error"]) {
      [self.notificationFeedbackGenerator notificationOccurred:UINotificationFeedbackTypeError];
    }
  });
}
@end
