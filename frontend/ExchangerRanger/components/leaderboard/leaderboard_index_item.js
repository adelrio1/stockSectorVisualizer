import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class LeaderboardIndexItem extends Component {
  render() {
    return (
      <View style={styles.canvas}>
        <View style={styles.container}>
          <View style={styles.rankBox}>
            <Text style={styles.rankText}>
              {this.props.rank}&nbsp;
              {(this.props.rank === 3) ?
                <Image style={styles.winner}>
                </Image>
              :
              ""}

            </Text>
          </View>
          <Text style={styles.netWorthText}>
            ${this.props.player.net_worth}
          </Text>
          <View style={styles.moneyContainer}>
          <Text style={styles.nameText}>
            &nbsp; {this.props.player.username}
          </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  canvas: {
    height: 65,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -1
    },
    borderRadius: 2,

  },
  winner: {
    height: 30,
    width: 35,
  },
  rankBox: {

  },
  rankText: {
    color: '#74B530',
    fontFamily: 'GillSans-bold',
    fontSize: 36,
    marginLeft: 8,
  },
  nameText: {
    color: '#727272',
    fontSize: 20,
    fontFamily: 'GillSans-semibold'
  },
  netWorthText: {
    color: '#249b09',
    fontSize: 28,
    fontFamily: 'Gill Sans'
  },
  moneyContainer: {
    alignItems: 'flex-end',
  },
});