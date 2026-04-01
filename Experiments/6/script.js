function countCharacters() {
      const input = document.getElementById('textInput').value;
      const result = document.getElementById('result');
      const count = input.length;

      result.textContent = `Number of characters: ${count}`;
      result.classList.add('show');
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
}