function generate(){

var bookText = document.getElementById('book_txt').value;
var title = document.getElementById('title').value;
var book = document.getElementById("book_container");
var author = document.getElementById("author").value;
var cmd = document.getElementById("cmd").value;
var ttp = document.getElementById("ttp").value;

var command = "/give @p written_book{title:\""+ title + "\",author:\""+author+"\",pages:['{\"text\":\""+bookText+"\",\"hoverEvent\":{\"action\":\"show_text\",\"contents\":[{\"text\":\""+ttp+"\"}]},\"clickEvent\":{\"action\":\"run_command\",\"value\":\""+cmd+"\"}}']} 1";
book.innerHTML = command;

}