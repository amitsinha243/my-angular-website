import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 11, firtName: 'rahul', lastName: 'gupta', email: 'test123@gmail.com', password: 'welcome' },
      { id: 12, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome' }
    ];

    const posts = [
      {id: 1, title: 'The first Article',
      author: 'AS', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 2, title: 'The second Article',
      author: 'AS', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 3, title: 'The third Article',
      author: 'AS', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 4, title: 'The fourth Article',
      author: 'AS', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 5, title: 'The fifth Article',
      author: 'AS', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 6, title: 'The sixth Article',
      author: 'AS', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 7, title: 'The seven Article',
      author: 'AS', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 8, title: 'The eight Article',
      author: 'AS', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 9, title: 'The nine Article',
      author: 'AS', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 10, title: 'The ten Article',
      author: 'AS', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 11, title: 'The eleven Article',
      author: 'AS', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
  ];
    return {users, posts};
  }

getToken(user) {
  return 'this is a token';
}

get (reqInfo: RequestInfo) {
  if (reqInfo.collectionName === 'posts') {
    return this.getArticles(reqInfo);
  }
  return undefined;
}

getArticles(reqInfo: RequestInfo) {

  return reqInfo.utils.createResponse$(() => {
    const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
    const collection = reqInfo.collection;
    const id = reqInfo.id;
    const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);

    console.log(data);

    const options: ResponseOptions = data ?
    {
      body: dataEncapsulation ? { data } : data,
      status: 200
    } :
    {
      body: { error: `Post not found` },
      status: 404
    };

    options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
    options.headers = reqInfo.headers;
    options.url = reqInfo.url;
    return options;


  });
}


  post(reqInfo: RequestInfo) {

    if (reqInfo.id === 'login') {
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(user => {
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password ;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;


      });


    } else if (reqInfo.id === 'signup') {
      reqInfo.id = null;
      console.log(' from signup');
    }
  }

}
