/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiamFja2hhbnNlbiIsImEiOiJjbHU4Nmg1em4wY2V1MmtuMGxjZmFyNjJmIn0.NUeH60Lwfq5j0Vske_653g';

  var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/jackhansen/clu96krnz006v01r56v025ig5', // style URL
    scrollZoom: false,
    // center: [-118.833382, 34.10309], // starting position [lng, lat]
    // zoom: 10, // starting zoom
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
