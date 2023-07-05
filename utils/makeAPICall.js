import AsyncStorage from '@react-native-async-storage/async-storage';

const makeAPICall = async (url) => {
      // Check if data is already available in local storage
      const cachedData = await AsyncStorage.getItem(url);
      console.log(cachedData)
      if (cachedData) {
            console.log('Data already found on local device. API Call not necessary.')
            return JSON.parse(cachedData)
      }

      // Otherwise make API calls to retrieve and store data.
      try {
            console.log('Data not found. Calling API...')

            // Get the current count from AsyncStorage
            const countString = await AsyncStorage.getItem('apiCallCount')
            let count = parseInt(countString, 10) || 0

            // Check if the count exceeds the limit
            if (count >= 1000) {
                  console.error('API call daily limit exceeded')
                  return; // Stop further API calls
            }

            // Make the API call
            const response = await fetch(url)
            const data = await response.json()

            // Increment the count
            count++

            console.log(count)

            // Store the updated count in AsyncStorage
            await AsyncStorage.setItem('apiCallCount', count.toString())
            // Store the movie data in AsyncStorage
            await AsyncStorage.setItem(url, JSON.stringify(data))

            return data
      } catch (error) {
            console.error('Error:', error)
            throw error
      }
};

export default makeAPICall;