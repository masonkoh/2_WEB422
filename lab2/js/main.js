/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Youngmin Ko____ Student ID: _019155159___ Date: _2019/SEP/14____
*
*
********************************************************************************/ 


$(function () {
  $(document).ready(function () {
    console.log("I'm ready! from main.js(2018/09/144)")
  })

    // main code start
    $("#teams-menu").on("click",function(event){
      event.preventDefault();

      $.ajax({
          url: "https://nameless-harbor-59273.herokuapp.com/teams",
          type: "GET",
          contentType: "application/json"
      })
      .done(function (data) {
          $("#data").empty().html("<h3>Teams</h3>").append(JSON.stringify(data));
      });
  });

  $("#employees-menu").on("click",function(event){
      event.preventDefault();
      
      $.ajax({
          url: "https://nameless-harbor-59273.herokuapp.com/employees",
          type: "GET",
          contentType: "application/json"
      })
      .done(function (data) {
          $("#data").empty().html("<h3>Employees</h3>").append(JSON.stringify(data));
      });
  });

  $("#projects-menu").on("click",function(event){
      event.preventDefault();
      
      $.ajax({
          url: "https://nameless-harbor-59273.herokuapp.com/projects",
          type: "GET",
          contentType: "application/json"
      })
      .done(function (data) {
          $("#data").empty().html("<h3>Projects</h3>").append(JSON.stringify(data));
      });
  });

  $("#positions-menu").on("click",function(event){
      event.preventDefault();
      
      $.ajax({
          url: "https://nameless-harbor-59273.herokuapp.com/positions",
          type: "GET",
          contentType: "application/json"
      })
      .done(function (data) {
          $("#data").empty().html("<h3>Positions</h3>").append(JSON.stringify(data));
      });
  });
})