import {StyleSheet} from "react-native";

export default StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F4FAFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        width: '50%'
      },
      title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      },
      button: {
        padding: 10,
        margin: 10,
        color: '#F4FAFF',
        fontSize: 20,
        fontWeight: 'bold',
      },
      customCard: {
        backgroundColor: '#8789C0',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '80%',
        alignItems: 'center',
      },
      inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',

      },
      inputQR:{
          borderColor: '#8789C0',
          borderWidth: 1,
          borderBottomWidth:3,
          borderRadius: 5,
          margin:10,
          padding: 5,
          width: '50%',
          height: '70%',
            textAlign: 'center',
          alignItems: 'center',

      },
  });


// $sea-green-crayola: #5dfdcbff;
// $maya-blue: #7cc6feff;
// $alice-blue: #f4faffff;
// $cool-grey: #8789c0ff;
// $rich-black-fogra-39: #08090aff;