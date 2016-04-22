import { expect } from '../test_helper';
import { fetchPosts, fetchPost, createPost, deletePost, togglePost } from '../../../../src/cms/actions/posts';
import {
    ROOT_URL, POST_PATH, TEST_DOMAIN,
    FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST, TOGGLE_POST
} from '../../../../src/cms/constants';
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleWares = [ thunk ];
const mockStore = configureMockStore(middleWares);


describe('actions', () => {
   describe('fetchPosts', () => {
       afterEach(() => {
           nock.cleanAll()
       });
       
       it('creates FETCH_TODO_SUCCESS when fetching posts has been done', () => {
           nock(TEST_DOMAIN)
               .get(`${ROOT_URL}${POST_PATH}`)
               .reply(200,  { data: [ {title: 'hoge', description: 'description', id: 1}] } );
           
           const store = mockStore({});
           const expectedResponse = [ {
               type: FETCH_POSTS.SUCCESS,
               payload: {
                    data :[{title: 'hoge', description: 'description', id: 1}]
                }
               
           }];

           return store.dispatch(fetchPosts())
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       });

       it('creates FETCH_TODO_FAILURE when fetching posts has been failed', () => {
           nock(TEST_DOMAIN)
               .get(`${ROOT_URL}${POST_PATH}`)
               .reply(400);

           const store = mockStore({});
           const expectedResponse = [ {
               payload: "", type: FETCH_POSTS.FAILURE
           }];

           return store.dispatch(fetchPosts())
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       });
       
       it('create FETCH_POST_SUCCESS when fetching post has been done', () => {
           nock(TEST_DOMAIN)
               .get(`${ROOT_URL}${POST_PATH}/1`)
               .reply(200, { data: {title: 'hoge', description: 'description', id: 1 } });
           
           const store = mockStore({});
           const expectedResponse = [{
               type: FETCH_POST.SUCCESS,
               payload: {
                   data: {title: 'hoge', description: 'description', id: 1 }
               }
           }];
           
           return store.dispatch(fetchPost(1))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
           })
       });

       it('create FETCH_POST_FAILURE when fetching post has been failed', () => {
           nock(TEST_DOMAIN)
               .get(`${ROOT_URL}${POST_PATH}/1`)
               .reply(400);

           const store = mockStore({});
           const expectedResponse = [{
               type: FETCH_POST.FAILURE,
               payload: ''
           }];

           return store.dispatch(fetchPost(1))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       });

       it('create CREATE_POST_SUCCESS when creating post has been done', () => {
           nock(TEST_DOMAIN)
               .post(`${ROOT_URL}${POST_PATH}`, { title: 'hoge' })
               .reply(201);

           const store = mockStore({});
           const expectedResponse = [{
               type: CREATE_POST.SUCCESS
           }];

           return store.dispatch(createPost({ title: 'hoge' }))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       });

       it('create CREATE_POST_FAILURE when creating post has been done', () => {
           nock(TEST_DOMAIN)
               .post(`${ROOT_URL}${POST_PATH}`, { title: 'hoge' })
               .reply(400);

           const store = mockStore({});
           const expectedResponse = [{
               type: CREATE_POST.FAILURE,
               payload: ''
           }];

           return store.dispatch(createPost({ title: 'hoge' }))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       });
       
       it ('create DELETE_POST_SUCCESS when deleting post has been done', () => {
           nock(TEST_DOMAIN)
               .delete(`${ROOT_URL}${POST_PATH}/1`)
               .reply(204);
           
           const store = mockStore({});
           const expectedResponse = [{
               type: DELETE_POST.SUCCESS
           }];
           
           return store.dispatch(deletePost(1))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       });

       it ('create DELETE_POST_FAILURE when deleting post has been failed', () => {
           nock(TEST_DOMAIN)
               .delete(`${ROOT_URL}${POST_PATH}/1`)
               .reply(400);

           const store = mockStore({});
           const expectedResponse = [{
               type: DELETE_POST.FAILURE,
               payload: ''
           }];

           return store.dispatch(deletePost(1))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       })

       it ('create TOGGLE_POST_SUCCESS when toggling post has been done', () => {
           nock(TEST_DOMAIN)
               .patch(`${ROOT_URL}${POST_PATH}/1/acceptance`)
               .reply(200);

           const store = mockStore({});
           const expectedResponse = [{
               type: TOGGLE_POST.SUCCESS
           }];

           return store.dispatch(togglePost(1))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       });

       it ('create TOGGLE_POST_FAILURE when toggling post has been failed', () => {
           nock(TEST_DOMAIN)
               .patch(`${ROOT_URL}${POST_PATH}/1/acceptance`)
               .reply(400);

           const store = mockStore({});
           const expectedResponse = [{
               type: TOGGLE_POST.FAILURE,
               payload: ''
           }];

           return store.dispatch(togglePost(1))
               .then(() => {
                   expect(store.getActions()).to.eql(expectedResponse)
               })
       })
       

   });
});