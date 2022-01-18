import {Alert} from 'react-native';

export default function alertDialog(
  title: string,
  message: string,
  actionConfirm: any,
  textAcceptButton: string,
): any {
  return Alert.alert(title, message, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: textAcceptButton, onPress: actionConfirm},
  ]);
}
