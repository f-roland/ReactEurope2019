import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.34,
    textAlign: 'center',
    color: '#a0aab4'
  }
});

const Empty = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.bodyText}>{children}</Text>
  </View>
);

Empty.propTypes = {
  children: PropTypes.node
};

export default Empty;