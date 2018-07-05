import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
  modalHeader: {
    borderBottomColor: '#9E9E9E',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    alignItems: 'center',
  },

  emptyView: {
    flex: 1,
  },

  modalTitle: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: '300',
    color: colors.black,
    fontSize: 18,
  },

  wrapperIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },

  closeIcon: {
    width: 25,
  },
});
