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

describe('posting namespace data',function(){
   it('namespace post testing', function(done) {
   this.timeout(15000);

    api.post('/namespace/post')
      .end(function(err, res){
          if(err) return done(err);      
          done();
          });
      });
  });

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
describe('testing streams',function(){
    it('testing',function(done)
    {
            this.timeout(15000);        
             api.get('/stream/get/:stream')
         .end(function(err,res)
                    {
                        console.log("status " + res.status);
                        expect(res.type).to.equal('application/json');
                        done();                
                    });    
            });
    });
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
// describe('put streams',function(){
// it('testing streams', function(done){
//             api.put('/stream/put/:stream')
//             .expect(200)
//             .end(function(err, res){
//             if(err) return done(err);      
//             done();
//             });
//         });
//     });
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









