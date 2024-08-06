function myFunction() {
  var bookhighligthsDirectory = DriveApp.getFoldersByName("Newsweek").next();
  console.log("started")
  var sourceFileName="pawel";
  var bookhighligthsFiles = bookhighligthsDirectory.getFiles()
  while (bookhighligthsFiles.hasNext()) {
    file = bookhighligthsFiles.next();
    sourceFileName = file.getName();
    console.log(sourceFileName);
    //     console.log(file.getId())
  }
  console.log("Returning")
  return sourceFileName

}
