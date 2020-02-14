import React from 'react';
import MomentTimezone from 'moment-timezone';

const timezoneControl = (props) => {
  // TODO: Not the best way to get all timezones
  let timezones = MomentTimezone.tz.names();
  
  timezones = timezones.map(function(timezone){
    return <option value={timezone}>{timezone}</option>
  });

  return (
    <select id="timezone-control" onChange={props.onTimezoneChanged}>
      {timezones}
    </select>
  );
}

export default timezoneControl;
