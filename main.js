$(document).ready(function () {
  //ALL OF OUR CONTINUE FUNCTIONS
  $("#q1-b1").click(function () {
    // $("#Create").toggle()
    $("#question-1").hide()
    $("#question-2").css("display", "flex")
  })
  $("#q2-b2").click(function () {
    // $("#Create").toggle()
    $("#question-2").hide()
    $("#question-3").css("display", "flex")
  })
  $("#q3-b1").click(function () {
    // $("#Create").toggle()
    $("#question-3").hide()
    $("#question-4").css("display", "flex")
  })
  $("#q4-b1").click(function () {
    // $("#Create").toggle()....
    $("#question-4").hide()
    $("#question-5").css("display", "flex")
  })
  $("#q4-b2").click(function () {
    // $("#Create").toggle()....
    $("#question-4").hide()
    $("#question-5").css("display", "flex")
  })
  $("#q5-b1").click(function () {
    // $("#Create").toggle()....
    $("#question-5").hide()
    $("#question-6").css("display", "flex")
  })
  $("#q6-b1").click(function () {
    // $("#Create").toggle()....
    $("#question-6").hide()
    $("#success").css("display", "flex")
  })

  //ALL OF OUR NO-QUALIFY FUNCTIONS
  $("#q1-b2").click(function () {
    // $("#Create").toggle()
    $("#question-1").hide()
    $("#no-qualify").css("display", "flex")
  })
  $("#q2-b1").click(function () {
    // $("#Create").toggle()
    $("#question-2").hide()
    $("#no-qualify").css("display", "flex")
  })
})
