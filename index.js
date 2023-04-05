window.addEventListener("load", () => {
  game.gamePlay();
});
const game = {
  intro: document.querySelector(".intro-screen__intro"),
  introScreen: document.querySelector(".intro-screen"),
  err: document.querySelector(".error"),
  input: document.querySelector("input"),
  info: document.querySelector(".game-info"),
  detailing: document.querySelector(".detailing"),
  btns: document.querySelectorAll(".btn"),
  screenComponents: document.querySelectorAll(".game-screen p"),
  gamePlay: function () {
    this.btnClick();
    this.namePhase();
  },
  namePhase: function () {
    this.input.value = "";
    this.input.addEventListener("click", () => {
      this.err.classList.remove("appear");
    });
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.Continue();
      }
    });
  },
  btnClick: function () {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        switch (btn.textContent) {
          case 'Continue':
            this.Continue();
            break;
          case "Play Game":
            this.playGame();
            break;
          case "Rock":
            this.RockPaperScissors(btn.textContent);
            break;
          case "Scissors":
            this.RockPaperScissors(btn.textContent);
            break;
          case "Paper":
            this.RockPaperScissors(btn.textContent);
            break;
          case "Reset":
            this.screenComponents.forEach(comp => {
                switch(comp.className){
                    case 'user':
                        comp.textContent = `${this.input.value}:`
                        break;
                    case 'computer':
                        comp.textContent = `PC:`;
                        break;
                    case 'status': 
                        comp.textContent = 'Stat:'
                        break;
                }
            })
            break;
          default:
            break;
        }
      });
    });
  },
  Continue: function () {
     if (this.input.value == "") {
      this.err.textContent = "Error: Name box is empty! Please enter your name";
      this.err.classList.add("appear");
      console.log("EMPTY!!");
    } else {
      let userName = this.input.value;
      this.intro.classList.add("disappear");
      this.detailing.textContent = `Hey, ${userName}! Please read the instructions below carefully before you start the game`;
      this.info.classList.add("appear");
      this.screenComponents.forEach((component) => {
        switch (component.className) {
          case "user":
            component.textContent = `${userName}:`;
            break;
          default:
            break;
        }
      });
    }
  },
  playGame: function () {
    this.introScreen.classList.add("disappear");
  },

  RockPaperScissors: function (btn) {
    let options = ["Rock", "Paper", "Scissors"];
    function randomNum() {
      return Math.floor(Math.random() * options.length);
    }
    let option = options[randomNum()];
    let user = this.input.value;
    this.screenComponents.forEach((comps) => {
      switch (comps.className) {
        case "computer":
          comps.textContent = `PC: ${option}`;
          break;
        case "user":
          comps.textContent = `${user}: ${btn}`;
          break;
        case "status":
            if (option == btn){
                comps.textContent = "Stat: It's a tie!"
            }
            else if(option == options[0] && btn == options[1]){
                comps.textContent = "Stat: You Win!"
            }
            else if(option == options[0] && btn == options[2]){
                comps.textContent = "Stat: PC Wins!"
            }
            else if(option == options[1] && btn == options[0]){
                comps.textContent = "Stat: PC Wins!"
            }
            else if(option == options[1] && btn == options[2]){
                comps.textContent = "Stat: You Win!"
            }
            else if(option == options[2] && btn == options[0]){
                comps.textContent = "Stat: You Win!"
            }
            else if(option == options[2] && btn == options[1]){
                comps.textContent = "Stat: PC Wins!"
            }
      }
    });
  },
};
