import PushNotification from 'react-native-push-notification';

// Configure the notification settings
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
    console.log('TOKEN:', token);
  },
  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log('NOTIFICATION:', notification);
  },
  // (optional) Called when the user clicks on the notification
  onAction: function(notification) {
    console.log('ACTION:', notification.action);
  },
  // (optional) Called when the user dismisses the notification
  onDismiss: function(notification) {
    console.log('DISMISSED:', notification);
  },
  // (optional) IOS only - Called when permissions are requested
  onPermissionsRequest: function() {
    console.log('ON PERMISSIONS REQUEST');
  },
});

// Create the notification
PushNotification.localNotification({
  /* Android Only Properties */
  channelId: 'my_channel_id', // (required) channelId, if the notification is issued by a notification channel, otherwise null
  ticker: 'My Notification Ticker', // (optional)
  showWhen: true, // (optional) Show the notification time
  autoCancel: true, // (optional) Automatically cancel the notification when the user taps it

  /* iOS and Android properties */
  title: 'My Notification Title', // (optional)
  message: 'My Notification Message', // (required)
  smallIcon: 'notification_icon', // (optional) name of the icon for the notification
  largeIcon: 'notification_icon', // (optional) name of the icon for the expanded view of the notification
  playSound: true, // (optional) Play a sound when the notification is displayed
  soundName: 'default', // (optional) Sound to play when the notification is displayed
  actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
});
