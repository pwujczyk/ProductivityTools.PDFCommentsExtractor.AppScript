function testFunction(){
  var url="http://83.24.15.44:7170/api/echo?hello=rweqr3"
  var response=UrlFetchApp.fetch(url);
  var responseText = response.getContentText()
  Logger.log(responseText)
}

function sentFile(fileId, idKey) {
  var url = 'http://83.24.15.44:7170/api/upload'


   var file = DriveApp.getFileById(fileId).getAs(MimeType.PDF);
  var headers = {
    'Content-Disposition': 'attachment; filename="'+ file.getName() +'"',
  };
  var options =
      {
        "method" : "post",
        "payload": file.getBytes(),
        "headers": headers,
        "contentLength": file.getBytes().length,
      };
  var result = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  Logger.log(result);



  var bearer = "Bearer " + idKey;
  var data = {
    "xxx": "xx"
  }
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'headers': {
      'authorization': bearer
    },
    'payload': JSON.stringify(data)
  };

  Logger.log(url);
  Logger.log(options);

  var response = UrlFetchApp.fetch(url, options);
  var responseText = response.getContentText()
  Logger.log(responseText);
  return responseText;
}

function myFunction() {
  testFunction();
  //sentFile("pawel")
  var bookhighligthsDirectory = DriveApp.getFoldersByName("Newsweek").next();
  console.log("started")
  var sourceFileName = "pawel";
  var bookhighligthsFiles = bookhighligthsDirectory.getFiles()
  while (bookhighligthsFiles.hasNext()) {
    file = bookhighligthsFiles.next();
    var fileId=file.getId();
    sentFile(fileId,"pawel");
    sourceFileName = file.getName();
    console.log(sourceFileName);
    //     console.log(file.getId())
  }
  console.log("Returning")
  return sourceFileName

}
