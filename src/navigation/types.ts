export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  PlaylistDetail: { playlist: { id: string; name: string } };
};

export type MainDrawerParamList = {
  Home: undefined;
  Settings: undefined;
  PlaylistDetail: undefined;
};
