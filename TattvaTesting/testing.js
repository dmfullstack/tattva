var chai=require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
var log=require('../server.js');
var supertest = require('supertest');
var api=supertest("http://localhost:8081");
// Test Cases of namespace
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


// Test case of appending data 
 describe('namespace put',function(){
 it('namespace testing', function(done){
             api.put('/namespace/put/:namespace_id')
             .end(function(err, res){
	        if(err) return done(err);      
	        done();
	        });
	    });
	});


describe('testing namespace',function(){
    it('http response code returned', function(done) {
     
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
	                    console.log("status " + res.status);
	                    expect(res.type).to.equal('application/json');
	                    done();                
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

// Test case of put streams 
 describe('put streams',function(){
 it('testing streams', function(done){
             api.put('/stream/put/:stream_id')
             .end(function(err, res){
	        if(err) return done(err);      
	        done();
	        });
	    });
	});



describe('testing streams',function(){
	it('testing',function(done)
	{
			 api.get('/stream/get/:stream')
		 .end(function(err,res)
	                {
	                    console.log("status " + res.status);
	                    expect(res.type).to.equal('application/json');
	                    done();                
	                });    
	        });
	});


    




