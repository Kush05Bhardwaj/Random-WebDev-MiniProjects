function customMap(array, callback) {
      let newArray = [];
      
      for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
      }
      
      return newArray;
    }

    function applyCustomMap() {
      const input = document.getElementById('arrayInput').value;
      const operation = document.getElementById('operation').value;
      const result = document.getElementById('result');

      if (!input) {
        alert('Please enter an array!');
        return;
      }

      const arr = input.split(',').map(item => parseFloat(item.trim()));
      
      let callback;
      let operationName;
      
      switch(operation) {
        case 'double':
          callback = (x) => x * 2;
          operationName = 'Double (x * 2)';
          break;
        case 'square':
          callback = (x) => x * x;
          operationName = 'Square (x * x)';
          break;
        case 'addTen':
          callback = (x) => x + 10;
          operationName = 'Add 10 (x + 10)';
          break;
        case 'half':
          callback = (x) => x / 2;
          operationName = 'Half (x / 2)';
          break;
      }
      
      const mappedArray = customMap(arr, callback);
      
      result.innerHTML = `
        <strong>Original Array:</strong><br>
        [${arr.join(', ')}]<br><br>
        <strong>Operation:</strong> ${operationName}<br><br>
        <strong>Mapped Array:</strong><br>
        [${mappedArray.join(', ')}]
      `;
      result.classList.add('show');
    }