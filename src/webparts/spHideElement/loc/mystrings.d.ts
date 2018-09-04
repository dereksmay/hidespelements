declare interface ISpHideElementWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  hideQuickLaunchLabel: string;
  hideSiteLogoLabel: string,
  hideSiteTitle: string,
  hideSiteDescription: string,
  hideSiteMembers: string,
  hideTopNav: string,
  hideTitleRow: string,
  hideCommandBarItems: string,    
  hidePageTitle: string,
  hideSearchBox:string,
  hideShareButton:string
}

declare module 'SpHideElementWebPartStrings' {
  const strings: ISpHideElementWebPartStrings;
  export = strings;
}
