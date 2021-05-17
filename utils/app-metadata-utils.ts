import { APPLICATION_TITLE } from '../constants/app-metadata';

export const joinWithAppTitle = (pageTitle: string): string =>
  `${pageTitle} | ${APPLICATION_TITLE}`;
