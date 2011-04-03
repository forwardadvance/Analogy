Analogy is a Javascript test framework that aims to satisfy the following conditions:
=====================================================================================

1. It should be just Javascript. It should use what you've already got. There should be no other dependencies.
2. It should be just Javascript. No fancy syntactic sugar clouding things up.
3. It should support Mocks, Fixtures, unit, integration and UI tests.
4. It should clean up it's own mess. If your test changes the DOM, or mocks a variable, it puts it back after.
5. It should give great error messages. If it dies it should give as much information as possible.

*Analogy is currently in development. The master does not currently work.*

Currently it fails number 1 as it needs external CSS and JQuery to work. I'm working to fix this in a later release.

How to use
----------

*Import Analogy in your header.*

    <script src="baby.js" type="text/javascript" charset="utf-8"></script>
    <link href="analogy.css" rel="stylesheet" media="screen" charset="utf-8" />

*Write your tests like so. A test returns true or false.*

    analogy.tests.add_test("default date should be offset from present date by the correct amount", function() {
      var march_2010 = new Date(Date.parse('Mar 8, 2010'));
      var nov_2010 = new Date(Date.parse('Nov 8, 2010'));
      var july_2011 = new Date(Date.parse('Jul 8, 2011'));
      condition_1 = myapp.default_date(march_2010, 8).getTime() === nov_2010.getTime();
      condition_2 = myapp.default_date(nov_2010, 8).getTime() === july_2011.getTime();
      return condition_1 && condition_2;
    });

*call*

    baby.tests.init();
    baby.tests.do();

This codebase is at an early stage and is subject to change...