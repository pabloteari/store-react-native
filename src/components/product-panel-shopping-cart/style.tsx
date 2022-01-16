import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 10,
  },
  panelInfoProduct: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
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
    fontSize: 15,
  },
  panelLabel: {flex: 3, alignItems: 'center', justifyContent: 'center'},
  countLabel: {
    flexDirection: 'row',
    fontSize: 25,
    margin: 5,
    marginHorizontal: 20,
  },
  panelPriceStock: {flex: 1, alignItems: 'center', marginRight: 10},
  panelButtons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonManageCount: {flex: 1, alignItems: 'center'},
});
