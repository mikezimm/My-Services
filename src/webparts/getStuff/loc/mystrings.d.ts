declare interface IGetStuffWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'GetStuffWebPartStrings' {
  const strings: IGetStuffWebPartStrings;
  export = strings;
}
