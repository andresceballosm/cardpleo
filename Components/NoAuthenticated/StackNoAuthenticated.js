import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

const StackNoAuthenticated = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    }
  },
  {
    headerMode: 'none',
  },
);

export { StackNoAuthenticated };