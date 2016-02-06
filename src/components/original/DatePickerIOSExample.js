import React, {
  DatePickerIOS,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

export const title = '<DatePickerIOS>'
export const description = 'Select dates and times using the native UIDatePicker'
export const examples = [
  {
    title: '<DatePickerIOS>',
    render () {
      return <DatePickerIOSExample />
    }
  }
]

class DatePickerIOSExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: props.date,
      timeZoneOffsetInHours: props.timeZoneOffsetInHours
    }
  }

  onDateChange (date) {
    this.setState({date: date})
  }

  onTimezoneChange (e) {
    const offset = parseInt(e.nativeEvent.text, 10)
    if (isNaN(offset)) {
      return
    }
    this.setState({timeZoneOffsetInHours: offset})
  }

  render () {
    return (
      <View>
        <WithLabel label="Value:">
          <Text>{
            this.state.date.toLocaleDateString() +
            ' ' +
            this.state.date.toLocaleTimeString()
          }</Text>
        </WithLabel>

        <WithLabel label="Timezone:">
          <TextInput
            onChange={this.onTimezoneChange.bind(this)}
            style={styles.textinput}
            value={this.state.timeZoneOffsetInHours.toString()}
          />
          <Text> hours from UTC</Text>
        </WithLabel>

        <Heading label='mode="datetime"' />
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInHours={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange.bind(this)}
        />

        <Heading label='mode="date"' />
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange.bind(this)}
        />

        <Heading label='mode="time"' />
        <DatePickerIOS
          date={this.state.date}
          mode="time"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange.bind(this)}
          minuteInterval={10}
        />
      </View>
    )
  }
}

DatePickerIOSExample.defaultProps = {
  date: new Date(),
  timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
}

class WithLabel extends React.Component {
  render () {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.labelView}>
          <Text style={styles.label}>
            {this.props.label}
          </Text>
        </View>
        {this.props.children}
      </View>
    )
  }
}

class Heading extends React.Component {
  render () {
    return (
      <View style={styles.Heading}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 26,
    width: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  labelView: {
    marginRight: 10,
    paddingVertical: 2
  },
  label: {
    fontWeight: '500'
  },
  headingContainer: {
    padding: 4,
    backgroundColor: '#f6f7f8'
  },
  heading: {
    fontWeight: '500',
    fontSize: 14
  }








})
