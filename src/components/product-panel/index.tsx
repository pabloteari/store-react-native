import React from 'react';

import {Text, View, Image} from 'react-native';
import {Product} from '../../interfaces/products';
import moment from 'moment';

import s from './style';

// We can use react-native-i18n, which would default the labels to "left".
// We can improve with atomic design, I didn't apply it, but I like it a lot.
export default function ProductPanel(props: Product) {
  const image = props.image;
  const salesCountLabel = 'left';

  return (
    <View style={s.container}>
      <Image resizeMode="cover" source={{uri: image}} style={s.image} />
      <View style={s.panelInfoProduct}>
        <View style={s.panelLabel}>
          <Text style={s.label}>{props.name}</Text>
          <Text style={s.createDateLabel}>
            {moment(props.createdAt).startOf('hour').fromNow()}
          </Text>
        </View>
        <View style={s.panelPriceStock}>
          <Text style={s.price}>{props.price}</Text>
          <Text style={s.stock}>
            {salesCountLabel} {props.stock}
          </Text>
        </View>
      </View>
    </View>
  );
}
