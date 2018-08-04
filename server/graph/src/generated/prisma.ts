import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profiles: <T = Profile[]>(args: { where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tokens: <T = Token[]>(args: { where?: TokenWhereInput, orderBy?: TokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    token: <T = Token | null>(args: { where: TokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profilesConnection: <T = ProfileConnection>(args: { where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tokensConnection: <T = TokenConnection>(args: { where?: TokenWhereInput, orderBy?: TokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProfile: <T = Profile>(args: { data: ProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createToken: <T = Token>(args: { data: TokenCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProfile: <T = Profile | null>(args: { data: ProfileUpdateInput, where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateToken: <T = Token | null>(args: { data: TokenUpdateInput, where: TokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProfile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteToken: <T = Token | null>(args: { where: TokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProfile: <T = Profile>(args: { where: ProfileWhereUniqueInput, create: ProfileCreateInput, update: ProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertToken: <T = Token>(args: { where: TokenWhereUniqueInput, create: TokenCreateInput, update: TokenUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProfiles: <T = BatchPayload>(args: { data: ProfileUpdateInput, where?: ProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTokens: <T = BatchPayload>(args: { data: TokenUpdateInput, where?: TokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProfiles: <T = BatchPayload>(args: { where?: ProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTokens: <T = BatchPayload>(args: { where?: TokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    profile: <T = ProfileSubscriptionPayload | null>(args: { where?: ProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    token: <T = TokenSubscriptionPayload | null>(args: { where?: TokenSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  Profile: (where?: ProfileWhereInput) => Promise<boolean>
  Token: (where?: TokenWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregatePost {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateToken {
  count: Int!
}

type AggregateUser {
  count: Int!
}

enum AuthProvider {
  LOCAL
  FACEBOOK
  GOOGLE
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createProfile(data: ProfileCreateInput!): Profile!
  createToken(data: TokenCreateInput!): Token!
  createUser(data: UserCreateInput!): User!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateToken(data: TokenUpdateInput!, where: TokenWhereUniqueInput!): Token
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deletePost(where: PostWhereUniqueInput!): Post
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteToken(where: TokenWhereUniqueInput!): Token
  deleteUser(where: UserWhereUniqueInput!): User
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  upsertToken(where: TokenWhereUniqueInput!, create: TokenCreateInput!, update: TokenUpdateInput!): Token!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyProfiles(data: ProfileUpdateInput!, where: ProfileWhereInput): BatchPayload!
  updateManyTokens(data: TokenUpdateInput!, where: TokenWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  deleteManyTokens(where: TokenWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Profile implements Node {
  id: ID!
  name: String
  gender: String
  location: String
  picture: String
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type ProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  name: String
  gender: String
  location: String
  picture: String
  user: UserCreateOneWithoutProfileInput!
}

input ProfileCreateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutUserInput {
  name: String
  gender: String
  location: String
  picture: String
}

"""An edge in a connection."""
type ProfileEdge {
  """The item at the end of the edge."""
  node: Profile!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  gender_ASC
  gender_DESC
  location_ASC
  location_DESC
  picture_ASC
  picture_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  name: String
  gender: String
  location: String
  picture: String
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
}

input ProfileUpdateInput {
  name: String
  gender: String
  location: String
  picture: String
  user: UserUpdateOneWithoutProfileInput
}

input ProfileUpdateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  connect: ProfileWhereUniqueInput
  delete: Boolean
  update: ProfileUpdateWithoutUserDataInput
  upsert: ProfileUpsertWithoutUserInput
}

input ProfileUpdateWithoutUserDataInput {
  name: String
  gender: String
  location: String
  picture: String
}

input ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput!
  create: ProfileCreateWithoutUserInput!
}

input ProfileWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  gender: String

  """All values that are not equal to given value."""
  gender_not: String

  """All values that are contained in given list."""
  gender_in: [String!]

  """All values that are not contained in given list."""
  gender_not_in: [String!]

  """All values less than the given value."""
  gender_lt: String

  """All values less than or equal the given value."""
  gender_lte: String

  """All values greater than the given value."""
  gender_gt: String

  """All values greater than or equal the given value."""
  gender_gte: String

  """All values containing the given string."""
  gender_contains: String

  """All values not containing the given string."""
  gender_not_contains: String

  """All values starting with the given string."""
  gender_starts_with: String

  """All values not starting with the given string."""
  gender_not_starts_with: String

  """All values ending with the given string."""
  gender_ends_with: String

  """All values not ending with the given string."""
  gender_not_ends_with: String
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  picture: String

  """All values that are not equal to given value."""
  picture_not: String

  """All values that are contained in given list."""
  picture_in: [String!]

  """All values that are not contained in given list."""
  picture_not_in: [String!]

  """All values less than the given value."""
  picture_lt: String

  """All values less than or equal the given value."""
  picture_lte: String

  """All values greater than the given value."""
  picture_gt: String

  """All values greater than or equal the given value."""
  picture_gte: String

  """All values containing the given string."""
  picture_contains: String

  """All values not containing the given string."""
  picture_not_contains: String

  """All values starting with the given string."""
  picture_starts_with: String

  """All values not starting with the given string."""
  picture_not_starts_with: String

  """All values ending with the given string."""
  picture_ends_with: String

  """All values not ending with the given string."""
  picture_not_ends_with: String
  user: UserWhereInput
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  tokens(where: TokenWhereInput, orderBy: TokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Token]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  post(where: PostWhereUniqueInput!): Post
  profile(where: ProfileWhereUniqueInput!): Profile
  token(where: TokenWhereUniqueInput!): Token
  user(where: UserWhereUniqueInput!): User
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  tokensConnection(where: TokenWhereInput, orderBy: TokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TokenConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  token(where: TokenSubscriptionWhereInput): TokenSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Token implements Node {
  id: ID!
  kind: AuthProvider!
  accessToken: String!
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type TokenConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TokenEdge]!
  aggregate: AggregateToken!
}

input TokenCreateInput {
  kind: AuthProvider!
  accessToken: String!
  user: UserCreateOneWithoutTokensInput!
}

input TokenCreateManyWithoutUserInput {
  create: [TokenCreateWithoutUserInput!]
  connect: [TokenWhereUniqueInput!]
}

input TokenCreateWithoutUserInput {
  kind: AuthProvider!
  accessToken: String!
}

"""An edge in a connection."""
type TokenEdge {
  """The item at the end of the edge."""
  node: Token!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TokenOrderByInput {
  id_ASC
  id_DESC
  kind_ASC
  kind_DESC
  accessToken_ASC
  accessToken_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TokenPreviousValues {
  id: ID!
  kind: AuthProvider!
  accessToken: String!
}

type TokenSubscriptionPayload {
  mutation: MutationType!
  node: Token
  updatedFields: [String!]
  previousValues: TokenPreviousValues
}

input TokenSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TokenSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TokenSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TokenSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TokenWhereInput
}

input TokenUpdateInput {
  kind: AuthProvider
  accessToken: String
  user: UserUpdateOneWithoutTokensInput
}

input TokenUpdateManyWithoutUserInput {
  create: [TokenCreateWithoutUserInput!]
  connect: [TokenWhereUniqueInput!]
  disconnect: [TokenWhereUniqueInput!]
  delete: [TokenWhereUniqueInput!]
  update: [TokenUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TokenUpsertWithWhereUniqueWithoutUserInput!]
}

input TokenUpdateWithoutUserDataInput {
  kind: AuthProvider
  accessToken: String
}

input TokenUpdateWithWhereUniqueWithoutUserInput {
  where: TokenWhereUniqueInput!
  data: TokenUpdateWithoutUserDataInput!
}

input TokenUpsertWithWhereUniqueWithoutUserInput {
  where: TokenWhereUniqueInput!
  update: TokenUpdateWithoutUserDataInput!
  create: TokenCreateWithoutUserInput!
}

input TokenWhereInput {
  """Logical AND on all given filters."""
  AND: [TokenWhereInput!]

  """Logical OR on all given filters."""
  OR: [TokenWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TokenWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  kind: AuthProvider

  """All values that are not equal to given value."""
  kind_not: AuthProvider

  """All values that are contained in given list."""
  kind_in: [AuthProvider!]

  """All values that are not contained in given list."""
  kind_not_in: [AuthProvider!]
  accessToken: String

  """All values that are not equal to given value."""
  accessToken_not: String

  """All values that are contained in given list."""
  accessToken_in: [String!]

  """All values that are not contained in given list."""
  accessToken_not_in: [String!]

  """All values less than the given value."""
  accessToken_lt: String

  """All values less than or equal the given value."""
  accessToken_lte: String

  """All values greater than the given value."""
  accessToken_gt: String

  """All values greater than or equal the given value."""
  accessToken_gte: String

  """All values containing the given string."""
  accessToken_contains: String

  """All values not containing the given string."""
  accessToken_not_contains: String

  """All values starting with the given string."""
  accessToken_starts_with: String

  """All values not starting with the given string."""
  accessToken_not_starts_with: String

  """All values ending with the given string."""
  accessToken_ends_with: String

  """All values not ending with the given string."""
  accessToken_not_ends_with: String
  user: UserWhereInput
}

input TokenWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  tokens(where: TokenWhereInput, orderBy: TokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Token!]
  profile(where: ProfileWhereInput): Profile!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  tokens: TokenCreateManyWithoutUserInput
  profile: ProfileCreateOneWithoutUserInput!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTokensInput {
  create: UserCreateWithoutTokensInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  tokens: TokenCreateManyWithoutUserInput
  profile: ProfileCreateOneWithoutUserInput!
}

input UserCreateWithoutProfileInput {
  email: String!
  password: String!
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  tokens: TokenCreateManyWithoutUserInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutTokensInput {
  email: String!
  password: String!
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  profile: ProfileCreateOneWithoutUserInput!
  posts: PostCreateManyWithoutAuthorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  passwordResetToken_ASC
  passwordResetToken_DESC
  passwordResetExpires_ASC
  passwordResetExpires_DESC
  facebook_ASC
  facebook_DESC
  google_ASC
  google_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  tokens: TokenUpdateManyWithoutUserInput
  profile: ProfileUpdateOneWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateOneWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutProfileDataInput
  upsert: UserUpsertWithoutProfileInput
}

input UserUpdateOneWithoutTokensInput {
  create: UserCreateWithoutTokensInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTokensDataInput
  upsert: UserUpsertWithoutTokensInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  tokens: TokenUpdateManyWithoutUserInput
  profile: ProfileUpdateOneWithoutUserInput
}

input UserUpdateWithoutProfileDataInput {
  email: String
  password: String
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  tokens: TokenUpdateManyWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutTokensDataInput {
  email: String
  password: String
  passwordResetToken: String
  passwordResetExpires: DateTime
  facebook: String
  google: String
  profile: ProfileUpdateOneWithoutUserInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput!
  create: UserCreateWithoutProfileInput!
}

input UserUpsertWithoutTokensInput {
  update: UserUpdateWithoutTokensDataInput!
  create: UserCreateWithoutTokensInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  passwordResetToken: String

  """All values that are not equal to given value."""
  passwordResetToken_not: String

  """All values that are contained in given list."""
  passwordResetToken_in: [String!]

  """All values that are not contained in given list."""
  passwordResetToken_not_in: [String!]

  """All values less than the given value."""
  passwordResetToken_lt: String

  """All values less than or equal the given value."""
  passwordResetToken_lte: String

  """All values greater than the given value."""
  passwordResetToken_gt: String

  """All values greater than or equal the given value."""
  passwordResetToken_gte: String

  """All values containing the given string."""
  passwordResetToken_contains: String

  """All values not containing the given string."""
  passwordResetToken_not_contains: String

  """All values starting with the given string."""
  passwordResetToken_starts_with: String

  """All values not starting with the given string."""
  passwordResetToken_not_starts_with: String

  """All values ending with the given string."""
  passwordResetToken_ends_with: String

  """All values not ending with the given string."""
  passwordResetToken_not_ends_with: String
  passwordResetExpires: DateTime

  """All values that are not equal to given value."""
  passwordResetExpires_not: DateTime

  """All values that are contained in given list."""
  passwordResetExpires_in: [DateTime!]

  """All values that are not contained in given list."""
  passwordResetExpires_not_in: [DateTime!]

  """All values less than the given value."""
  passwordResetExpires_lt: DateTime

  """All values less than or equal the given value."""
  passwordResetExpires_lte: DateTime

  """All values greater than the given value."""
  passwordResetExpires_gt: DateTime

  """All values greater than or equal the given value."""
  passwordResetExpires_gte: DateTime
  facebook: String

  """All values that are not equal to given value."""
  facebook_not: String

  """All values that are contained in given list."""
  facebook_in: [String!]

  """All values that are not contained in given list."""
  facebook_not_in: [String!]

  """All values less than the given value."""
  facebook_lt: String

  """All values less than or equal the given value."""
  facebook_lte: String

  """All values greater than the given value."""
  facebook_gt: String

  """All values greater than or equal the given value."""
  facebook_gte: String

  """All values containing the given string."""
  facebook_contains: String

  """All values not containing the given string."""
  facebook_not_contains: String

  """All values starting with the given string."""
  facebook_starts_with: String

  """All values not starting with the given string."""
  facebook_not_starts_with: String

  """All values ending with the given string."""
  facebook_ends_with: String

  """All values not ending with the given string."""
  facebook_not_ends_with: String
  google: String

  """All values that are not equal to given value."""
  google_not: String

  """All values that are contained in given list."""
  google_in: [String!]

  """All values that are not contained in given list."""
  google_not_in: [String!]

  """All values less than the given value."""
  google_lt: String

  """All values less than or equal the given value."""
  google_lte: String

  """All values greater than the given value."""
  google_gt: String

  """All values greater than or equal the given value."""
  google_gte: String

  """All values containing the given string."""
  google_contains: String

  """All values not containing the given string."""
  google_not_contains: String

  """All values starting with the given string."""
  google_starts_with: String

  """All values not starting with the given string."""
  google_not_starts_with: String

  """All values ending with the given string."""
  google_ends_with: String

  """All values not ending with the given string."""
  google_not_ends_with: String
  tokens_every: TokenWhereInput
  tokens_some: TokenWhereInput
  tokens_none: TokenWhereInput
  profile: ProfileWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  facebook: String
  google: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AuthProvider =   'LOCAL' |
  'FACEBOOK' |
  'GOOGLE'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type TokenOrderByInput =   'id_ASC' |
  'id_DESC' |
  'kind_ASC' |
  'kind_DESC' |
  'accessToken_ASC' |
  'accessToken_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProfileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'gender_ASC' |
  'gender_DESC' |
  'location_ASC' |
  'location_DESC' |
  'picture_ASC' |
  'picture_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'passwordResetToken_ASC' |
  'passwordResetToken_DESC' |
  'passwordResetExpires_ASC' |
  'passwordResetExpires_DESC' |
  'facebook_ASC' |
  'facebook_DESC' |
  'google_ASC' |
  'google_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateWithoutProfileInput {
  email: String
  password: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  tokens?: TokenCreateManyWithoutUserInput
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface UserCreateOneWithoutTokensInput {
  create?: UserCreateWithoutTokensInput
  connect?: UserWhereUniqueInput
}

export interface ProfileWhereInput {
  AND?: ProfileWhereInput[] | ProfileWhereInput
  OR?: ProfileWhereInput[] | ProfileWhereInput
  NOT?: ProfileWhereInput[] | ProfileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  gender?: String
  gender_not?: String
  gender_in?: String[] | String
  gender_not_in?: String[] | String
  gender_lt?: String
  gender_lte?: String
  gender_gt?: String
  gender_gte?: String
  gender_contains?: String
  gender_not_contains?: String
  gender_starts_with?: String
  gender_not_starts_with?: String
  gender_ends_with?: String
  gender_not_ends_with?: String
  location?: String
  location_not?: String
  location_in?: String[] | String
  location_not_in?: String[] | String
  location_lt?: String
  location_lte?: String
  location_gt?: String
  location_gte?: String
  location_contains?: String
  location_not_contains?: String
  location_starts_with?: String
  location_not_starts_with?: String
  location_ends_with?: String
  location_not_ends_with?: String
  picture?: String
  picture_not?: String
  picture_in?: String[] | String
  picture_not_in?: String[] | String
  picture_lt?: String
  picture_lte?: String
  picture_gt?: String
  picture_gte?: String
  picture_contains?: String
  picture_not_contains?: String
  picture_starts_with?: String
  picture_not_starts_with?: String
  picture_ends_with?: String
  picture_not_ends_with?: String
  user?: UserWhereInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface ProfileUpdateOneWithoutUserInput {
  create?: ProfileCreateWithoutUserInput
  connect?: ProfileWhereUniqueInput
  delete?: Boolean
  update?: ProfileUpdateWithoutUserDataInput
  upsert?: ProfileUpsertWithoutUserInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface UserCreateWithoutTokensInput {
  email: String
  password: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  profile: ProfileCreateOneWithoutUserInput
  posts?: PostCreateManyWithoutAuthorInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  tokens?: TokenCreateManyWithoutUserInput
  profile: ProfileCreateOneWithoutUserInput
}

export interface TokenSubscriptionWhereInput {
  AND?: TokenSubscriptionWhereInput[] | TokenSubscriptionWhereInput
  OR?: TokenSubscriptionWhereInput[] | TokenSubscriptionWhereInput
  NOT?: TokenSubscriptionWhereInput[] | TokenSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TokenWhereInput
}

export interface TokenCreateManyWithoutUserInput {
  create?: TokenCreateWithoutUserInput[] | TokenCreateWithoutUserInput
  connect?: TokenWhereUniqueInput[] | TokenWhereUniqueInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface TokenCreateWithoutUserInput {
  kind: AuthProvider
  accessToken: String
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface ProfileCreateOneWithoutUserInput {
  create?: ProfileCreateWithoutUserInput
  connect?: ProfileWhereUniqueInput
}

export interface TokenWhereUniqueInput {
  id?: ID_Input
}

export interface ProfileCreateWithoutUserInput {
  name?: String
  gender?: String
  location?: String
  picture?: String
}

export interface UserUpsertWithoutTokensInput {
  update: UserUpdateWithoutTokensDataInput
  create: UserCreateWithoutTokensInput
}

export interface ProfileCreateInput {
  name?: String
  gender?: String
  location?: String
  picture?: String
  user: UserCreateOneWithoutProfileInput
}

export interface UserUpdateOneWithoutTokensInput {
  create?: UserCreateWithoutTokensInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutTokensDataInput
  upsert?: UserUpsertWithoutTokensInput
}

export interface UserCreateOneWithoutProfileInput {
  create?: UserCreateWithoutProfileInput
  connect?: UserWhereUniqueInput
}

export interface UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput
  create: UserCreateWithoutProfileInput
}

export interface ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput
  create: ProfileCreateWithoutUserInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface UserUpdateOneWithoutProfileInput {
  create?: UserCreateWithoutProfileInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutProfileDataInput
  upsert?: UserUpsertWithoutProfileInput
}

export interface TokenCreateInput {
  kind: AuthProvider
  accessToken: String
  user: UserCreateOneWithoutTokensInput
}

export interface ProfileSubscriptionWhereInput {
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProfileWhereInput
}

export interface TokenWhereInput {
  AND?: TokenWhereInput[] | TokenWhereInput
  OR?: TokenWhereInput[] | TokenWhereInput
  NOT?: TokenWhereInput[] | TokenWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  kind?: AuthProvider
  kind_not?: AuthProvider
  kind_in?: AuthProvider[] | AuthProvider
  kind_not_in?: AuthProvider[] | AuthProvider
  accessToken?: String
  accessToken_not?: String
  accessToken_in?: String[] | String
  accessToken_not_in?: String[] | String
  accessToken_lt?: String
  accessToken_lte?: String
  accessToken_gt?: String
  accessToken_gte?: String
  accessToken_contains?: String
  accessToken_not_contains?: String
  accessToken_starts_with?: String
  accessToken_not_starts_with?: String
  accessToken_ends_with?: String
  accessToken_not_ends_with?: String
  user?: UserWhereInput
}

export interface ProfileWhereUniqueInput {
  id?: ID_Input
}

export interface ProfileUpdateWithoutUserDataInput {
  name?: String
  gender?: String
  location?: String
  picture?: String
}

export interface UserUpdateWithoutTokensDataInput {
  email?: String
  password?: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  profile?: ProfileUpdateOneWithoutUserInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface UserCreateInput {
  email: String
  password: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  tokens?: TokenCreateManyWithoutUserInput
  profile: ProfileCreateOneWithoutUserInput
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneWithoutPostsInput
}

export interface UserUpdateWithoutProfileDataInput {
  email?: String
  password?: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  tokens?: TokenUpdateManyWithoutUserInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  passwordResetToken?: String
  passwordResetToken_not?: String
  passwordResetToken_in?: String[] | String
  passwordResetToken_not_in?: String[] | String
  passwordResetToken_lt?: String
  passwordResetToken_lte?: String
  passwordResetToken_gt?: String
  passwordResetToken_gte?: String
  passwordResetToken_contains?: String
  passwordResetToken_not_contains?: String
  passwordResetToken_starts_with?: String
  passwordResetToken_not_starts_with?: String
  passwordResetToken_ends_with?: String
  passwordResetToken_not_ends_with?: String
  passwordResetExpires?: DateTime
  passwordResetExpires_not?: DateTime
  passwordResetExpires_in?: DateTime[] | DateTime
  passwordResetExpires_not_in?: DateTime[] | DateTime
  passwordResetExpires_lt?: DateTime
  passwordResetExpires_lte?: DateTime
  passwordResetExpires_gt?: DateTime
  passwordResetExpires_gte?: DateTime
  facebook?: String
  facebook_not?: String
  facebook_in?: String[] | String
  facebook_not_in?: String[] | String
  facebook_lt?: String
  facebook_lte?: String
  facebook_gt?: String
  facebook_gte?: String
  facebook_contains?: String
  facebook_not_contains?: String
  facebook_starts_with?: String
  facebook_not_starts_with?: String
  facebook_ends_with?: String
  facebook_not_ends_with?: String
  google?: String
  google_not?: String
  google_in?: String[] | String
  google_not_in?: String[] | String
  google_lt?: String
  google_lte?: String
  google_gt?: String
  google_gte?: String
  google_contains?: String
  google_not_contains?: String
  google_starts_with?: String
  google_not_starts_with?: String
  google_ends_with?: String
  google_not_ends_with?: String
  tokens_every?: TokenWhereInput
  tokens_some?: TokenWhereInput
  tokens_none?: TokenWhereInput
  profile?: ProfileWhereInput
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  tokens?: TokenUpdateManyWithoutUserInput
  profile?: ProfileUpdateOneWithoutUserInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  facebook?: String
  google?: String
}

export interface TokenUpsertWithWhereUniqueWithoutUserInput {
  where: TokenWhereUniqueInput
  update: TokenUpdateWithoutUserDataInput
  create: TokenCreateWithoutUserInput
}

export interface TokenUpdateWithoutUserDataInput {
  kind?: AuthProvider
  accessToken?: String
}

export interface TokenUpdateWithWhereUniqueWithoutUserInput {
  where: TokenWhereUniqueInput
  data: TokenUpdateWithoutUserDataInput
}

export interface TokenUpdateManyWithoutUserInput {
  create?: TokenCreateWithoutUserInput[] | TokenCreateWithoutUserInput
  connect?: TokenWhereUniqueInput[] | TokenWhereUniqueInput
  disconnect?: TokenWhereUniqueInput[] | TokenWhereUniqueInput
  delete?: TokenWhereUniqueInput[] | TokenWhereUniqueInput
  update?: TokenUpdateWithWhereUniqueWithoutUserInput[] | TokenUpdateWithWhereUniqueWithoutUserInput
  upsert?: TokenUpsertWithWhereUniqueWithoutUserInput[] | TokenUpsertWithWhereUniqueWithoutUserInput
}

export interface TokenUpdateInput {
  kind?: AuthProvider
  accessToken?: String
  user?: UserUpdateOneWithoutTokensInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  tokens?: TokenUpdateManyWithoutUserInput
  profile?: ProfileUpdateOneWithoutUserInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface ProfileUpdateInput {
  name?: String
  gender?: String
  location?: String
  picture?: String
  user?: UserUpdateOneWithoutProfileInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface Token extends Node {
  id: ID_Output
  kind: AuthProvider
  accessToken: String
  user: User
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateToken {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  passwordResetToken?: String
  passwordResetExpires?: DateTime
  facebook?: String
  google?: String
  tokens?: Token[]
  profile: Profile
  posts?: Post[]
}

/*
 * A connection to a list of items.

 */
export interface TokenConnection {
  pageInfo: PageInfo
  edges: TokenEdge[]
  aggregate: AggregateToken
}

export interface TokenPreviousValues {
  id: ID_Output
  kind: AuthProvider
  accessToken: String
}

/*
 * An edge in a connection.

 */
export interface ProfileEdge {
  node: Profile
  cursor: String
}

export interface TokenSubscriptionPayload {
  mutation: MutationType
  node?: Token
  updatedFields?: String[]
  previousValues?: TokenPreviousValues
}

export interface AggregatePost {
  count: Int
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface TokenEdge {
  node: Token
  cursor: String
}

export interface ProfilePreviousValues {
  id: ID_Output
  name?: String
  gender?: String
  location?: String
  picture?: String
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType
  node?: Profile
  updatedFields?: String[]
  previousValues?: ProfilePreviousValues
}

export interface Profile extends Node {
  id: ID_Output
  name?: String
  gender?: String
  location?: String
  picture?: String
  user: User
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

export interface AggregateProfile {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ProfileConnection {
  pageInfo: PageInfo
  edges: ProfileEdge[]
  aggregate: AggregateProfile
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string