var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex1 = /^\/lies$/;
      botRegex2 = /^\/help$/;
      botRegex3 = /^\/dormer$/;
      botRegex4 = /^\/youknownothing$/;
      botRegex5 = /^\/John$/;
      botRegex6 = /^\/reddit$/;
      botRegex7 = /^\/wow$/;
      botRegex8 = /^\/quotes$/;

  if(request.text && botRegex1.test(request.text)) {
    this.res.writeHead(200);
    postMessage1();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
        }

      if(request.text && botRegex2.test(request.text)) {
    this.res.writeHead(200);
    postMessage2();
    this.res.end();
      } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
    
    if(request.text && botRegex3.test(request.text)) {
    this.res.writeHead(200);
    postMessage3();
    this.res.end();
      } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
     if(request.text && botRegex4.test(request.text)) {
    this.res.writeHead(200);
    postMessage4();
    this.res.end();
      } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botRegex5.test(request.text)) {
    this.res.writeHead(200);
    postMessage5();
    this.res.end();
      } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botRegex6.test(request.text)) {
    this.res.writeHead(200);
    postMessage6();
    this.res.end();
      } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
    if(request.text && botRegex7.test(request.text)) {
    this.res.writeHead(200);
    postMessage7();
    this.res.end();
      } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
    
    if(request.text && botRegex8.test(request.text)) {
    this.res.writeHead(200);
    postMessage8();
    this.res.end();
      } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage2() {
  var botResponse, attach, options, body, botReq;
    botResponse = "/lies /dormer /youknownothing /John /reddit /wow /quotes /help";
   
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
    
       };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

    function postMessage1() {
  var botResponse, attach, options, body, botReq;
    botResponse = "lies";
    attach = [
    {
      "type"  : "image",
      "url"   : "https://i.groupme.com/453x576.jpeg.a4b4eab011c1404cb2eff4d256c45e13"
    }
  ]



  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
    "attachments" : attach
       };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage3() {
  var botResponse, teamn, attach, options, body, botReq;
    
    teamn = [
        "https://i.groupme.com/620x320.jpeg.82b574859e934db5af4d1790c52766a1",
        "https://i.groupme.com/934x701.jpeg.00489cbd07f74728921dddca7aea5d09",
        ];
    var natalie = teamn[Math.floor(Math.random()*teamn.length)];
    
    
    botResponse = "The Dorm";
    attach = [
    {
      "type"  : "image",
      "url"   : natalie
    }
  ]



  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
    "attachments" : attach
       };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage4() {
  var botResponse, attach, options, body, botReq;
    botResponse = "Jon Snow";
    attach = [
    {
      "type"  : "image",
      "url"   : "https://i.groupme.com/2048x1536.jpeg.ae5c42a6b6644780a0be9dd7b8f6ac84"
    }
  ]

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
    "attachments" : attach
       };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage5() {
  var botResponse, attach, options, body, botReq;
    botResponse = ">Who are you people";
   

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
    
       };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



function postMessage6() {
  
  var botResponse, keywords, options, body, botReq;
    
    keywords = [
 "Fuckin Butter Bar", 
 "What game is that?", 
 "Don't have sex in that helmet!", 
 "Does the suit help too? Why haven't you mentioned it?", 
 "That'll stop him getting laid", 
 "Make him a sandwich", 
 "It's so he can't hear you nag! HAHAHAHHAHAHAHHAHAH"
];
var keyword = keywords[Math.floor(Math.random()*keywords.length)];
    
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : keyword,
    
       };

  console.log('sending ' + keyword + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

    function postMessage7() {
  var botResponse, attach, options, body, botReq;
    botResponse = "MIND BLOWN";
    attach = [
    {
      "type"  : "image",
      "url"   : "https://i.groupme.com/480x360.gif.be63e311c8a64f0e98fd3a4bcc0855c2"
    }
  ]



  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
    "attachments" : attach
       };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage8() {
  
  var botResponse, keywords, options, body, botReq;
    
    keywords = [
 ">Le bruit de la fin du monde dans tes oreilles", 
 ">All that is gold does not glitter", 
 ">To know both sides of a quarrel, is to judge without hate or alarm", 
 ">J'arrive pas à voir les choses qui font le vrai bonheur je dois être aveugle", 
 ">Gedanken ohne Inhalt sind leer, Anschauungen ohne Begriffe sind blind", 
 ">I can hear it screaming in my mind", 
 ">meh is how I conclude all proofs instead of with the Halmos box",
 ">Subjects cannot be dissolved into nature, for in that case what gives nature its sense would be missing",
 ">You know Jeeves, I feel I could do better justice to this philosophy if I understood what all these words meant",
 ">It is a monster Begot upon itself, born on itself",
 ">I only got 10 likes in the last 5 minutes, do you think I should take it down? Let me take another selfie",
 ">being me has its advantages"
];
var keyword = keywords[Math.floor(Math.random()*keywords.length)];
    
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : keyword,
    
       };

  console.log('sending ' + keyword + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;
