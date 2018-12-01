import myAssertion from "./myAssertion";

const {
  given,
  then
} = require("cypress-cucumber-preprocessor/resolveStepDefinition");

given(`webpack is configured`, () => {});

then(`this test should work just fine!`, () => {
  myAssertion();
});
