analogy = {
  unit: [],
  init: function() {
    $("body").append("<div class='test_suite'>Tests</div>");
  },
  add_test: function(name, fnc) {
    this.unit[name] = fnc;
  },
  do: function() {
    $('.test_suite').empty();
    for (test in this.unit) {
      this.perform_test(this.unit[test], test)
    }
  },
  perform_test: function (fnc, name) {
    analogy.tests.initialise_test(fnc);
    try {
      result = this.unit[name]();
      result = result ? "success" : "failure";
      $(".test_suite").append("<div class='" + result + "'>" + result + " : " + name + "</div>");
    } catch(exception) {
      var error_block = $("<div class='error'><p class='test'>error: " + name + "</p></div>");
      error_block.append("<p class='message'>" + exception.message + "</p>");
      for (variables in this.unit[name]) {
        error_block.append("<p class='variable'>" + this.unit[variables] + "</p>");
      }
      if (exception.stack) {
        var stack = exception.stack.split("\n");
        for (message in stack) {
          error_block.append("<p class='stack'>" + stack[message] + "</p>");
        }
        
      }
      $(".test_suite").append(error_block);
    }
    analogy.tests.cleanup_test(fnc);
  },
  output_success: function
  initialise_test: function(fnc) {
    analogy.tests.stored_html = $("body").html();
    if (fnc.init) {
      fnc.init();
    }
    results = [];
    failures = [];
  },
  /* Clean up after a test */
  cleanup_test: function(fnc) {
    var test_html = $(".test_suite").html();
    $("body").html(analogy.tests.stored_html);
    $(".test_suite").html(test_html);
  },
  assert: function(fnc) {
    var result = fnc();
    return;
  }
}