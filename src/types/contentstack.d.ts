type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

type AllAuthor = {
  __typename?: 'AllAuthor';
  items?: Maybe<Array<Maybe<Author>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllBlogCategory = {
  __typename?: 'AllBlogCategory';
  items?: Maybe<Array<Maybe<BlogCategory>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllBlogPost = {
  __typename?: 'AllBlogPost';
  items?: Maybe<Array<Maybe<BlogPost>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllBlogTopic = {
  __typename?: 'AllBlogTopic';
  items?: Maybe<Array<Maybe<BlogTopic>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllContactUsPage = {
  __typename?: 'AllContactUsPage';
  items?: Maybe<Array<Maybe<ContactUsPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllFooter = {
  __typename?: 'AllFooter';
  items?: Maybe<Array<Maybe<Footer>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllHeader = {
  __typename?: 'AllHeader';
  items?: Maybe<Array<Maybe<Header>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllLandingPage = {
  __typename?: 'AllLandingPage';
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllPageSettings = {
  __typename?: 'AllPageSettings';
  items?: Maybe<Array<Maybe<PageSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type AllSysAsset = {
  __typename?: 'AllSysAsset';
  items?: Maybe<Array<Maybe<SysAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

type Author = {
  __typename?: 'Author';
  biography?: Maybe<AuthorBiography>;
  profile_imageConnection?: Maybe<SysAssetConnection>;
  social_links?: Maybe<Array<Maybe<SocialLink>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
};

type AuthorBiography = {
  __typename?: 'AuthorBiography';
  embedded_itemsConnection?: Maybe<AuthorBiographyEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']['output']>;
};


type AuthorBiographyEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

type AuthorBiographyEmbeddedItemsConnection = {
  __typename?: 'AuthorBiographyEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<AuthorBiographyEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type AuthorBiographyEmbeddedItemsEdge = {
  __typename?: 'AuthorBiographyEmbeddedItemsEdge';
  node?: Maybe<AuthorBiographyEmbeddedItemsNode>;
};

type AuthorBiographyEmbeddedItemsNode = SysAsset;

enum AuthorOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type AuthorWhere = {
  AND?: InputMaybe<Array<InputMaybe<AuthorWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorWhere>>>;
  biography?: InputMaybe<Scalars['JSON']['input']>;
  biography_exists?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profile_image?: InputMaybe<SysAssetWhere>;
  profile_image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  social_links?: InputMaybe<SocialLinkWhere>;
  social_links_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type BlogCategory = {
  __typename?: 'BlogCategory';
  hero_banner?: Maybe<HeroBanner>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

enum BlogCategoryOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type BlogCategoryWhere = {
  AND?: InputMaybe<Array<InputMaybe<BlogCategoryWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogCategoryWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_banner?: InputMaybe<HeroBannerWhere>;
  hero_banner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_ne?: InputMaybe<Scalars['String']['input']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type BlogPost = {
  __typename?: 'BlogPost';
  authorConnection?: Maybe<BlogPostAuthorConnection>;
  categoryConnection?: Maybe<BlogPostCategoryConnection>;
  content?: Maybe<BlogPostContent>;
  imageConnection?: Maybe<SysAssetConnection>;
  published_date?: Maybe<Scalars['DateTime']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
  trending?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

type BlogPostAuthorConnection = {
  __typename?: 'BlogPostAuthorConnection';
  edges?: Maybe<Array<Maybe<BlogPostAuthorEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type BlogPostAuthorEdge = {
  __typename?: 'BlogPostAuthorEdge';
  node?: Maybe<BlogPostAuthorNode>;
};

type BlogPostAuthorNode = Author;

type BlogPostAuthorWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  author?: InputMaybe<AuthorWhere>;
};

type BlogPostCategoryConnection = {
  __typename?: 'BlogPostCategoryConnection';
  edges?: Maybe<Array<Maybe<BlogPostCategoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type BlogPostCategoryEdge = {
  __typename?: 'BlogPostCategoryEdge';
  node?: Maybe<BlogPostCategoryNode>;
};

type BlogPostCategoryNode = BlogCategory | BlogTopic;

type BlogPostCategoryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_category?: InputMaybe<BlogCategoryWhere>;
  blog_topic?: InputMaybe<BlogTopicWhere>;
};

type BlogPostContent = {
  __typename?: 'BlogPostContent';
  embedded_itemsConnection?: Maybe<BlogPostContentEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']['output']>;
};


type BlogPostContentEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

type BlogPostContentEmbeddedItemsConnection = {
  __typename?: 'BlogPostContentEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<BlogPostContentEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type BlogPostContentEmbeddedItemsEdge = {
  __typename?: 'BlogPostContentEmbeddedItemsEdge';
  node?: Maybe<BlogPostContentEmbeddedItemsNode>;
};

type BlogPostContentEmbeddedItemsNode = SysAsset;

enum BlogPostOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type BlogPostWhere = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostWhere>>>;
  author?: InputMaybe<BlogPostAuthorWhere>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<BlogPostCategoryWhere>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  published_date?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  published_date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  published_date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_ne?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary_ne?: InputMaybe<Scalars['String']['input']>;
  summary_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trending?: InputMaybe<Scalars['Boolean']['input']>;
  trending_exists?: InputMaybe<Scalars['Boolean']['input']>;
  trending_ne?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_ne?: InputMaybe<Scalars['String']['input']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type BlogTopic = {
  __typename?: 'BlogTopic';
  iconConnection?: Maybe<SysAssetConnection>;
  related_categoryConnection?: Maybe<BlogTopicRelatedCategoryConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
};

enum BlogTopicOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type BlogTopicRelatedCategoryConnection = {
  __typename?: 'BlogTopicRelatedCategoryConnection';
  edges?: Maybe<Array<Maybe<BlogTopicRelatedCategoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type BlogTopicRelatedCategoryEdge = {
  __typename?: 'BlogTopicRelatedCategoryEdge';
  node?: Maybe<BlogTopicRelatedCategoryNode>;
};

type BlogTopicRelatedCategoryNode = BlogCategory;

type BlogTopicRelatedCategoryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_category?: InputMaybe<BlogCategoryWhere>;
};

type BlogTopicWhere = {
  AND?: InputMaybe<Array<InputMaybe<BlogTopicWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogTopicWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon?: InputMaybe<SysAssetWhere>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  related_category?: InputMaybe<BlogTopicRelatedCategoryWhere>;
  related_category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type ContactUsPage = {
  __typename?: 'ContactUsPage';
  contact_cards?: Maybe<Array<Maybe<ContactUsPageContactCards>>>;
  hero_banner?: Maybe<HeroBanner>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
};

type ContactUsPageContactCards = {
  __typename?: 'ContactUsPageContactCards';
  content?: Maybe<Scalars['String']['output']>;
  iconConnection?: Maybe<SysAssetConnection>;
  name?: Maybe<Scalars['String']['output']>;
};

type ContactUsPageContactCardsWhere = {
  content?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_ne?: InputMaybe<Scalars['String']['input']>;
  content_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon?: InputMaybe<SysAssetWhere>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_ne?: InputMaybe<Scalars['String']['input']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

enum ContactUsPageOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type ContactUsPageWhere = {
  AND?: InputMaybe<Array<InputMaybe<ContactUsPageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactUsPageWhere>>>;
  contact_cards?: InputMaybe<ContactUsPageContactCardsWhere>;
  contact_cards_exists?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_banner?: InputMaybe<HeroBannerWhere>;
  hero_banner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type EntrySystemField = {
  __typename?: 'EntrySystemField';
  branch?: Maybe<Scalars['String']['output']>;
  content_type_uid?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  locale?: Maybe<Scalars['String']['output']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};


type EntrySystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

enum EvalReferenceEnum {
  All = 'ALL',
  Any = 'ANY'
}

type Footer = {
  __typename?: 'Footer';
  copyright?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Logo>;
  social_links?: Maybe<Array<Maybe<SocialLink>>>;
  subtitle?: Maybe<Scalars['String']['output']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
};

enum FooterOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type FooterWhere = {
  AND?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']['input']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  copyright_ne?: InputMaybe<Scalars['String']['input']>;
  copyright_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo?: InputMaybe<LogoWhere>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  social_links?: InputMaybe<SocialLinkWhere>;
  social_links_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_ne?: InputMaybe<Scalars['String']['input']>;
  subtitle_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type Header = {
  __typename?: 'Header';
  call_to_action?: Maybe<Link>;
  logo?: Maybe<Logo>;
  navigation_list?: Maybe<Array<Maybe<HeaderNavigationList>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
};

type HeaderNavigationList = {
  __typename?: 'HeaderNavigationList';
  navigation_itemConnection?: Maybe<HeaderNavigationListNavigationItemConnection>;
};

type HeaderNavigationListNavigationItemConnection = {
  __typename?: 'HeaderNavigationListNavigationItemConnection';
  edges?: Maybe<Array<Maybe<HeaderNavigationListNavigationItemEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type HeaderNavigationListNavigationItemEdge = {
  __typename?: 'HeaderNavigationListNavigationItemEdge';
  node?: Maybe<HeaderNavigationListNavigationItemNode>;
};

type HeaderNavigationListNavigationItemNode = BlogCategory;

type HeaderNavigationListNavigationItemWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_category?: InputMaybe<BlogCategoryWhere>;
};

type HeaderNavigationListWhere = {
  navigation_item?: InputMaybe<HeaderNavigationListNavigationItemWhere>;
  navigation_item_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

enum HeaderOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type HeaderWhere = {
  AND?: InputMaybe<Array<InputMaybe<HeaderWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderWhere>>>;
  call_to_action?: InputMaybe<LinkWhere>;
  call_to_action_exists?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo?: InputMaybe<LogoWhere>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigation_list?: InputMaybe<HeaderNavigationListWhere>;
  navigation_list_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type HeroBanner = {
  __typename?: 'HeroBanner';
  description?: Maybe<Scalars['String']['output']>;
  eyebrow?: Maybe<Scalars['String']['output']>;
  imageConnection?: Maybe<SysAssetConnection>;
  title?: Maybe<HeroBannerTitle>;
};

type HeroBannerTitle = {
  __typename?: 'HeroBannerTitle';
  embedded_itemsConnection?: Maybe<HeroBannerTitleEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']['output']>;
};


type HeroBannerTitleEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

type HeroBannerTitleEmbeddedItemsConnection = {
  __typename?: 'HeroBannerTitleEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<HeroBannerTitleEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type HeroBannerTitleEmbeddedItemsEdge = {
  __typename?: 'HeroBannerTitleEmbeddedItemsEdge';
  node?: Maybe<HeroBannerTitleEmbeddedItemsNode>;
};

type HeroBannerTitleEmbeddedItemsNode = SysAsset;

type HeroBannerWhere = {
  description?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_ne?: InputMaybe<Scalars['String']['input']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eyebrow_ne?: InputMaybe<Scalars['String']['input']>;
  eyebrow_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['JSON']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

type LandingPage = {
  __typename?: 'LandingPage';
  featured_postConnection?: Maybe<LandingPageFeaturedPostConnection>;
  hero_banner?: Maybe<HeroBanner>;
  seo?: Maybe<Seo>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
  topics_carousel?: Maybe<LandingPageTopicsCarousel>;
};

type LandingPageFeaturedPostConnection = {
  __typename?: 'LandingPageFeaturedPostConnection';
  edges?: Maybe<Array<Maybe<LandingPageFeaturedPostEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type LandingPageFeaturedPostEdge = {
  __typename?: 'LandingPageFeaturedPostEdge';
  node?: Maybe<LandingPageFeaturedPostNode>;
};

type LandingPageFeaturedPostNode = BlogPost;

type LandingPageFeaturedPostWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_post?: InputMaybe<BlogPostWhere>;
};

enum LandingPageOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type LandingPageTopicsCarousel = {
  __typename?: 'LandingPageTopicsCarousel';
  cta_label?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topicsConnection?: Maybe<LandingPageTopicsCarouselTopicsConnection>;
};


type LandingPageTopicsCarouselTopicsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SysRefLandingPageTopicsCarouselTopicsWhere>;
};

type LandingPageTopicsCarouselTopicsConnection = {
  __typename?: 'LandingPageTopicsCarouselTopicsConnection';
  edges?: Maybe<Array<Maybe<LandingPageTopicsCarouselTopicsEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type LandingPageTopicsCarouselTopicsEdge = {
  __typename?: 'LandingPageTopicsCarouselTopicsEdge';
  node?: Maybe<LandingPageTopicsCarouselTopicsNode>;
};

type LandingPageTopicsCarouselTopicsNode = BlogTopic;

type LandingPageTopicsCarouselTopicsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_topic?: InputMaybe<BlogTopicWhere>;
};

type LandingPageTopicsCarouselWhere = {
  cta_label?: InputMaybe<Scalars['String']['input']>;
  cta_label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cta_label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cta_label_ne?: InputMaybe<Scalars['String']['input']>;
  cta_label_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topics?: InputMaybe<LandingPageTopicsCarouselTopicsWhere>;
  topics_count?: InputMaybe<Scalars['Int']['input']>;
  topics_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

type LandingPageWhere = {
  AND?: InputMaybe<Array<InputMaybe<LandingPageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingPageWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featured_post?: InputMaybe<LandingPageFeaturedPostWhere>;
  featured_post_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hero_banner?: InputMaybe<HeroBannerWhere>;
  hero_banner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  seo?: InputMaybe<SeoWhere>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topics_carousel?: InputMaybe<LandingPageTopicsCarouselWhere>;
  topics_carousel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

type LinkWhere = {
  href?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_ne?: InputMaybe<Scalars['String']['input']>;
  href_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Logo = {
  __typename?: 'Logo';
  logo_imageConnection?: Maybe<SysAssetConnection>;
  logo_link?: Maybe<Scalars['String']['output']>;
};

type LogoWhere = {
  logo_image?: InputMaybe<SysAssetWhere>;
  logo_image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logo_link?: InputMaybe<Scalars['String']['input']>;
  logo_link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logo_link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_link_ne?: InputMaybe<Scalars['String']['input']>;
  logo_link_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PageSettings = {
  __typename?: 'PageSettings';
  category_list?: Maybe<PageSettingsCategoryList>;
  newsletter?: Maybe<PageSettingsNewsletter>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']['output']>;
  top_rated?: Maybe<PageSettingsTopRated>;
  your_host?: Maybe<PageSettingsYourHost>;
};

type PageSettingsCategoryList = {
  __typename?: 'PageSettingsCategoryList';
  categoriesConnection?: Maybe<PageSettingsCategoryListCategoriesConnection>;
  title?: Maybe<Scalars['String']['output']>;
};


type PageSettingsCategoryListCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SysRefPageSettingsCategoryListCategoriesWhere>;
};

type PageSettingsCategoryListCategoriesConnection = {
  __typename?: 'PageSettingsCategoryListCategoriesConnection';
  edges?: Maybe<Array<Maybe<PageSettingsCategoryListCategoriesEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type PageSettingsCategoryListCategoriesEdge = {
  __typename?: 'PageSettingsCategoryListCategoriesEdge';
  node?: Maybe<PageSettingsCategoryListCategoriesNode>;
};

type PageSettingsCategoryListCategoriesNode = BlogCategory;

type PageSettingsCategoryListCategoriesWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_category?: InputMaybe<BlogCategoryWhere>;
};

type PageSettingsCategoryListWhere = {
  categories?: InputMaybe<PageSettingsCategoryListCategoriesWhere>;
  categories_count?: InputMaybe<Scalars['Int']['input']>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PageSettingsNewsletter = {
  __typename?: 'PageSettingsNewsletter';
  cta_label?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email_placeholder?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

type PageSettingsNewsletterWhere = {
  cta_label?: InputMaybe<Scalars['String']['input']>;
  cta_label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cta_label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cta_label_ne?: InputMaybe<Scalars['String']['input']>;
  cta_label_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_ne?: InputMaybe<Scalars['String']['input']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_placeholder?: InputMaybe<Scalars['String']['input']>;
  email_placeholder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_placeholder_ne?: InputMaybe<Scalars['String']['input']>;
  email_placeholder_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_ne?: InputMaybe<Scalars['String']['input']>;
  subtitle_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

enum PageSettingsOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

type PageSettingsTopRated = {
  __typename?: 'PageSettingsTopRated';
  postsConnection?: Maybe<PageSettingsTopRatedPostsConnection>;
  title?: Maybe<Scalars['String']['output']>;
};


type PageSettingsTopRatedPostsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SysRefPageSettingsTopRatedPostsWhere>;
};

type PageSettingsTopRatedPostsConnection = {
  __typename?: 'PageSettingsTopRatedPostsConnection';
  edges?: Maybe<Array<Maybe<PageSettingsTopRatedPostsEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type PageSettingsTopRatedPostsEdge = {
  __typename?: 'PageSettingsTopRatedPostsEdge';
  node?: Maybe<PageSettingsTopRatedPostsNode>;
};

type PageSettingsTopRatedPostsNode = BlogPost;

type PageSettingsTopRatedPostsWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  blog_post?: InputMaybe<BlogPostWhere>;
};

type PageSettingsTopRatedWhere = {
  posts?: InputMaybe<PageSettingsTopRatedPostsWhere>;
  posts_count?: InputMaybe<Scalars['Int']['input']>;
  posts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type PageSettingsWhere = {
  AND?: InputMaybe<Array<InputMaybe<PageSettingsWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSettingsWhere>>>;
  category_list?: InputMaybe<PageSettingsCategoryListWhere>;
  category_list_exists?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsletter?: InputMaybe<PageSettingsNewsletterWhere>;
  newsletter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  top_rated?: InputMaybe<PageSettingsTopRatedWhere>;
  top_rated_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  your_host?: InputMaybe<PageSettingsYourHostWhere>;
  your_host_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

type PageSettingsYourHost = {
  __typename?: 'PageSettingsYourHost';
  authorConnection?: Maybe<PageSettingsYourHostAuthorConnection>;
  call_to_action?: Maybe<Link>;
  title?: Maybe<Scalars['String']['output']>;
};

type PageSettingsYourHostAuthorConnection = {
  __typename?: 'PageSettingsYourHostAuthorConnection';
  edges?: Maybe<Array<Maybe<PageSettingsYourHostAuthorEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type PageSettingsYourHostAuthorEdge = {
  __typename?: 'PageSettingsYourHostAuthorEdge';
  node?: Maybe<PageSettingsYourHostAuthorNode>;
};

type PageSettingsYourHostAuthorNode = Author;

type PageSettingsYourHostAuthorWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  author?: InputMaybe<AuthorWhere>;
};

type PageSettingsYourHostWhere = {
  author?: InputMaybe<PageSettingsYourHostAuthorWhere>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  call_to_action?: InputMaybe<LinkWhere>;
  call_to_action_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type Query = {
  __typename?: 'Query';
  all_assets?: Maybe<AllSysAsset>;
  all_author?: Maybe<AllAuthor>;
  all_blog_category?: Maybe<AllBlogCategory>;
  all_blog_post?: Maybe<AllBlogPost>;
  all_blog_topic?: Maybe<AllBlogTopic>;
  all_contact_us_page?: Maybe<AllContactUsPage>;
  all_footer?: Maybe<AllFooter>;
  all_header?: Maybe<AllHeader>;
  all_landing_page?: Maybe<AllLandingPage>;
  all_page_settings?: Maybe<AllPageSettings>;
  assets?: Maybe<SysAsset>;
  author?: Maybe<Author>;
  blog_category?: Maybe<BlogCategory>;
  blog_post?: Maybe<BlogPost>;
  blog_topic?: Maybe<BlogTopic>;
  contact_us_page?: Maybe<ContactUsPage>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  landing_page?: Maybe<LandingPage>;
  page_settings?: Maybe<PageSettings>;
};


type QueryAll_AssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order_by?: InputMaybe<Array<InputMaybe<SysAssetOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SysAssetWhere>;
};


type QueryAll_AuthorArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<AuthorOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorWhere>;
};


type QueryAll_Blog_CategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<BlogCategoryOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogCategoryWhere>;
};


type QueryAll_Blog_PostArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<BlogPostOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostWhere>;
};


type QueryAll_Blog_TopicArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<BlogTopicOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogTopicWhere>;
};


type QueryAll_Contact_Us_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<ContactUsPageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactUsPageWhere>;
};


type QueryAll_FooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<FooterOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterWhere>;
};


type QueryAll_HeaderArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<HeaderOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderWhere>;
};


type QueryAll_Landing_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<LandingPageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageWhere>;
};


type QueryAll_Page_SettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  order_by?: InputMaybe<Array<InputMaybe<PageSettingsOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSettingsWhere>;
};


type QueryAssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['String']['input'];
};


type QueryAuthorArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryBlog_CategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryBlog_PostArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryBlog_TopicArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryContact_Us_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryFooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryHeaderArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryLanding_PageArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


type QueryPage_SettingsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

type Seo = {
  __typename?: 'Seo';
  enable_search_indexing?: Maybe<Scalars['Boolean']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
};

type SeoWhere = {
  enable_search_indexing?: InputMaybe<Scalars['Boolean']['input']>;
  enable_search_indexing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  enable_search_indexing_ne?: InputMaybe<Scalars['Boolean']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  meta_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  meta_description_ne?: InputMaybe<Scalars['String']['input']>;
  meta_description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  meta_keywords?: InputMaybe<Scalars['String']['input']>;
  meta_keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  meta_keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  meta_keywords_ne?: InputMaybe<Scalars['String']['input']>;
  meta_keywords_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  meta_title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  meta_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  meta_title_ne?: InputMaybe<Scalars['String']['input']>;
  meta_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SocialLink = {
  __typename?: 'SocialLink';
  iconConnection?: Maybe<SysAssetConnection>;
  link?: Maybe<Scalars['String']['output']>;
};

type SocialLinkWhere = {
  icon?: InputMaybe<SysAssetWhere>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_ne?: InputMaybe<Scalars['String']['input']>;
  link_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SysAsset = {
  __typename?: 'SysAsset';
  content_type?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dimension?: Maybe<SysAssetDimension>;
  file_size?: Maybe<Scalars['Int']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  parent_uid?: Maybe<Scalars['String']['output']>;
  permanent_url?: Maybe<Scalars['String']['output']>;
  system?: Maybe<SysAssetSystemField>;
  title?: Maybe<Scalars['String']['output']>;
  unique_identifier?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


type SysAssetUrlArgs = {
  transform?: InputMaybe<SysAssetTransformUrl>;
};

/** WEBP images are usually lower in size and have good quality. */
enum SysAssetAutoValues {
  Webp = 'WEBP'
}

type SysAssetConnection = {
  __typename?: 'SysAssetConnection';
  edges?: Maybe<Array<Maybe<SysAssetEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type SysAssetDimension = {
  __typename?: 'SysAssetDimension';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

type SysAssetDimensionWhere = {
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_ne?: InputMaybe<Scalars['Int']['input']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_ne?: InputMaybe<Scalars['Int']['input']>;
  width_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

enum SysAssetDisableValues {
  /** UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image */
  Upscale = 'UPSCALE'
}

/** This parameter allows an image to be downloaded or rendered on page */
enum SysAssetDispositionValues {
  /** Allows to download an image */
  Attachment = 'ATTACHMENT',
  /** Allows an image to be rendered on page */
  Inline = 'INLINE'
}

type SysAssetEdge = {
  __typename?: 'SysAssetEdge';
  node?: Maybe<SysAsset>;
};

enum SysAssetFitValues {
  Bounds = 'BOUNDS',
  Crop = 'CROP'
}

enum SysAssetImageFormats {
  /** Convert an image to GIF format */
  Gif = 'GIF',
  /** Convert an image to JPEG format */
  Jpg = 'JPG',
  /** A Progressive JPEG is an image file created using a compression method that displays higher detail in progression */
  Pjpg = 'PJPG',
  /** Convert an image to PNG format */
  Png = 'PNG',
  /** WEBP images are usually lower in size and have good quality */
  Webp = 'WEBP',
  /** WEBP Lossless format */
  Webpll = 'WEBPLL',
  /** WEBP Lossy format */
  Webply = 'WEBPLY'
}

enum SysAssetOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

enum SysAssetOrientValues {
  /** Flip image horizontally and vertically */
  Both = 'BOTH',
  /** Set image to default */
  Default = 'DEFAULT',
  /** Flip image horizontally */
  Horizontally = 'HORIZONTALLY',
  /** Flip image horizontally and then rotate 90 degrees towards left */
  Rotate90Left = 'ROTATE90LEFT',
  /** Rotate image 90 degrees towards right */
  Rotate90Right = 'ROTATE90RIGHT',
  /** Flip image vertically */
  Vertically = 'VERTICALLY'
}

/** The overlay_align parameter allows you to put one image on top of another */
enum SysAssetOverlayAlignValues {
  /** Align the overlay image to the bottom of the actual image */
  Bottom = 'BOTTOM',
  /** Align the overlay image to the center (horizontally) of the actual image */
  Center = 'CENTER',
  /** Align the overlay image to the left of the actual image */
  Left = 'LEFT',
  /** Align the overlay image to the middle (vertically) of the actual image */
  Middle = 'MIDDLE',
  /** Align the overlay image to the right of the actual image */
  Right = 'RIGHT',
  /** Align the overlay image to the top of the actual image */
  Top = 'TOP'
}

enum SysAssetOverlayRepeatValues {
  /** Horizontal and vertical repetition */
  Both = 'BOTH',
  /** Horizontal repetition */
  X = 'X',
  /** Vertical repetition */
  Y = 'Y'
}

type SysAssetSystemField = {
  __typename?: 'SysAssetSystemField';
  branch?: Maybe<Scalars['String']['output']>;
  content_type_uid?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  extensionConnection?: Maybe<SysExtensionConnection>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};


type SysAssetSystemFieldExtensionConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

type SysAssetTransformUrl = {
  /** When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality. */
  auto?: InputMaybe<SysAssetAutoValues>;
  /** The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image */
  bg_color?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  /** The disable parameter disables the functionality that is enabled by default */
  disable?: InputMaybe<SysAssetDisableValues>;
  /** The disposition parameter lets you allow image to download or render.  */
  disposition?: InputMaybe<SysAssetDispositionValues>;
  /** The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret */
  dpr?: InputMaybe<Scalars['String']['input']>;
  /** Fit parameter enables you to fit the given image properly within the specified height and width */
  fit?: InputMaybe<SysAssetFitValues>;
  /** Format parameter lets you converts a given image from one format to another */
  format?: InputMaybe<SysAssetImageFormats>;
  height?: InputMaybe<Scalars['String']['input']>;
  /** The orient parameter lets you control the cardinal orientation of the given image */
  orient?: InputMaybe<SysAssetOrientValues>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  overlay_align?: InputMaybe<SysAssetOverlayAlignValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image */
  overlay_height?: InputMaybe<Scalars['String']['input']>;
  /** The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image */
  overlay_repeat?: InputMaybe<SysAssetOverlayRepeatValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image */
  overlay_width?: InputMaybe<Scalars['String']['input']>;
  /** This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image */
  pad?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  trim?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

type SysAssetWhere = {
  AND?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_ne?: InputMaybe<Scalars['String']['input']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimension?: InputMaybe<SysAssetDimensionWhere>;
  dimension_exists?: InputMaybe<Scalars['Boolean']['input']>;
  file_size?: InputMaybe<Scalars['Int']['input']>;
  file_size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  file_size_gt?: InputMaybe<Scalars['Int']['input']>;
  file_size_gte?: InputMaybe<Scalars['Int']['input']>;
  file_size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  file_size_lt?: InputMaybe<Scalars['Int']['input']>;
  file_size_lte?: InputMaybe<Scalars['Int']['input']>;
  file_size_ne?: InputMaybe<Scalars['Int']['input']>;
  file_size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filename_exists?: InputMaybe<Scalars['Boolean']['input']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename_ne?: InputMaybe<Scalars['String']['input']>;
  filename_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_uid?: InputMaybe<Scalars['String']['input']>;
  parent_uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  parent_uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent_uid_ne?: InputMaybe<Scalars['String']['input']>;
  parent_uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags?: InputMaybe<Scalars['String']['input']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_ne?: InputMaybe<Scalars['String']['input']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SysExtensionConnection = {
  __typename?: 'SysExtensionConnection';
  edges?: Maybe<Array<Maybe<SysExtensionEdge>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

type SysExtensionEdge = {
  __typename?: 'SysExtensionEdge';
  node?: Maybe<SysMetadata>;
};

type SysMetadata = {
  __typename?: 'SysMetadata';
  extension_uid?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

type SysRefBlogCategoryWhere = {
  hero_banner?: InputMaybe<SysRefHeroBannerWhere>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_ne?: InputMaybe<Scalars['String']['input']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SysRefBlogPostWhere = {
  published_date?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  published_date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  published_date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_ne?: InputMaybe<Scalars['DateTime']['input']>;
  published_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary_ne?: InputMaybe<Scalars['String']['input']>;
  summary_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trending?: InputMaybe<Scalars['Boolean']['input']>;
  trending_exists?: InputMaybe<Scalars['Boolean']['input']>;
  trending_ne?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_ne?: InputMaybe<Scalars['String']['input']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SysRefBlogTopicWhere = {
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SysRefHeroBannerWhere = {
  description?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_ne?: InputMaybe<Scalars['String']['input']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eyebrow_ne?: InputMaybe<Scalars['String']['input']>;
  eyebrow_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type SysRefLandingPageTopicsCarouselTopicsWhere = {
  blog_topic?: InputMaybe<SysRefBlogTopicWhere>;
};

type SysRefPageSettingsCategoryListCategoriesWhere = {
  blog_category?: InputMaybe<SysRefBlogCategoryWhere>;
};

type SysRefPageSettingsTopRatedPostsWhere = {
  blog_post?: InputMaybe<SysRefBlogPostWhere>;
};

type SysVariants = {
  __typename?: 'SysVariants';
  alias?: Maybe<Scalars['String']['output']>;
  environment?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<Scalars['String']['output']>;
  variant_uid?: Maybe<Scalars['String']['output']>;
};

type SystemPublishDetails = {
  __typename?: 'SystemPublishDetails';
  environment?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<Maybe<SysVariants>>>;
};

type SystemPublishDetailsWhere = {
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
  time_gt?: InputMaybe<Scalars['DateTime']['input']>;
  time_gte?: InputMaybe<Scalars['DateTime']['input']>;
  time_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  time_lt?: InputMaybe<Scalars['DateTime']['input']>;
  time_lte?: InputMaybe<Scalars['DateTime']['input']>;
  time_ne?: InputMaybe<Scalars['DateTime']['input']>;
  time_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  user_ne?: InputMaybe<Scalars['String']['input']>;
  user_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type HeaderQueryQueryVariables = Exact<{ [key: string]: never; }>;


type HeaderQueryQuery = { __typename?: 'Query', all_header?: { __typename?: 'AllHeader', items?: Array<{ __typename?: 'Header', logo?: { __typename?: 'Logo', logo_link?: string | null, logo_imageConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, description?: string | null, dimension?: { __typename?: 'SysAssetDimension', width?: number | null, height?: number | null } | null } | null } | null> | null } | null } | null, navigation_list?: Array<{ __typename?: 'HeaderNavigationList', navigation_itemConnection?: { __typename?: 'HeaderNavigationListNavigationItemConnection', edges?: Array<{ __typename?: 'HeaderNavigationListNavigationItemEdge', node?: { __typename?: 'BlogCategory', title?: string | null, url?: string | null } | null } | null> | null } | null } | null> | null, call_to_action?: { __typename?: 'Link', title?: string | null, href?: string | null } | null } | null> | null } | null };

type PageSettingsQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PageSettingsQueryQuery = { __typename?: 'Query', all_page_settings?: { __typename?: 'AllPageSettings', items?: Array<{ __typename?: 'PageSettings', your_host?: { __typename?: 'PageSettingsYourHost', title?: string | null, authorConnection?: { __typename?: 'PageSettingsYourHostAuthorConnection', edges?: Array<{ __typename?: 'PageSettingsYourHostAuthorEdge', node?: { __typename?: 'Author', title?: string | null, profile_imageConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null } | null } | null> | null } | null, biography?: { __typename?: 'AuthorBiography', json?: any | null } | null, social_links?: Array<{ __typename?: 'SocialLink', link?: string | null, iconConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null } | null } | null> | null } | null } | null> | null } | null } | null> | null } | null, call_to_action?: { __typename?: 'Link', title?: string | null, href?: string | null } | null } | null } | null> | null } | null };

type LandingPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


type LandingPageQueryQuery = { __typename?: 'Query', all_landing_page?: { __typename?: 'AllLandingPage', items?: Array<{ __typename?: 'LandingPage', hero_banner?: { __typename?: 'HeroBanner', eyebrow?: string | null, description?: string | null, title?: { __typename?: 'HeroBannerTitle', json?: any | null } | null, imageConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, description?: string | null, dimension?: { __typename?: 'SysAssetDimension', width?: number | null, height?: number | null } | null } | null } | null> | null } | null } | null, topics_carousel?: { __typename?: 'LandingPageTopicsCarousel', title?: string | null, cta_label?: string | null, topicsConnection?: { __typename?: 'LandingPageTopicsCarouselTopicsConnection', edges?: Array<{ __typename?: 'LandingPageTopicsCarouselTopicsEdge', node?: { __typename?: 'BlogTopic', title?: string | null, iconConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', width?: number | null, height?: number | null } | null } | null } | null> | null } | null } | null } | null> | null } | null } | null, featured_postConnection?: { __typename?: 'LandingPageFeaturedPostConnection', edges?: Array<{ __typename?: 'LandingPageFeaturedPostEdge', node?: { __typename?: 'BlogPost', title?: string | null, url?: string | null, published_date?: any | null, summary?: string | null, authorConnection?: { __typename?: 'BlogPostAuthorConnection', edges?: Array<{ __typename?: 'BlogPostAuthorEdge', node?: { __typename?: 'Author', title?: string | null, profile_imageConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, dimension?: { __typename?: 'SysAssetDimension', height?: number | null, width?: number | null } | null } | null } | null> | null } | null } | null } | null> | null } | null } | null } | null> | null } | null } | null> | null } | null };
