import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'

class UIExplorerBlock extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  };

  constructor (props) {
    super(props)

    this.state = {
      description: null
    }
  }

  render () {
    let description
    if (this.props.description) {
      description = (
        <Text style={styles.descText}>
          {this.props.description}
        </Text>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
          {description}
        </View>
        <View style={styles.children}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 5,
    overflow: 'hidden'
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  titleText: {
    color: '#ea4c89',
    fontSize: 15,
    fontWeight: '500'
  },
  descText: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    color: '#444444'
  },
  children: {
    margin: 10
  }
})

export default UIExplorerBlock
