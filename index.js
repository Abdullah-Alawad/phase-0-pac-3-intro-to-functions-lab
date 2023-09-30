//1
function shout(message){
    return message.toUpperCase();
}
shout("hello");

//2
function whisper(message){
    return message.toLowerCase();
}
whisper("HELLO");

//3
function logShout(message){
    console.log(message.toUpperCase());
}
logShout("hello");

//4
function logWhisper(message){
    console.log(message.toLowerCase());
}
logWhisper("HELLO");

//5
function sayHiToHeadphonedRoommate(message){
    if(message === message.toLowerCase())
        return 'I can\'t hear you!'
    else if(message === message.toUpperCase())
        return 'YES INDEED!'
    else if(message === "Let\'s have dinner together!")
        return 'I would love to!'
}
sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate("HELLO");
sayHiToHeadphonedRoommate("Let\'s have dinner together!");
