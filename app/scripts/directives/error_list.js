'use strict';

angular.module('bankApp')
  .directive("errorList", function () {
    var errors = {
      required: "This field is required.",
      number: "Invalid number.",
      min: "Ensure this value is greater than or equal to {{ min }}.",
      max: "Ensure this value is less than or equal to {{ max }}.",
      email: "Enter a valid email address.",
      pattern: "{{ patternErrorMsg }}",
      minlength: "Value must be contain at least {{ minlength }} characters.",
      password: "Passwords don't match.",
      editable: "{{ editableErrorMsg || 'Invalid value.' }}"
    };

    return {
      templateUrl: "views/includes/error_list.html",
      restrict: "A",
      scope: {
        min: "=min",
        max: "=max",
        fieldName: "=fieldName",
        form: "=errorList",
        patternErrorMsg: "=patternErrorMsg",
        minlength: "=minlength",
        editableErrorMsg: "=editableErrorMsg"
      },
      link: function postLink(scope) {
        scope.errors = errors;
      }
    };
  });
