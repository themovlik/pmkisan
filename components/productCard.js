import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCard = ({
  item,
  index,
  isSaved,
  onPress,
  showCount,
  showPrice,
  showBrand,
  showTitle,
  showSaved,
  showDiscountBadge,
}) => {
  return (
    <View>
      <View>
        <TouchableOpacity style={styles.bandImages} onPress={onPress}>
          <Image source={item.item.img} style={styles.strapImages} />
        </TouchableOpacity>
        {showDiscountBadge && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{item.item.discount}</Text>
          </View>
        )}
        {item.item.isSaved && showSaved && (
          <TouchableOpacity style={styles.savedIcon} onPress={isSaved}>
            <Ionicons
              name="bookmark-sharp"
              color={COLORS.secondary}
              size={15}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bandTitleContainer}>
        {showBrand && <Text style={styles.bandTitle}>{item.item.brand}</Text>}
        {showTitle && <Text style={styles.bandTitle}>{item.item.title}</Text>}
        {showCount && <Text style={styles.bandCount}> ({item.item.qty})</Text>}
      </View>
      {showPrice && <Text style={styles.priceText}>{item.item.price}</Text>}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  bandImages: {
    marginRight: 15,
  },
  bandContainer: {
    marginVertical: SIZES.radius,
  },
  bandTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.margin,
  },
  strapImages: {
    height: 150,
    width: 150,
    borderRadius: SIZES.margin,
    resizeMode: 'cover',
  },
  bandTitle: {
    ...FONTS.body,
    color: COLORS.primary,
  },
  bandCount: {
    ...FONTS.body,
    color: COLORS.secondary,
  },
  discountBadge: {
    backgroundColor: COLORS.secondary,
    position: 'absolute',
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 25,
    borderTopRightRadius: SIZES.margin,
    borderBottomLeftRadius: SIZES.margin,
  },
  discountText: {
    ...FONTS.smallText,
    color: COLORS.white,
  },
  savedIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: 'absolute',
    right: 25,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    ...FONTS.smallTitle,
    color: COLORS.primary,
    marginTop: 5,
    marginBottom: SIZES.margin,
  },
});
