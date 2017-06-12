import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import NewLote from '../components/NewLote.js';
import Map from '../components/Map.js';

export const Tabs = TabNavigator({
  NewLote: {
    screen: NewLote,
  },
  Map: {
    screen: Map,
  }
});

