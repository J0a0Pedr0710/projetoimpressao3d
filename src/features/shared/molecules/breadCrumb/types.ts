export type IBreadCrumbPages = {
  to: string;
  name: string;
};

export type IBreadCrumb = {
  pages: IBreadCrumbPages[];
  actualPage: string;
};
