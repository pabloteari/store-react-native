import React from 'react';

import {Text, View, Image} from 'react-native';

import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';

import s from './style';

// We can use react-native-i18n, which would default the labels to "left".
// We can improve with atomic design, I didn't apply it, but I like it a lot.
export default function ProductPanel(props: any) {
  const salesCountLabel = 'left';
  const image = props.image;

  return (
    <View style={[s.container, s.shadow]}>
      <View style={s.panelInfoProduct}>
        <Image resizeMode="cover" source={{uri: image}} style={s.image} />
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
      <View style={s.panelButtons}>
        <View style={s.buttonManageCount}>
          <Icon
            name="minus"
            size={30}
            color="red"
            onPress={props.onPressLess}
          />
        </View>
        <Text style={s.countLabel}>{props.count}</Text>
        <View style={s.buttonManageCount}>
          <Icon
            name="plus"
            size={30}
            color="green"
            onPress={props.onPressMore}
          />
        </View>
      </View>
    </View>
  );
}
