var chai=require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
var log=require('../server.js');
var supertest = require('supertest');
var api=supertest("http://localhost:8081");

//Test Cases of namespace
describe('getting namespace data',function(){
     it('namespace testing', function(done) {
      api.get('/namespace/get/:namespace')
       .expect(200)
        .end(function(err, res){
            if(err) return done(err);      
            done();
            });
        });
    });

//test case for tessting response of namespace data
describe('testing namespace',function(){
   it('http response code returned', function(done) 
   { 
       this.timeout(15000);
    api.get('/namespace/get/:namespace')
       .end(function(err, res) {
       assert.isDefined(res.status, 'Has Response Code');
       done();
       });
   });
    });

//test case of checking type of namespace data
describe('data type of namespace',function(){
    it('testing for data type',function(done)
    {
        api.get('/namespace/get/:namespace')
         .end(function(err,res)
            {
                this.timeout(15000);
                console.log("status " + res.status);
                expect(res.type).to.equal('application/json');
                done();                
            });    
        });
    });

//test case of checking whether namespace data is null or not
describe('checking namespace data',function(){
    it('whether namespace is null or not', function(done) {
     this.timeout(15000);
     api.get('/namespace/get/:namespace')
       .end(function(err, res){
           if(err) return done(err);      
           else{
                 expect(err).to.be.null;
                 done();
               }
           });
       });
   });

// Test Cases of getting streams
describe('getting streams data',function(){
     it('streams testing', function(done) {
      api.get('/stream/get/:stream')
       .expect(200)
        .end(function(err, res){
            if(err) return done(err);            
            done();
            });
        });
    });

// Test Case of checking type of streams data
describe('testing streams',function(){
    it('testing',function(done)
    {
        this.timeout(15000);        
         api.get('/stream/get/:stream')
          .end(function(err,res){
            console.log("status " + res.status);
            expect(res.type).to.equal('application/json');
            done();                
            });    
        });
    });

//test case for checking whether 
describe('checking namespace in streams',function(){
    it('checking whether namespace is being fetched in streams or not',function(done)
    {
          api.get('/stream/get2/:namespace')
          .expect(200)
          .end(function(err, res){
            if(err) return done(err);      
            done();
        });
    });
});

//test case of checking whether the streams data is null or not
describe('checking streams data',function(){
    it('whether streams data is null or not', function(done) {
     this.timeout(15000);
     api.get('/stream/get/:stream')
       .end(function(err, res){
           if(err) return done(err);      
           else{
                   expect(err).to.be.null;
                   done();
               }
           });
       });
   });

//checking whether namespace data is coming in streams or not
describe('checking namespace data in streams',function(){
    it('whether namespace data in streams is null or not', function(done) {
     this.timeout(15000);
     api.get('/stream/get2/:namespace')
       .end(function(err, res){
           if(err) return done(err);      
           else{
                  expect(err).to.be.null;
                  done();
               }
           });
       });
   });

//test case of getting watchlist data
describe('getting watchlist data',function(){
     it('watchlist testing', function(done) {
      api.get('/watchlist/get')
       .expect(200)
        .end(function(err, res){
            if(err) return done(err);      
            done();
            });
        });
    });

//test case of checking whether watchlist data is null or not
describe('checking watchlist data',function(){
    it('whether watchlist data is null or not', function(done) {
     this.timeout(15000);
     api.get('/watchlist/get')
       .end(function(err, res){
           if(err) return done(err);      
           else{
                  expect(err).to.be.null;
                  done();
               }
           });
       });
   });

//test case of checking whether namespace data is coming in watchlist or not
describe('checking namespace data in watchlist',function(){
    it('whether namespace data in watchlist is null or not', function(done) {
     this.timeout(15000);
     api.get('/watchlist/get/:namespace')
       .end(function(err, res){
           if(err) return done(err);      
           else{
                  expect(err).to.be.null;
                  done();
               }
           });
       });
   });

//test case for checking whether streams data is coming in watchlist or not
describe('checking streams data in watchlist',function(){
    it('whether streams data in watchlist is null or not', function(done) {
     this.timeout(15000);
     api.get('/watchlist/get/:stream')
       .end(function(err, res){
          if(err) return done(err);      
          else{
                 expect(err).to.be.null;
                 done();
              }
           });
       });
   });

//test case for testing whether streamms data is coming in watchlist or not
describe('data type of watchlist',function(){
    it('testing for data type',function(done){
       api.get('/watchlist/get')
          .end(function(err,res)
          {
              this.timeout(15000);
              console.log("status " + res.status);
              expect(res.type).to.equal('application/json');
              done();                
                  });    
            });
    });
