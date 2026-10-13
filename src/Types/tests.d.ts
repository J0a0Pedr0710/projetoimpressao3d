/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'tests' {
  type IRequest = {
    method:
      | 'getUri'
      | 'request'
      | 'get'
      | 'delete'
      | 'head'
      | 'options'
      | 'post'
      | 'put'
      | 'patch'
      | 'postForm'
      | 'putForm'
      | 'patchForm';
    data: any;
    instance?: 'apiPagarme' | 'apiInterfreight';
    error?: boolean;
  };
}
