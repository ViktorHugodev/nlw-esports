export interface IGameParams {
  id: string
  bannerUrl: string
  title: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      game: IGameParams
    }
  }
}