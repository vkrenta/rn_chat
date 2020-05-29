import { Toast } from 'native-base';

export default function showToast({
  text,
  type,
}: {
  text: string;
  type?: 'success' | 'danger' | 'warning';
}) {
  Toast.show({
    text,
    buttonText: 'OK',
    type,
    textStyle: { fontFamily: 'Manrope-Regular' },
    buttonTextStyle: { fontFamily: 'Manrope-Bold' },
    buttonStyle: { backgroundColor: '#3a86ff', height: 40 },
    duration: 3000,
  });
}
