import React from 'react';
import Geosuggest from 'react-geosuggest';

export default class Autocomplete extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const onSuggestSelect = (suggest) => {
      this.props.getDataOnSearch(suggest);
    }

    return (
      <div>
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Search for Locations here."
          initialValue="Hack Reactor"
          onSuggestSelect={onSuggestSelect}
          location={new google.maps.LatLng(37.777243, -122.40760899999998)}
          radius="20" />
      </div>
    )
  }  
}