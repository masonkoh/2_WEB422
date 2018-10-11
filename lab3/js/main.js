const urlString = "https://nameless-harbor-59273.herokuapp.com/";
const VERBOSE = false;

// defining a viewModel
var viewModel = {
    teams = ko.observableArray([]),
    employees = ko.observableArray([]),
    projects = ko.observableArray([])
};

// show	generic modal
function showGenericModal(title, message) {
    if (VERBOSE) console.log("main.js:::showGenericModal()" + title);
    if (VERBOSE) console.log("main.js:::showGenericModal()" + message);
    $("#genericModal").modal({
        backdrop: "static", // disable clicking on the backdrop to close
        keyboard: false // disable using the keyboard to close
    });
    $("#myModalTitle").empty();
    $("#myModalMessage").empty();
    $("#myModalTitle").text(title);
    $("#myModalMessage").html(message);
}

// populate your observable "teams" property
// within your "viewModel" with data
// by issuing an AJAX call to your Teams API
function initializeTeams() {
    if (VERBOSE) console.log("main.js:::initializeTeams()");
    // return a Promise
    return new Promise(function (resolve, reject) {
        // request data to REST server with jQuery-ajax
        $.ajax({
            // url: urlString + "team",
            url: urlString + "teams-raw",
            method: "GET",
            contentType: "application/json"
        })
            .done(function (data) {
                // Assign the results to the "viewModel" variable
                viewModel.teams = ko.mapping.fromJS(data);
                if (VERBOSE)
                    console.log(
                        "main.js:::initializeTeams():::" + viewModel.teams().length
                    );
                // If the AJAX call successes, return resolve function
                resolve();
            })
            .fail(function (err) {
                // If the AJAX call fails, return reject function
                if (VERBOSE) console.log("error: " + err.statusText);
                reject("Error loading the team data.");
            });
    });
}

// populate your observable "employees" property
// within your "viewModel" with data
// by issuing an AJAX call to your Teams API
function initializeEmployees() {
    if (VERBOSE) console.log("main.js:::initializeEmployees()");
    return new Promise(function (resolve, reject) {
        // request data to REST server with jQuery-ajax
        $.ajax({
            // according to data-query type, request data to REST
            url: urlString + "employees",
            method: "GET",
            contentType: "application/json"
        })
            .done(function (data) {
                // Assign the results to the "viewModel" variable
                viewModel.employees = ko.mapping.fromJS(data);
                if (VERBOSE)
                    console.log(
                        "main.js:::initializeTeams():::" + viewModel.employees().length
                    );
                // If the AJAX call successes, return resolve function
                resolve();
            })
            .fail(function (err) {
                // If the AJAX call fails, return reject function
                if (VERBOSE) console.log("error: " + err.statusText);
                reject("Error loading the team data.");
            });
    });
}

// populate your observable "Project" property
// within your "viewModel" with data
// by issuing an AJAX call to your Teams API
function initializeProjects() {
    if (VERBOSE) console.log("main.js:::initializeProjects()");
    return new Promise(function(resolve, reject) {
      // request data to REST server with jQuery-ajax
      $.ajax({
        url: urlString + "projects",
        method: "GET",
        contentType: "application/json"
      })
        .done(function(data) {
          // Assign the results to the "viewModel" variable
          viewModel.projects = ko.mapping.fromJS(data);
          if (VERBOSE)
            console.log(
              "main.js:::initializeProjects():::" + viewModel.projects().length
            );
          resolve();
        })
        .fail(function(err) {
          // If the AJAX call fails, return reject function
          if (VERBOSE) console.log("error: " + err.statusText);
          reject("Error loading the team data.");
        });
    });
  }