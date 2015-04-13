
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('Edc_Data'); },
  
});

Router.route('/', {
  
            name: 'activityList'
            });

Router.route('/:session_id', {
            name: 'sessionPage',
            data: function() {
              Session.set("current_session_id", this.params.session_id);
              return EDC_DATA.find({session_id: this.params.session_id},{sort: {_id: -1}});
              }
          
    
});