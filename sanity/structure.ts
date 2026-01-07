import { CiTrophy } from 'react-icons/ci';
import { FaQuestion, FaRegNewspaper, FaUserEdit } from 'react-icons/fa';
import { GoMilestone } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi';
import {
  IoBriefcase,
  IoChatboxEllipses,
  IoMailOpenOutline,
} from 'react-icons/io5';
import {
  MdCategory,
  MdDesignServices,
  MdOutlinePhoneCallback,
} from 'react-icons/md';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Vyre By Haru Agencies')
    .items([
      S.divider().title('Content'),
      S.documentTypeListItem('author').title('Authors').icon(FaUserEdit),
      S.documentTypeListItem('category').title('Cateogries').icon(MdCategory),
      S.documentTypeListItem('blog').title('Blogs').icon(FaRegNewspaper),
      S.documentTypeListItem('project').title('Projects').icon(IoBriefcase),
      S.documentTypeListItem('teamMember')
        .title('Team Members')
        .icon(HiOutlineUserGroup),
      S.documentTypeListItem('award').title('Awards').icon(CiTrophy),
      S.documentTypeListItem('faq').title('FAQs').icon(FaQuestion),
      S.documentTypeListItem('milestone').title('Milestones').icon(GoMilestone),
      S.documentTypeListItem('utilityPage').title('Utility Pages'),

      S.divider().title('Services'),
      S.documentTypeListItem('service')
        .title('Services')
        .icon(MdDesignServices),

      S.divider().title('Marketing'),
      S.documentTypeListItem('review').title('Reviews').icon(IoChatboxEllipses),
      S.documentTypeListItem('newsletter')
        .title('Newsletter Subscription')
        .icon(IoMailOpenOutline),
      S.documentTypeListItem('contact')
        .title('Contact Us')
        .icon(MdOutlinePhoneCallback),
    ]);
