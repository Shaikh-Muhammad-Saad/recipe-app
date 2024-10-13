export declare type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    Date: Date
}

export type Recipe = {
    id: Scalars['Int'];
    name: Scalars['String'];
    instructions: Array<Scalars['String']>;
    cuisine: Scalars['String'];
    image: Scalars['String'];
    rating: Scalars['Float'];
    mealType: Array<Scalars['String']>;
}

