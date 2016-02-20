import LocalizedStrings from 'react-native-localization'

const strings = new LocalizedStrings({
  en: {
    appName: 'Name',
    privacyPolicyUrl: 'Privacy Policy URL',

    home: 'home',

    originalView: 'Original',
    communityView: 'Community',
    dribbbleView: 'Dribbble',
    cnodejsView: 'CNodejs',

    updateDialogTitle: 'Update available',
    updateDialogDescriptionPrefix: ' Description: ',
    updateDialogMandatoryContinue: 'Continue',
    updateDialogMandatoryUpdateMessage: 'An update is available that must be installed.',
    updateDialogOptionalIgnore: 'Ignore',
    updateDialogOptionalInstall: 'Install',
    updateDialogOptionalUpdateMessage: 'An update is available. Would you like to install it?'
  },
  zh: {
    appName: '名称',
    privacyPolicyUrl: '隐私权政策 URL',

    home: '首页',

    originalView: '原生组件',
    communityView: '社区组件',
    dribbbleView: 'Dribble',
    cnodejsView: 'CNode',

    updateDialogTitle: '有更新',
    updateDialogDescriptionPrefix: ' 更新内容：',
    updateDialogMandatoryContinue: '继续',
    updateDialogMandatoryUpdateMessage: '必须更新才能继续使用',
    updateDialogOptionalIgnore: '忽略',
    updateDialogOptionalInstall: '安装',
    updateDialogOptionalUpdateMessage: '有新的版本，你想要安装吗？'
  }
})

export default strings
