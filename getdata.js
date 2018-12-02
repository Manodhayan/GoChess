console.log("Hello! I'm in");

//Icons URL
// https://icons8.com/icon/set/chess/all

// Initialize default app
// Retrieve your own options values by adding a web app on
// https://console.firebase.google.com
firebase.initializeApp({
  apiKey: "AIzaSyATCMKgjVSZOCpuTcNcALhWq0OzBUuGIXk",                             // Auth / General Use
  authDomain: "nike-dfcb3.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://nike-dfcb3.firebaseio.com", // Realtime Database
  storageBucket: "nike-dfcb3.appspot.com",          // Storage
  messagingSenderId: "886101803311"                  // Cloud Messaging
});

var table_id=["t11","t12","t13","t21","t22","t23","t31","t32","t33"]
var table_doc=new Array(table_id.length);

for (id in table_id)
{
	console.log(id);
	table_doc[id]=document.getElementById(table_id[id]);
}
// var board=document.getElementById("board");
// var board_content="<table>"

var firebase_object=firebase.database().ref();
firebase_object.on('value',function(snapshot){
	console.log(snapshot.val());
	 var index=0;
	 for (var reader in snapshot.val())
        {
 
        	console.log(reader,snapshot.val()[reader]);
        	table_doc[index].innerHTML=snapshot.val()[reader];
        	index+=1;
        	// board_content+="<tr><td>"+reader+"</td><td>"+snapshot.val()[reader]+"</td></tr>";
        }

// board_content+="</table>"
// console.log(board_content);
// board.innerHTML=board_content;
});
table_doc[8].innerHTML="<img src='icons/Black Rook.png'>";
table_doc[7].innerHTML="<img src='icons/White Rook.png'>";
