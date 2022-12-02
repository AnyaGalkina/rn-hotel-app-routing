import {NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';

export type Root = {
    Home: undefined;
    Inbox: NavigatorScreenParams<NestedRootInbox>;
    Tips: NavigatorScreenParams<NestedRootTips>;
    WishList: NavigatorScreenParams<NestedRootWishList>;
    Profile: NavigatorScreenParams<NestedRootProfile>;
}

export type NestedRootTips = {
    GetHelp: undefined
}


export type NestedRootInbox = {
    Messages: undefined
    Notifications: undefined
    Unread: undefined
    Read: undefined
}

export type NestedRootProfile = {
    PersonalInfo: undefined
    Privacy: undefined
    Payments: undefined
    Hosting: undefined
    Support: undefined
    LogOut: undefined
}

export type NestedRootWishList = {
    MainWishList: undefined
    Argentina: undefined
    USA: undefined
    Thai: undefined
    Australia: undefined
    NewZealand: undefined
    Greece: undefined
}

// useAppNavigation hook helper
type UseNavigationType = NavigationProp<Root>

export const useAppNavigation = () => useNavigation<UseNavigationType>()


