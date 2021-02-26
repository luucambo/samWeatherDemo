// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const AWS = require('aws-sdk')
const axios = require('axios')
const querystring = require('querystring');

exports.lambdaHandler = async (event, context, callback) => {
    //var city = querystring.escape(event.arguments.City);
    console.log(event)
    
    var data = await axios.get('http://api.openweathermap.org/data/2.5/forecast?id=64536&appid=d7442491d0099b4496a5dfd09858792d&cnt=3&units=imperial');
   
    const response = {
        statusCode: 200,
        body: JSON.stringify(data.data),

    };
    
    // console.log(response)
   return response;
};
