import { type SchemaTypeDefinition } from 'sanity';
import { blockContentType } from './sanity-components/blockContentType';
import { blockImageType } from './sanity-components/blockImageType';
import { authorType } from './authorType';
import { blogType } from './blogType';
import { projectType } from './projectType';
import { teamMemberType } from './teamMemberType';
import { awardType } from './awardType';
import { serviceType } from './serviceType';
import { reviewType } from './reviewType';
import { faqType } from './faqType';
import { newsletterType } from './newsletterType';
import { contactType } from './contactType';
import { milestoneType } from './milestoneType';
import { categoryType } from './categoryType';
import { utilityPageType } from './utilityPages';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    blockImageType,
    authorType,
    blogType,
    projectType,
    teamMemberType,
    awardType,
    serviceType,
    reviewType,
    faqType,
    newsletterType,
    contactType,
    milestoneType,
    categoryType,
    utilityPageType,
  ],
};
