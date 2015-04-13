EDC_DATA = new Mongo.Collection('edc_data');

if (Meteor.isClient) {
  
    Template.activityList.helpers({
    remoteData: function(){
      
      return EDC_DATA.find({}, {sort: {_id: -1}, limit: 100});
    }  
    });
    
 
 Accounts.config({
  forbidClientAccountCreation : true
});
 
 
  Template.sessionPage.rendered = function(){
    
    Deps.autorun(function () {
        lvlChart();
      })
    
    Deps.autorun(function () {
        mbitrateChart();
      })
    
    Deps.autorun(function () {
        wifipacketlossChart();
      })
    
    Deps.autorun(function () {
        gatewaypingtimeChart();
      }) 
    
    
  };
 
  
Template.sessionPage.helpers({
    current_session_id: function(){
      
      return Session.get("current_session_id");
    }  
    });
 
 

 
 
 
     
}
  
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup


    
  });
  
  Meteor.publish("Edc_Data", function () {
    return EDC_DATA.find(); 
 });
  
}
