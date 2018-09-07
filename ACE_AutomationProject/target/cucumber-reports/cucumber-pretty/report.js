$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("website/RewardsUserStory/MemberTotalRewards.feature");
formatter.feature({
  "line": 2,
  "name": "Verification for member rewards scenarios",
  "description": "",
  "id": "verification-for-member-rewards-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@website"
    }
  ]
});
formatter.before({
  "duration": 4211796997,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "002 Verify that Users can receive incentives for choosing a designated lower-cost provider (Member rewards)",
  "id": "verification-for-member-rewards-scenarios;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User logins in to member connect Application with \"sumani@memberconnect.v3\" and \"Aug#2018\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User navigates to \"Customer Search\" tab.",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"Erica\" in \"First Name\" field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "selected Member details are displayed \"Erica\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Agent clicks on Verify button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User navigates to \"Member 360\" tab.",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"View Details\" under \"Rewards\" section.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be able to view the rewards summary.",
  "keyword": "Then "
});
});