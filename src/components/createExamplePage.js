import React, {
  Platform
} from 'react-native'

import ReactNative from 'ReactNative'
import UIExplorerBlock from './UIExplorerBlock'
import UIExplorerPage from './UIExplorerPage'

export default function (title, exampleModule) {
  class ExamplePage extends React.Component {
    getBlock (example, i) {
      // 过滤平台特有的例子
      const {description, platform} = example
      let {title} = example
      if (platform) {
        if (Platform.OS !== platform) {
          return null
        }
        title += ' (' + platform + ' only)'
      }

      const originalRender = React.render
      const originalRenderComponent = React.renderComponent
      const originalIOSRender = ReactNative.render
      const originalIOSRenderComponent = ReactNative.renderComponent

      let renderedComponent
      React.render =
      React.renderComponent =
      ReactNative.render =
      ReactNative.renderComponent =
        function (element, container) {
          renderedComponent = element
        }

      const result = example.render(null)
      if (result) {
        renderedComponent = React.cloneElement(result)
      }

      React.render = originalRender
      React.renderComponent = originalRenderComponent
      ReactNative.render = originalIOSRender
      ReactNative.renderComponent = originalIOSRenderComponent

      return (
        <UIExplorerBlock
          key={i}
          title={title}
          description={description}>
          {renderedComponent}
        </UIExplorerBlock>
      )
    }

    render () {
      return (
        <UIExplorerPage title={title}>
          {exampleModule.examples.map(this.getBlock)}
        </UIExplorerPage>
      )
    }
  }

  return ExamplePage
}
