import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { InputText } from 'primereact/inputtext';

const SearchInput = props => {
  const [address, setAddress] = useState('');

  const handleChange = place => {
    setAddress(place);
  };

  const handleSelect = place => {
    geocodeByAddress(place)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('latlng', latLng);
      })
      .catch(error => console.error('Error', error));
    setAddress(place);
  };

  const searchOptions = {
    location: new window.google.maps.LatLng(39.952583, -75.165222),
    radius: 2000,
    types: ['address']
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <InputText
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input'
            })}
          />
          <div className='autocomplete-dropdown-container'>
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default SearchInput;
