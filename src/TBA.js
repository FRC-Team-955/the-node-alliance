var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var tbaReq = new XMLHttpRequest();
var startURL = "https://www.thebluealliance.com/api/v2";

/**
 * Files a GET request to The Blue Alliance using a Promise.
 * @param {String} url - The Blue Alliance API URL
 */
var getData = (url) =>{
    return new Promise((resolve,reject) =>{
        tbaReq.open("GET", url, true);      // Instantiate XMLHTTPRequest as a GET request at url. Mark as asynchronous
        tbaReq.onreadystatechange = () => { // Runs when reday state changes
            if(tbaReq.readyState === 4){        // Checks if request has been made 
                if(tbaReq.status === 200){          // Checks if request was a success
                    resolve(tbaReq.responseText);       // Sets Promise equal to the response
                }
                
                else{    
                    reject(tbaReq.statusText);  // If the the request failed set the Promise equal to the error text
                }
            }
        };
        
        tbaReq.send();  // Sends the request
    })
}    

/**
 * Export a constructor for TBA requests
 * @param {String} id - Idenfifier required by TBA api follows the format <team/person id>:<app description>:<version>
 */
module.exports = function TBA(id){
        // Set the app ID to the given ID
        this.id = "X-TBA-App-Id=" + id;
        
        // Objects which contains methods for requests
        this.team     = {};
        this.event    = {};
        this.district = {};
                
        /**
         * Files a GET request with the format for a page from the Team List Request
         * @param {Object} data - Object containing the property {pageNum}
         * @param {Function} callback - Function to be called with data returned from TBA 
         */
        
        this.team.listTeams = (data, callback) => {
            getData(`${startURL}/teams/${data.pageNum}?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });      
        };
        
        /**
         * Files a GET request with the format for a Team Request
         * @param {Object} data - Object containing the property {teamKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team = (data, callback) => {
            console.log(`${startURL}/team/frc${data.teamKey}?${this.id}`);
            getData(`${startURL}/team/frc${data.teamKey}?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            }); 
        };
                        
        /**
         * Files a GET request with the format for a Team Events Request
         * @param {Object} data - Object containing the properties {teamKey, year}
         * @param {Function} callback - Function to be called with data returned from TBA 
         */
        
        this.team.events = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/${data.year}/events?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            }); 
        };
        
        /**
         * Files a GET request with the format for a Team Event Awards Request
         * @param {Object} data - Object containing the properties {teamKey, year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.eventAwards = (dat0a, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/event/${data.year}${data.eventKey}/awards?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            }); 
        };
        
        /**
         * Files a GET request with the format for a Team Event Matches Request
         * @param {Object} data - Object containing the properties {teamKey, year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.eventMatches = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/event/${data.year}${data.eventKey}/matches?${this.id}`).then((response) =>{
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            }); 
        };
        
        /**
         * Files a GET request with the format for a Team Years Participated Request
         * @param {Object} data - Object containing the properties {teamKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.yearsParticipated = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/years_participated?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            }); 
        };
        
        /**
         * Files a GET request with the format for a Team Media Request
         * @param {Object} data - Object containing the properties {teamKey, year}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.media = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/${data.year}/media?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            }); 
        };
        
        /**
         * Files a GET request with the format for a Team History Events Request
         * @param {Object} data - Object containing the properties {teamKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.historyEvents = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/history/events?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                return(err);
            });   
        };
        
        /**
         * Files a GET request with the format for a Team History Awards Request
         * @param {Object} data - Object containing the properties {teamKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.historyAwards = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/history/awards?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };
        
        /**
         * Files a GET request with the format for a Team History Robots Request
         * @param {Object} data - Object containing the properties {teamKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.historyRobots = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/history/robots?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };
        
        /**
         * Files a GET request with the format for a Team History Districts Request
         * @param {Object} data - Object containing the properties {teamKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.team.historyDistricts = (data, callback) => {
            getData(`${startURL}/team/frc${data.teamKey}/history/districts?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };    
        
        /**
         * Files a GET request with the format for an Event List Request
         * @param {Object} data - Object containing the properties {year}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.event.listEvents = (data, callback) => {
            getData(`${startURL}/events/${data.year}?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };
        
        /**
         * Files a GET request with the format for a specific Event Request
         * @param {Object} data - Object containing the properties {year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.event = (data, callback) => {
            getData(`${startURL}/event/${data.year}${data.eventKey}?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };   
        
        /**
         * Files a GET request with the format for a Event Matches Request
         * @param {Object} data - Object containing the properties {year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.event.matches = (data, callback) => {
            getData(`${startURL}/event/${data.year}${data.eventKey}/matches?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };     
        
        /**
         * Files a GET request with the format for a Event Stats Request
         * @param {Object} data - Object containing the properties {year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.event.stats = (data, callback) => {
            getData(`${startURL}/event/${data.year}${data.eventKey}/stats?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };     
        
        /**
         * Files a GET request with the format for a Event Rankings Request
         * @param {Object} data - Object containing the properties {year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.event.rankings = (data, callback) => {
            getData(`${startURL}/event/${data.year}${data.eventKey}/rankings?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };
        
        /**
         * Files a GET request with the format for a Event Awards Request
         * @param {Object} data - Object containing the properties {year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.event.awards = (data, callback) => {
            getData(`${startURL}/event/${data.year}${data.eventKey}/awards?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });
        };

        /**
         * Files a GET request with the format for a Event District Points Request
         * @param {Object} data - Object containing the properties {year, eventKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.event.districtPoints = (data, callback) => {
            getData(`${startURL}/event/${data.year}${data.eventKey}/district_points?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };
    
        /**
         * Files a GET request with the format for a Match Request
         * @param {Object} data - Object containing the properties {year, eventKey, matchKey}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.match = (data, callback) => {
            getData(`${startURL}/match/${data.year}${data.eventKey}_${data.matchKey}?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });
        };
        
        /**
         * Files a GET request with the format for a District List Request
         * @param {Object} data - Object containing the properties {year}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.district.list = (data, callback) => {
            getData(`${startURL}/districts/${data.year}?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        }; 
             
        /**
         * Files a GET request with the format for a District Events Request
         * @param {Object} data - Object containing the properties {districtKey, year}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.district.competitions = (data, callback) => {
            getData(`${startURL}/district/${data.districtKey}/${data.year}/events?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };     
        
        /**
         * Files a GET request with the format for a District Rankings Request
         * @param {Object} data - Object containing the properties {districtKey, year}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.district.pointRankings = (data, callback) => {
            getData(`${startURL}/district/${data.districtKey}/${data.year}/rankings?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };     
        
        /**
         * Files a GET request with the format for a District Teams Request
         * @param {Object} data - Object containing the properties {districtKey, year}
         * @param {Function} callback - Function to be called with data returned from TBA
         */
        this.district.teams = (data, callback) => {
            getData(`${startURL}/district/${data.districtKey}/${data.year}/teams?${this.id}`).then((response) => {
                callback(JSON.parse(response));     // Calls the callback function with the response from TBA
            },
            (err) => {
                callback(err);      // Calls the callback function with the error log
            });   
        };
       
    }
