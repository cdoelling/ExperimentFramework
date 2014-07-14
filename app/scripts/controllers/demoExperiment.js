'use strict';
angular.module('experimentFrameworkApp')
.controller('DemoExperimentCtrl', function ($scope) {
  $scope.blur = function(){};
  var data = {
    title:'Remove Testing Hardware Bottleneck',
    outcome:'Our team would like to lower lead time and increase overall team throughput of stories.',
    hypothesis:'We feel that the best way to increase team throughput is by helping to address the fact that in many circumstances our tester is overloaded by a large batch of stories that she would need to verify. One of the things that slows her ability to test quickly is the lack of hardware resources. It is our hypothesis that getting additional testing hardware will have a positive effect on our teams throughput and reduce the leadtime for the teams stories.',
    resources:'At least one additional testing environment and one iteration to before checking in with the team to see if the experiment should be continued.',
    procedure:'We are planning on adding an additional test system to see if that will enable the team to experience less occasions of backed up work on in the test column.. We expect to see a drop in time taken to test stories. It is our expectation that testing is one of our team’s bottlenecks and efficiency increases in that process will enable our team to ship software faster to production.',
    data:'We will pay attention to Story Throughput over the course of the experiment.',
    currentState:'From January to March Insights shows that we currently have a insights throughput values between .9 and 1.6',
    postState:'From April to June Insights shows that we currently have a insights throughput values averaging 2.0.',
    effectiveness:'Without the extra overhead of waiting for deployment machines our team is is moving many more stories through the system. Our new average throughput is higher than our previous highest.',
    outliers:'The team seemed to notice a higher portion of their work was spent in the front end portions of the codebase. We are not sure if that was something that could of effected the team\'s throughput.',
    analysis:'It is our belief that we should continue using the new testing hardware. At the next all engineering retrospective we are planning to report our findings and make sure that other teams are not constrained by their lack of testing hardware.'
  };
  $scope.beforeImages = [];
  $scope.afterImages = ['./images/TestingAfter.png'];

  $scope.readonly = true;
  for(var i in data){
    $scope[i] = data[i];
  }
});

