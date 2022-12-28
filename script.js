const cover = document.querySelector(".cover");

cover.src =
  "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

function Player(id) {
  this.id = id;
  this.element = document.querySelector(`#${id}-score`);
  this.button = document.querySelector(`#${id}-btn`);
  this.reset = document.querySelector("#reset");
  this.playTo = document.querySelector("#playing-to");
  this.score = 0;
  this.max = this.playTo.value;

  function disableBtns(disable) {
    document.querySelectorAll("button").forEach((btn) => {
      btn.disabled = disable;
    });
  }

  this.button.addEventListener("click", () => {
    this.score++;
    this.element.innerText = this.score;

    if (this.score >= this.max) {
      disableBtns(true);

      const buttons = document.querySelectorAll("span");

      switch (this.id) {
        case "p1":
          buttons[0].classList.add("winner");
          buttons[1].classList.add("loser");
          break;
        case "p2":
          buttons[1].classList.add("winner");
          buttons[0].classList.add("loser");
          break;
      }

      this.reset.disabled = false;
    }
  });

  this.reset.addEventListener("click", () => {
    this.score = 0;
    this.element.innerText = this.score;

    this.element.removeAttribute("class");

    disableBtns(false);
  });

  this.playTo.addEventListener("change", () => {
    this.reset.click();
    this.max = this.playTo.value;
  });
}

const playerOne = new Player("p1");
const playerTwo = new Player("p2");
