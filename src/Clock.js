import React, {Component} from 'react';
import moment from 'moment';
import MomentTimezone from 'moment-timezone';
import Display from './Display';
import TimezoneControl from './TimezoneControl';

class Clock extends Component {

  constructor(props) {
    super(props);
    const timezone = MomentTimezone.tz.guess();
    this.state = {time: moment().tz(timezone).format('hh:mm:ss A'), timezone: timezone};
    // This binding is necessary to make `this` work in the callback
    this.onTimezoneChanged = this.onTimezoneChanged.bind(this);
  }

  onTimezoneChanged(event) {
    event.preventDefault();
    this.setState({timezone: event.target.value});
  }

  tick() {
    this.setState({
      time: moment().tz(this.state.timezone).format('hh:mm:ss A')
    });
  }

  render() {
    return (
      <div id="clock">
        <Display time={this.state.time} />
        <TimezoneControl onTimezoneChanged={this.onTimezoneChanged} />
      </div>
    );
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

}

export default Clock;
