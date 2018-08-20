import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  imageBackground: {
    flex: 7,
  },
  recommendContainer: {
    flex: 3,
    margin: 10,
    marginBottom: 0,
  },
  locationContainer: {
    margin:20,
    marginTop: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems:'center'
  },
  picker: {
    width: 100,
    backgroundColor:colors.white,
  },
  icon: {
    marginLeft: -30
  },
  locationIcon: {
    alignSelf: 'center',
    width:40,
    height: 40,
    position:'absolute'
  },
  iconContainer: {
    backgroundColor:'transparent',
    height: 40
  },
  halfIconContainer1: {
    height: 20, backgroundColor: 'transparent'
  },
  halfIconContainer2: {
    height: 20, backgroundColor: '#ffffff' 
  },
  textRecommend: {
    fontSize: 17,
    marginLeft: 20,
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor:'#FBBE00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    marginTop: 15,
    marginBottom: 15
  },
  list: {
    marginTop: 20
  }
});
