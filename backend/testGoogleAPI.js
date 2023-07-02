async function getLatitudeLongitude(location) {
  const apiKey = 'AIzaSyADgeMwsM57y1kC1_C4BY9K92j2RK9gyY8';
  const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`;

  try {
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      const latitude = data.results[0].geometry.location.lat;
      const longitude = data.results[0].geometry.location.lng;

      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
      return { latitude, longitude };
    } else {
      console.error('No results found for the provided location.');
      return null;
    }
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    return null;
  }
}

// Usage example
const location = '1600 Amphitheatre Parkway, Mountain View, CA';
getLatitudeLongitude(location);