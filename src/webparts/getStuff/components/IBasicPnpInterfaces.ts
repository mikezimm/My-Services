
//Web
export interface IWeb {
    title: string;
    url: string;
    webs?:IWeb[]
    lists?: ILists[];
}

//List of Lists
export interface ILists {
    lists?: IList[];
}

//List Properties
export interface IList {
    Title: string;
    Id: string;
    items?: IListItem[];
}

//List Item Properties
export interface IListItem {
    Title: string;
    Id: string;
}

