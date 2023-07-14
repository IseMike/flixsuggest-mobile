import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieList from '../components/MovieList';

const Tab = createMaterialTopTabNavigator();

const RegRateMoviesScreen = ({ route }) => {
      const { likedGenres } = route.params;

      return (
            <Tab.Navigator
                  tabBarOptions={{
                        scrollEnabled: true,
                        tabStyle: { width: 'auto' },
                        indicatorStyle: { backgroundColor: 'red' },
                  }}>
                  {likedGenres.map((genre) => (
                        <Tab.Screen key={genre} name={genre}>
                              {() => <MovieList genre={genre} />}
                        </Tab.Screen>
                  ))}
            </Tab.Navigator>
      );
};

export default RegRateMoviesScreen;