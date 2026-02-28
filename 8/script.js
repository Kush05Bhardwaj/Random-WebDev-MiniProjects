    function reverseNumber(num) {
      const reversed = parseInt(num.toString().split('').reverse().join(''));
      return reversed;
    }

    function showReverse() {
      const input = document.getElementById('numberInput').value;
      const result = document.getElementById('result');

      if (!input) {
        alert('Please enter a number!');
        return;
      }

      const reversed = reverseNumber(input);
      
      result.innerHTML = `
        Original Number: ${input}<br>
        Reversed Number: <strong>${reversed}</strong>
      `;
      result.classList.add('show');
    }