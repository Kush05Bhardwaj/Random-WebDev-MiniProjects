function removeDuplicatesFromArray(arr) {
      let unique = [];
      
      for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        
        for (let j = 0; j < unique.length; j++) {
          if (arr[i] === unique[j]) {
            isDuplicate = true;
            break;
          }
        }
        
        if (!isDuplicate) {
          unique.push(arr[i]);
        }
      }
      
      return unique;
    }

    function removeDuplicates() {
      const input = document.getElementById('arrayInput').value;
      const result = document.getElementById('result');

      if (!input) {
        alert('Please enter an array!');
        return;
      }

      const arr = input.split(',').map(item => item.trim());
      const uniqueArray = removeDuplicatesFromArray(arr);
      
      result.innerHTML = `
        <strong>Original Array:</strong><br>
        [${arr.join(', ')}]<br><br>
        <strong>After Removing Duplicates:</strong><br>
        [${uniqueArray.join(', ')}]
      `;
      result.classList.add('show');
    }