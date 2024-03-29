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
    $("#question-3b").css("display", "flex")
  })
  $("#q3b-b1").click(function () {
    // $("#Create").toggle()....
    data.hasEV = "Yes"
    $("#question-3b").hide()
    $("#question-4").css("display", "flex")
  })
  $("#q3b-b2").click(function () {
    // $("#Create").toggle()....
    data.hasEV = "No"
    $("#question-3b").hide()
    $("#question-4").css("display", "flex")
  })
  $("#q3b-b3").click(function () {
    // $("#Create").toggle()....
    data.hasEV = "Planning"
    $("#question-3b").hide()
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
    const validPhone = checkPhone("1" + data.phone.replace(/\D/g, "")).valid
    if (!validPhone || data.fname == "" || data.lname == "" || data.email == "" || data.phone == "" || data.phone.length != 13 || !(data.email.includes("@") && data.email.includes("."))) {
      $("#q-6-alert-1").css("display", "block")
      return
    }
    // alert(JSON.stringify(data))
    doSubmitData(data)
    Calendly.initInlineWidget({
      url: "https://calendly.com/heliogold/solar-consultation",
      parentElement: document.getElementById("calWidget"),
      prefill: {
        name: data.fname + " " + data.lname,
        email: data.email
      },
      utm: {}
    })
    $("#question-6").hide()
    $("#question-7").css("display", "flex")
  })
  $("#q7-b1").click(function () {
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
    url: "https://hooks.zapier.com/hooks/catch/10947484/3wk1v37/",
    data: { json: JSON.stringify(dataThing) },
    success: success
  })
}

//FIELD MASKING
$(document).ready(function () {
  // Mask which specifies options
  $("#phone").inputmask({ mask: "(999)999-9999" })
})

//VERIFY PHONE NUMBER
function checkPhone(thePhoneNumber) {
  const url = "https://phonevalidation.abstractapi.com/v1/?api_key=3e03f69b9ae64dc885942c18314a3b07&phone=" + thePhoneNumber
  var response = null

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    async: false, // Making the request synchronous
    success: function (data) {
      response = data
    },
    error: function (xhr, status, error) {
      console.error("Request failed: " + status + ", " + error)
    }
  })

  return response
}
