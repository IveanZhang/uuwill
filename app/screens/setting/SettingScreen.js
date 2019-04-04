import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import {
  RkSwitch,
} from '../../components';

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: '设置'.toUpperCase(),
  }; 

  state = {
    sendPush: true,
    shouldRefresh: false,
    twitterEnabled: true,
    googleEnabled: false,
    facebookEnabled: true,
  };

  onPushNotificationsSettingChanged = (value) => {
    this.setState({ sendPush: value });
  };

  onRefreshAutomaticallySettingChanged = (value) => {
    this.setState({ shouldRefresh: value });
  };

  onFindFriendsTwitterButtonPressed = () => {
    this.setState({ twitterEnabled: !this.state.twitterEnabled });
  };

  onFindFriendsGoogleButtonPressed = () => {
    this.setState({ googleEnabled: !this.state.googleEnabled });
  };

  onFindFriendsFacebookButtonPressed = () => {
    this.setState({ facebookEnabled: !this.state.facebookEnabled });
  };

  render = () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>PROFILE SETTINGS</RkText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Edit Profile</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Change Password</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <RkText rkType='header6'>Send Push Notifications</RkText>
          <RkSwitch
            style={styles.switch}
            value={this.state.sendPush}
            name="Push"
            onValueChange={this.onPushNotificationsSettingChanged}
          />
        </View>
        <View style={styles.row}>
          <RkText rkType='header6'>Refresh Automatically</RkText>
          <RkSwitch
            style={styles.switch}
            value={this.state.shouldRefresh}
            name="Refresh"
            onValueChange={this.onRefreshAutomaticallySettingChanged}
          />
        </View>
      </View>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>SUPPORT</RkText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Help</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Privacy Policy</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Terms & Conditions</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Logout</RkText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  switch: {
    marginVertical: 14,
  },
}));