import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const HEIGHT_WINDOW = height;
export const HEIGHT_HEADER = 80;
export const WIDTH_WINDOW = width;
export const ORIGIN_TOP_ICON = -20;
export const ORIGIN_HEIGHT_TEXT = 45;
export const ORIGIN_HEIGHT_FORM = ORIGIN_HEIGHT_TEXT * 3 + 10;
export const TRANSFORM_PADDING_FORM = HEIGHT_HEADER + 20;
export const DELAY_TOP_ICON = 20;
export const DELAY_ANMATION_FIRST = 30;
export const TIME_DEFAULT = 300;
export const WIDTH_BORDER_SELECT = 1;
