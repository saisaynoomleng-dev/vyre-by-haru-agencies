import { defineQuery } from 'next-sanity';

export const ALL_BLOGS_QUERY = defineQuery(`{"blogs": *[_type == 'blog'
          && defined(slug.current)]
          | order(publishedAt desc)
          [$startIndex...$endIndex]{
            title,
            slug,
            publishedAt,
            author->{
              name,
              slug,
              mainImage{
                alt,
                asset->{url}
              }
            },
            mainImage{
              alt,
              asset->{url}
            },
            category->{
              name,
            },
          },
        "total": count(*[_type == 'blog'
                && defined(slug.current)]),
}`);

export const BLOG_QUERY = defineQuery(`*[_type == 'blog'
 && slug.current == $slug][0]{
  title,
  slug,
  publishedAt,
  author->{
    name,
    slug,
    mainImage{
        alt,
        asset->{url}
    }
  },
  mainImage{
    alt,
    asset->{url}
  },
  desc,
  category->{
    name
  },
  "relatedPosts": *[_type == 'blog' 
                        && category._ref == ^.category._ref
                        && _id != ^._id]{
                          title,
                          slug,
                          publishedAt,
                          author->{
                            name,
                            slug,
                            mainImage{
                              alt,
                              asset->{url}
                            }
                          },
                          mainImage{
                            alt,
                            asset->{url}
                          },
                          category->{
                            name,
                          },
                        }
 }`);

export const AUTHOR_QUERY = defineQuery(`*[_type == 'author'
 && slug.current == $slug][0]{
  name,
  mainImage{
    alt,
    asset->{url}
  },
  bio,
  slug
 }`);

export const ALL_PROJECTS_QUERY = defineQuery(`*[_type == 'project'
 && defined(slug.current)]{
  name,
  slug,
  finishedAt,
  scope,
  timeline,
  mainImage{
    alt,
    asset->{url}
  },
  logoImage{
    alt,
    asset->{url}
  }
 }`);

export const PROJECT_QUERY = defineQuery(`*[_type == 'project'
 && slug.current ==  $slug][0]{
  title,
  slug,
  finishedAt,
  scope,
  timeline,
  desc,
  mainImage{
    alt,
    asset->{url}
  },
  logoImage{
    alt,
    asset->{url}
  }
 }`);

export const ALL_TEAM_MEMBERS_QUERY = defineQuery(`*[_type == 'teamMember'
 && defined(slug.current)]{
  fullName,
  role,
  slug,
  mainImage{
    alt,
    asset->{url}
  },
  bio
 }`);

export const TEAM_MEMBER_QUERY = defineQuery(`*[_type == 'teamMember'
 && slug.current == $slug][0]{
  fullName,
  role,
  slug,
  mainImage{
    alt,
    asset->{url}
  },
  bio
 }`);

export const ALL_AWARDS_QUERY = defineQuery(`*[_type == 'award'
 && defined(slug.current)]{
  awardedTitle,
  awardedDate,
  slug,
  awardedCategory
 }`);

export const ALL_SERVICES_QUERY = defineQuery(`*[_type == 'service'
 && defined(slug.current)]{
  title,
  slug,
  mainImage{
    alt,
    asset->{url}
  },
  subTitle,
  price
 }`);

export const SERVICE_QUERY = defineQuery(`*[_type == 'service'
 && slug.current == $slug][0]{
  title,
  slug,
  desc,
  mainImage{
    alt,
    asset->{url}
  },
  subTitle,
  price
 }`);

export const ALL_REVIEWS_QUERY = defineQuery(`*[_type == 'review']{
  fullName,
  role,
  mainImage{
    alt,
    asset->{url}
  },
  desc,
  title
 }`);

export const ALL_FAQS_QUERY = defineQuery(`*[_type == 'faq']{
  question,
  answer
}`);

export const ALL_MILESTONES_QUERY = defineQuery(`*[_type == 'milestone'
 && defined(slug.current)]{
  title,
  slug,
  year,
  desc
 }`);

export const UTILITY_PAGE_QUERY = defineQuery(`*[_type == 'utilityPage'
 && slug.current == $slug][0]{
  name,
  slug,
  desc
 }`);
