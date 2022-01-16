import {Alert} from 'react-native';

export default function alertDialog(
  title: string,
  message: string,
  actionConfirm: any,
): any {
  return Alert.alert(title, message, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'Add', onPress: actionConfirm},
  ]);
}
