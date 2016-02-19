import CodePush from 'react-native-code-push'
import lang from '../constants/Localization'

import Loading from '../components/Loading'

export function checkUpdate () {
  const options = {
    updateDialog: {
      appendReleaseDescription: true,
      title: lang.updateDialogTitle,
      descriptionPrefix: lang.updateDialogDescriptionPrefix,
      mandatoryContinueButtonLabel: lang.updateDialogMandatoryContinue,
      mandatoryUpdateMessage: lang.updateDialogMandatoryUpdateMessage,
      optionalIgnoreButtonLabel: lang.updateDialogOptionalIgnore,
      optionalInstallButtonLabel: lang.updateDialogOptionalInstall,
      optionalUpdateMessage: lang.updateDialogOptionalUpdateMessage
    },
    installMode: CodePush.InstallMode.IMMEDIATE
  }

  CodePush.sync(options, status => {
    switch (status) {
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.refs.nav.push({
          component: Loading,
          title: ' ',
          navigationBarHidden: true,
          leftButtonTitle: '',
          onLeftButtonPress: () => {}
        })
        break
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        break
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        break
    }
  })
}
