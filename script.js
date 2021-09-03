var x = document.getElementById('X');
        var o = document.getElementById('O');
        var turn = document.getElementById('turn');

        var player = "";
        var count = 1;
        function playGame(control) {
            //now we are binding the condition if we playGame all 9 box
            
            if (count < 9) {
                if (count % 2 != 0) {
                    //this will return the clicked box id because i have used this object in click function
                    document.getElementById(control.id).innerHTML = "X";
                    player = "Congratulations! Player1 wins";
                } else {
                    document.getElementById(control.id).innerHTML = "O";
                    player = "Congratulations! Player2 wins";
               
                }
                //toggling 
                if (document.getElementById(control.id).innerHTML == "X") {
                    turn.innerHTML = "Player1"
                    o.style.background = "lightseagreen";
                    x.style.background = "honeydew";
                    x.style.color="#000";

                } else {
                    turn.innerHTML = "Player2";
                    x.style.background = "lightseagreen";
                    x.style.color="honeydew";
                    o.style.background = "honeydew";

                }

                count++;
                if (checkWin()) {

                    alert(player)
                    reset();
                }
            } else if(count==9){
             
                alert("Draw!")
                reset();
            }

        }

        //to reset  all boxes after all filled
        function reset() {
            for (var i = 1; i <= 9; i++) {
                document.getElementById(i).innerHTML = "";
            }
         
            x.style.background = "lightseagreen";
            o.style.background = "#honeydew";
            count = 1; //set the value of count to 1 after reset 
        }

        //to check win

        function checkWin() {
            if (checkCondition('1', '2', '3') || checkCondition('4', '5', '6') || checkCondition('7', '8', '9') || checkCondition('1', '4', '7') || checkCondition('2', '5', '8') || checkCondition('3', '6', '9') || checkCondition('1', '5', '9') || checkCondition('3', '5', '7')) {
                return true;
            }

        }

        function getData(box) {
            return document.getElementById(box).innerHTML;
        }

        function checkCondition(box1,box2,box3){
            if(getData(box1)!="" && getData(box2)!="" && getData(box3)!="" && getData(box1)==getData(box2) &&getData(box2)==getData(box3)){
                return true;
            }
        }