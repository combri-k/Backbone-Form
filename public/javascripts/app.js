$(document).ready(function() {
  _.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };

  var FieldView = Backbone.View.extend({
    getCount: function() {
      if(_.isUndefined(this.count)) this.count = 0;
      return this.count += 1;
    },

    activitiesTemplate: _.template($("#activities-template").html()),

    activityTemplate: _.template($("#activity-template").html()),

    events: {
      "click #add-activity": "addField",
      "click .remove-activity": "removeField"
    },

    removeField: function(e) {
      $(e.srcElement).parents(".activity").remove();
      return false;
    },

    addField: function() {
      $(this.el).find("#activity-fields").append(this.activityTemplate({ id: this.getCount() }));
      return false;
    },

    render: function() {
      $(this.el).html(this.activitiesTemplate());
      return this;
    }
  });

  fieldView = new FieldView;
  $("#activities").html(fieldView.render().el);
});
