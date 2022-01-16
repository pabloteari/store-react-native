import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 5,
  },
  image: {
    width: width,
    height: width,
  },
  panelInfoProduct: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
  },
  stock: {
    flexDirection: 'row',
    fontSize: 10,
  },
  createDateLabel: {
    flexDirection: 'row',
    fontSize: 10,
  },
  price: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 20,
  },
  label: {
    flexDirection: 'row',
    fontSize: 20,
  },
  panelLabel: {flex: 3, alignItems: 'center', justifyContent: 'center'},
  panelPriceStock: {flex: 1, alignItems: 'center'},
});
