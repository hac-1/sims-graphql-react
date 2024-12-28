import { Item, ItemResolvers, Resolvers } from "../../generated/types";
const items: Item[] = [
    {
        id: "1",
        name: "item 1",
        rate: 100
    },
    {
        id: "2",
        name: "item 2",
        rate: 200
    }
]
const itemResolvers: Resolvers = {
    Query: {
        getItems: () => {
            return items;
        },
        getItem: (id: string) => {
            return items.find((item) => { return id === item.id });
        },
        // getItems: (name: string) => {
        //     return items.filter((item) => { return name === item.name });
        // }
    },
    Mutation:{
        createItem:(data:Item)=>{
            items.push(data);
            return data;
        }
    }
}

export default itemResolvers