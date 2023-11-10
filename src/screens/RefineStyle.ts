import {StyleSheet} from 'react-native';
import {Colors, Typography, minxmins} from '../styles';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    columnGap: 30,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  backicon: {
    color: Colors.WHITE,
  },
  headertext: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_MEDIUM,
  },
  scrollstyle: {
    paddingLeft: 20,
  },
  secondheadertext: {
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.PRIMARY,
    fontWeight: Typography.FONT_WEIGHT_MEDIUM,
  },
  insidedropdown: {
    marginTop: 20,
  },
  dropicon: {
    color: Colors.PRIMARY,
  },
  textinputcontainer: {
    height: 85,
    width: minxmins.WINDOW_WIDTH / 1.15,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
  },
  textinput: {
    marginLeft: 10,
    padding: 2,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.PRIMARY,
    fontWeight: Typography.FONT_WEIGHT_MEDIUM,
  },
  wordcount: {
    marginLeft: 305,
  },
  slidercontainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  slider: {
    width: '80%',
    height: 50,
  },
  tooltipContainer: {
    position: 'absolute',
    top: -40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  tooltipText: {
    fontSize: 18,
    color: '#007BFF',
  },
  kilocontainer: {
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between',
    marginTop: -20,
  },
  bottomtext: {
    color: Colors.PRIMARY,
    fontSize: Typography.FONT_SIZE_16,
  },
  purposecontainer: {
    marginVertical: 10,
  },
  purposeItem: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 17,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  purposeitems: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 5,
  },
  buttoncontainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttontext: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_18,
  },
});

export default styles;
