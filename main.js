var data = {}

$(document).ready(function () {
  //ALL OF OUR CONTINUE FUNCTIONS
  $("#q1-b1").click(function () {
    // $("#Create").toggle()
    $("#question-1").hide()
    $("#main-cta").hide()
    $("#question-2").css("display", "flex")
  })
  $("#q2-b2").click(function () {
    // $("#Create").toggle()
    $("#question-2").hide()
    $("#question-3").css("display", "flex")
  })
  $("#q3-b1").click(function () {
    // $("#Create").toggle()
    data.avgBill = $("select#bill-select option:selected").val()
    if (data.avgBill == "unselected") {
      $("#q-3-alert-1").css("display", "block")
      return
    }
    $("#question-3").hide()
    $("#question-4").css("display", "flex")
  })
  $("#q4-b1").click(function () {
    // $("#Create").toggle()....
    data.consultType = "In Person"
    $("#question-4").hide()
    $("#question-5").css("display", "flex")
  })
  $("#q4-b2").click(function () {
    // $("#Create").toggle()....
    data.consultType = "Virtual"
    $("#question-4").hide()
    $("#question-5").css("display", "flex")
  })
  $("#q5-b1").click(function () {
    // $("#Create").toggle()....
    data.zip = $("#zip").val()
    data.address = $("#address").val()
    if (data.zip == "" || data.zip.length != 5 || data.zip.match(/[^$,.\d]/)) {
      $("#q-5-alert-1").css("display", "block")
      return
    }
    $("#question-5").hide()
    $("#question-6").css("display", "flex")
  })
  $("#q6-b1").click(function () {
    // $("#Create").toggle()....
    data.fname = $("#fname").val()
    data.lname = $("#lname").val()
    data.email = $("#email").val()
    data.phone = $("#phone").val()
    if (data.fname == "" || data.lname == "" || data.email == "" || data.phone == "" || data.phone.length != 14 || !(data.email.includes("@") && data.email.includes("."))) {
      $("#q-6-alert-1").css("display", "block")
      return
    }
    // alert(JSON.stringify(data))
    doSubmitData(data)
    $("#question-6").hide()
    $("#main-cta").hide()
    $("#success").css("display", "flex")
  })

  //ALL OF OUR NO-QUALIFY FUNCTIONS
  $("#q1-b2").click(function () {
    // $("#Create").toggle()
    $("#question-1").hide()
    $("#main-cta").hide()
    $("#no-qualify").css("display", "flex")
  })
  $("#q2-b1").click(function () {
    // $("#Create").toggle()
    $("#question-2").hide()
    $("#main-cta").hide()
    $("#no-qualify").css("display", "flex")
  })
})

function doSubmitData(dataThing) {
  $.ajax({
    type: "POST",
    url: "http://ogre.adc4gis.com/",
    data: { json: JSON.stringify(dataThing) },
    success: success
  })
}

//FIELD MASKING
$(document).ready(function () {
  // Mask which specifies options
  $("#phone").inputmask({ mask: "(999)-999-9999" })
})

//VERIFY PHONE NUMBER

//ADDRESS AUTOCOMPLETE
