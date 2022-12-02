import {NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Root = {
    Home: undefined;
    Inbox: undefined;
    Tips: undefined;
    WishList: undefined;
    Profile: undefined;
}




export type Root1 = {
    Home: NavigatorScreenParams<NestedRoot>;
    Details: undefined;
    Users:
    //     {
    //     id: number;
    //     name: string;
    //     age: number;
    // } |
        undefined;
}

export type NestedRoot = {
    Login: undefined
    Reg: undefined
    Forgot: undefined
}

export type UsersPropsType = NativeStackScreenProps<Root, 'Users'>;

// useAppNavigation hook helper
type UseNavigationType = NavigationProp<Root>

export const useAppNavigation = () => useNavigation<UseNavigationType>()


